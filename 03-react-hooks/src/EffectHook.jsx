import React, { use, useEffect, useState } from "react";

function EffectHook() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); // Call the function
  }, []); // Empty dependency array → runs once on mount

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email} -- {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EffectHook;
