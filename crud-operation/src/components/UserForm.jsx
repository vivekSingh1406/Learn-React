import { useState, useEffect } from 'react';

function UserForm({ addUser, user }) {
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    country: ''
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({ name: '', district: '', country: '' });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.district && formData.country) {
      addUser(formData);
      setFormData({ name: '', district: '', country: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="district"
        placeholder="Enter district"
        value={formData.district}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Enter country"
        value={formData.country}
        onChange={handleChange}
      />
      <button type="submit">{user ? 'Update' : 'Add'} User</button>
    </form>
  );
}

export default UserForm;
