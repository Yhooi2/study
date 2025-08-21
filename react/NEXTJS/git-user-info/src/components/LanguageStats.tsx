import { type GitHubUser } from "@/apollo/github-api.types"

type LanguageStatsProps = {
    user: GitHubUser
}

// Function to convert bytes to lines of code
function bytesToLines(bytes: number): number {
    return Math.round(bytes / 4)
}

// Function to format file size
function formatSize(bytes: number): string {
    if (bytes >= 1024 * 1024) {
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    } else if (bytes >= 1024) {
        return `${(bytes / 1024).toFixed(1)} KB`
    }
    return `${bytes} B`
}

export function LanguageStats({ user }: LanguageStatsProps) {
    const repositories = user.repositories.nodes || []
    
    // Collect language statistics
    const languageStats = new Map<string, { bytes: number, repos: number }>()
    
    repositories.forEach(repo => {
        if (repo.languages) {
            repo.languages.edges.forEach(edge => {
                const langName = edge.node.name
                const current = languageStats.get(langName) || { bytes: 0, repos: 0 }
                languageStats.set(langName, {
                    bytes: current.bytes + edge.size,
                    repos: current.repos + 1
                })
            })
        }
    })
    
    // Sort by code size
    const sortedLanguages = Array.from(languageStats.entries())
        .map(([name, stats]) => ({
            name,
            bytes: stats.bytes,
            repos: stats.repos,
            lines: bytesToLines(stats.bytes)
        }))
        .sort((a, b) => b.bytes - a.bytes)
        .slice(0, 8)

    if (sortedLanguages.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Programming Languages</h2>
                <p className="text-gray-600">No language data available</p>
            </div>
        )
    }

    const totalBytes = sortedLanguages.reduce((sum, lang) => sum + lang.bytes, 0)

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Programming Languages</h2>
            <div className="space-y-3">
                {sortedLanguages.map((lang) => {
                    const percentage = totalBytes > 0 ? (lang.bytes / totalBytes) * 100 : 0
                    return (
                        <div key={lang.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                    <span className="font-medium text-gray-900">{lang.name}</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-bold text-gray-900">
                                        {formatSize(lang.bytes)}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {lang.lines.toLocaleString()} lines
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                                    <div 
                                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                                <span>{percentage.toFixed(1)}%</span>
                            </div>
                            <div className="text-xs text-gray-500">
                                Used in {lang.repos} {lang.repos === 1 ? 'repository' : 'repositories'}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total code size:</span>
                    <span className="font-bold text-gray-900">{formatSize(totalBytes)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total lines of code:</span>
                    <span className="font-bold text-gray-900">
                        {bytesToLines(totalBytes).toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    )
}
