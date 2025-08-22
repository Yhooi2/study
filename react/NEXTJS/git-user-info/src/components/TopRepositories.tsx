import { type GitHubUser } from "@/apollo/github-api.types"

type TopRepositoriesProps = {
    user: GitHubUser
}

// Function to convert bytes to lines of code (approximate)
function bytesToLines(bytes: number): number {
    // Approximately 4 bytes per line of code (including spaces, tabs, characters)
    return Math.round(bytes / 4)
}

// Function to format line numbers
function formatLines(lines: number): string {
    if (lines >= 1000000) {
        return `${(lines / 1000000).toFixed(1)}M`
    } else if (lines >= 1000) {
        return `${(lines / 1000).toFixed(1)}K`
    }
    return lines.toString()
}

export function TopRepositories({ user }: TopRepositoriesProps) {
    const repositories = user.repositories.nodes || []

    // Use commit history from repository data
    const topRepos = repositories
        .map(repo => ({
            ...repo,
            commits: repo.defaultBranchRef?.target?.history?.totalCount || 0,
            linesOfCode: repo.languages ? bytesToLines(repo.languages.totalSize) : 0
        }))
        .filter(repo => repo.commits > 0) // Only show repos with commits
        .sort((a, b) => b.commits - a.commits)
        .slice(0, 5)
    if (topRepos.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Top Repositories</h2>
                <p className="text-gray-600">No repository data available</p>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Top Repositories</h2>
            <div className="space-y-3">
                {topRepos.map((repo, index) => (
                    <div key={repo.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-3 flex-1">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {index + 1}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">{repo.name}</h3>
                                <p className="text-sm text-gray-600">
                                    {repo.description || "No description"}
                                </p>
                                {repo.primaryLanguage && (
                                    <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                        {repo.primaryLanguage.name}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="text-right space-y-1">
                            <div className="text-lg font-bold text-green-600">
                                {repo.commits.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">commits</div>
                            <div className="text-sm font-medium text-blue-600">
                                {formatLines(repo.linesOfCode)} lines
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
