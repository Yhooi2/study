import useQueryUser from "@/apollo/useQueryUser"


type props = {
    userName: string
}

function UserProfile({ userName } : props) {
    const {data, loading, error} = useQueryUser(userName)
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return  <p> {error?.message}</p>
    }
    if (!data || !data.user) return <p>User Not Found.</p>
    console.log(data)
    return (
        <h1 className="text-3xl font-bold underline">
            {data.user.name}
        </h1>
    )
}

export default UserProfile
