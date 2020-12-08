import { useUsers } from "../hooks";
import { Link } from "react-router-dom";

export default function UserList() {
  const { data: users, isLoading, isSuccess } = useUsers();

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
                    <Link to={`/users/${user.id}/edit`}>Edit</Link>
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
