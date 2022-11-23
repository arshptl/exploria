import { useQuery } from '@apollo/client';
import { GET_USERS } from "../queries/queries";

type UserType = {
    email: string,
    history: [string],
    id: string,
    name: string
}

const BookList = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            <ul id="book-list">
                {data.users.map((user: UserType) => {
                    return <li key={user.id}>
                        {user.name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default BookList