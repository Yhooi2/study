type props = {
    userName: string
}

function UserProfile({ userName } : props) {
    return (
        <h1 className="text-3xl font-bold underline">
            {userName}
        </h1>
    )
}

export default UserProfile
