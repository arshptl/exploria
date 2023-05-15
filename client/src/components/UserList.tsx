import { useGetUsersQuery } from '@/generated/graphql';

const UserList = () => {
    const { data, loading, error } = useGetUsersQuery();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <ul id="book-list">
                {data?.users.map((user) => {
                    return <li key={user?.id}>
                        {user?.name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default UserList