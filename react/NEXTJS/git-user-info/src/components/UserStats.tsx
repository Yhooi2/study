import { type GitHubUser } from "@/apollo/github-api.types"

type UserStatsProps = {
    user: GitHubUser
}

// Function to convert bytes to lines of code
function bytesToLines(bytes: number): number {
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

export function UserStats({ user }: UserStatsProps) {
    // Calculate total lines of code
    const totalLinesOfCode = user.repositories.nodes?.reduce((total, repo) => {
        return total + (repo.languages ? bytesToLines(repo.languages.totalSize) : 0)
    }, 0) || 0

    const stats = [
        {
            label: "Repositories",
            value: user.repositories.totalCount,
            icon: "📦",
            color: "bg-blue-500"
        },
        {
            label: "Followers",
            value: user.followers.totalCount,
            icon: "👥",
            color: "bg-green-500"
        },
        {
            label: "Following",
            value: user.following.totalCount,
            icon: "👤",
            color: "bg-purple-500"
        },
        {
            label: "Gists",
            value: user.gists.totalCount,
            icon: "📝",
            color: "bg-orange-500"
        },
        {
            label: "Lines of Code",
            value: totalLinesOfCode,
            icon: "💻",
            color: "bg-indigo-500",
            formatted: formatLines(totalLinesOfCode)
        }
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg shadow-md p-4 text-center">
                    <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2 text-white text-xl`}>
                        {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.formatted || stat.value.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    )
}
