

import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate('/CreateList');
  }

  const check = () => {
    if (user && password){
      navigateCreate();
    }
  }
  

  return <div>
    <h1>Signup</h1>
      <label>Username</label>
      <input 
      type="text"
      value={user}
      onChange = {(e) => setUser(e.target.value)}>
      </input>

      <label>Password</label>
      <input 
      type="password"
      value={password}
      onChange = {(e) => setPassword(e.target.value)}>
      </input>

      <button onClick={check}>Signup</button>

  </div>;
}

export default Signup;
