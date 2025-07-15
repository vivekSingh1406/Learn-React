import React, { Component } from 'react';

class WithoutUseEffectHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true,
    };
  }

  // Runs once after component is mounted
  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          user: data.results[0],
          loading: false,
        });
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { user, loading } = this.state;

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
        <p>Country-Description: {user.location.timezone.description}</p>
        <p>Postcode: {user.location.postcode}</p>
      </div>
    );
  }
}

export default WithoutUseEffectHooks;
