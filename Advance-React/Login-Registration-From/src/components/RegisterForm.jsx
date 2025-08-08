import React, { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered!\nName: ${name}\nEmail: ${email}`);


    // Clear inputs
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>

      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
      </div>

      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>

      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      
      <button type="submit" className="submit-btn">Register</button>
    </form>
  );
}

export default RegisterForm;
