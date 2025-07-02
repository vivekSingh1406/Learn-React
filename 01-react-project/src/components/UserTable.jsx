import './UserTable.css';

function UserTable({ users }) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>District</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.district}</td>
            <td>{user.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
