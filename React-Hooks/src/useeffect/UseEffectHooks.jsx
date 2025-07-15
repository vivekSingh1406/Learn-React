import React, { useEffect, useState } from 'react';

function UseEffectHooks() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // Fetch user when component mounts
  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  }, []); 

  // Empty dependency array means run only once (on mount)
  if (loading) return <p>Loading...</p>;


  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Random User Profile</h2>
      <img src={user.picture.large} alt="User" style={{ borderRadius: '50%' }} />
      <h3>{user.name.first} {user.name.last}</h3>
      <h4>{user.phone}</h4>
      <p>Email: {user.email}</p>
      <p>City: {user.location.city}</p>
      <p>State: {user.location.state}</p>
      <p>Country: {user.location.country}</p>
      <p>Country-Description: {user.location.timezone.description}</p>'
      <p>Postcode: {user.location.postcode}</p>
    </div>
  );
}

export default UseEffectHooks;
