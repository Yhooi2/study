import { type GitHubUser, isYearlyContributions } from "@/apollo/github-api.types"

type ContributionsChartProps = {
    user: GitHubUser
}

export function ContributionsChart({ user }: ContributionsChartProps) {
    // Получаем год создания аккаунта
    const createdAtDate = new Date(user.createdAt)
    const accountCreatedYear = isNaN(createdAtDate.getTime()) ? new Date().getFullYear() : createdAtDate.getFullYear()
    const currentYear = new Date().getFullYear()
    
    // Создаем массив всех годов от создания аккаунта до текущего
    const contributions = []
    for (let year = accountCreatedYear; year <= currentYear; year++) {
      const contribKey = `contrib${year}` as keyof GitHubUser
      const contribData = user[contribKey]
      
      const commits = isYearlyContributions(contribData)
        ? contribData.totalCommitContributions
        : 0
        
      contributions.push({ year, commits })
    }
    
    // Сортируем по году в обратном порядке (от новых к старым)
    contributions.sort((a, b) => b.year - a.year)

    const maxCommits = contributions.length
      ? Math.max(...contributions.map(c => c.commits))
      : 0

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
