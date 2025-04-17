import React,{Usercontext} from 'react';
import Usercontext from "../context/Usercontext";
import { useContext } from 'react';


function Profile() {
    const {user} = useContext(useContext)
  if(!user) return <div>please Login</div>
  return <div>welcome {user.username}</div>
}

export default Profile;