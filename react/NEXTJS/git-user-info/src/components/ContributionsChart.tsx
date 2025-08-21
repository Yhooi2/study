import { type GitHubUser } from "@/apollo/github-api.types"

type ContributionsChartProps = {
    user: GitHubUser
}

export function ContributionsChart({ user }: ContributionsChartProps) {
    const contributions = [
        { year: 2023, commits: user.contrib2023?.totalCommitContributions || 0 },
        { year: 2024, commits: user.contrib2024?.totalCommitContributions || 0 },
        { year: 2025, commits: user.contrib2025?.totalCommitContributions || 0 }
    ].filter(item => item.commits > 0)

    const maxCommits = Math.max(...contributions.map(c => c.commits))

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Commit Activity</h2>
            <div className="space-y-4">
                {contributions.map((contribution) => {
                    const percentage = maxCommits > 0 ? (contribution.commits / maxCommits) * 100 : 0
                    return (
                        <div key={contribution.year} className="flex items-center space-x-4">
                            <div className="w-16 text-sm font-medium text-gray-700">
                                {contribution.year}
                            </div>
                            <div className="flex-1 bg-gray-200 rounded-full h-6">
                                <div 
                                    className="bg-gradient-to-r from-green-400 to-green-600 h-6 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                            <div className="w-20 text-right text-sm font-bold text-gray-900">
                                {contribution.commits.toLocaleString()}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mt-4 text-sm text-gray-600">
                Total commits: {contributions.reduce((sum, c) => sum + c.commits, 0).toLocaleString()}
            </div>
        </div>
    )
}
