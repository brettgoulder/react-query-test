import { useUsers } from "../hooks";
import { useQueryClient } from "react-query";
import { fetchUser } from "../api";
import { Link } from "react-router-dom";

export default function UserList() {
  const { data: users, isLoading, isSuccess } = useUsers();
  const queryClient = useQueryClient();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return (
      <>
        {users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>
                    <Link
                      to={`/users/${user.id}/edit`}
                      onMouseOver={() => {
                        queryClient.prefetchQuery(
                          ["users", user.id],
                          () => fetchUser(user.id),
                          {
                            staleTime: 5 * 60 * 1000,
                          }
                        );
                      }}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
        <Link to="/users/new">Create User</Link>
      </>
    );
  }
}
