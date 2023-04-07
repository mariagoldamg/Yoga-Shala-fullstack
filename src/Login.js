import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated&&(<div>
    <div className="blockAbout">
<p>We have created a <span className="time"> Pesonal Welness Tracker </span>for you to log all your activities and treck your physical and emotinal progress during practices. You are welcome to log all your activities in our studio and outside of it.</p>
    </div>
    <div className="blockAbout">
<p>To access the tracker plaese log in.</p>
    </div>
    <div className="blockAbout">
  <button className="deleteBtn" onClick={() => loginWithRedirect()}>Log In</button>
  </div>
  
  </div>
  ))
};

export default Login;
