import { type GitHubUser } from "@/apollo/github-api.types"

type UserBasicInfoProps = {
    user: GitHubUser
}

export function UserBasicInfo({ user }: UserBasicInfoProps) {
    return (
        <div className="flex items-center space-x-6 p-6 bg-white rounded-lg shadow-md">
            <img 
                src={user.avatarUrl} 
                alt={`${user.name || user.login} avatar`}
                className="w-24 h-24 rounded-full border-4 border-gray-200"
            />
            <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {user.name || user.login}
                </h1>
                <p className="text-xl text-gray-600 mb-2">
                    @{user.login}
                </p>
                {user.bio && (
                    <p className="text-gray-700 mb-3">
                        {user.bio}
                    </p>
                )}
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                    {user.location && (
                        <span className="flex items-center">
                            📍 {user.location}
                        </span>
                    )}
                    <span className="flex items-center">
                        📅 Joined {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                </div>
                <a 
                    href={user.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    )
}
