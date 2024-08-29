import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/users', user);
      setShowForm(false);
      // Optionally, refresh the user table here
      setUser({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      })
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Sign Up</button>
      {showForm && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} required />
            <input type="text" placeholder="Last Name" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} required />
            <input type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
            <input type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
            <button type="submit"  >Sign Up</button>
            
          </form>
          <button type="button" onClick={() => {setShowForm(false);
              setUser({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
              }
           )}}>Cancel</button>
        </div>
      )}
    </div>
    
  );
}

export default SignUpForm;

