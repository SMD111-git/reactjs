import React,{useState,useContext} from 'react'; //importing the hooks and compoents in to the file
import Usercontext from '../context/Usercontext'; //importing the context file in the this app.jsx
function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handelSubmit=()=>{

    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
             value={username}
             onChange={(e)=> setUsername(e.target.value)}placeholder='username'/>
            <input type="text" placeholder='password'/>
            <button onClick={handelSubmit}>submit</button>
        </div>
    );
}

export default Login;