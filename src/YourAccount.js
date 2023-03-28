
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';
import Login from './Login';
import Logout from './Logout';




function YourAccount() {
  const { isLoading } = useAuth0();
  if (isLoading) return <h1>loading...</h1>
  return (
    <div>

     <Login/>
     <Logout/>
    </div>
  );
}

export default YourAccount;