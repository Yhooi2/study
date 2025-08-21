import { UserBasicInfo } from "./UserBasicInfo"
import { UserStats } from "./UserStats"
import { ContributionsChart } from "./ContributionsChart"
import { TopRepositories } from "./TopRepositories"
import { LanguageStats } from "./LanguageStats"
import useQueryUser from "@/apollo/useQueryUser"

type UserProfileProps = {
    userName: string
}

export function UserProfile({ userName }: UserProfileProps) {
    const { data, loading, error } = useQueryUser(userName)
    
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-64">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading user profile...</p>
                </div>
            </div>
        )
    }
    
    if (error) {
        console.log(error)
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <div className="text-red-600 text-2xl mb-2">⚠️</div>
                <p className="text-red-800 font-medium">Error loading profile</p>
                <p className="text-red-600 text-sm mt-1">{error?.message}</p>
            </div>
        )
    }
    
    if (!data || !data.user) {
        return (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <div className="text-yellow-600 text-2xl mb-2">🔍</div>
                <p className="text-yellow-800 font-medium">User Not Found</p>
                <p className="text-yellow-600 text-sm mt-1">The user "{userName}" could not be found on GitHub</p>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            <UserBasicInfo user={data.user} />
            <UserStats user={data.user} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ContributionsChart user={data.user} />
                <TopRepositories user={data.user} />
            </div>
            <LanguageStats user={data.user} />
        </div>
    )
}
