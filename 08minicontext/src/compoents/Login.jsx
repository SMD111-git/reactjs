import React,{useState,useContext} from 'react'; //importing the hooks and compoents in to the file
import Usercontext from '../context/Usercontext'; //importing the context file in the this app.jsx
function Login() {
    const [username,setUsername] = useState('')
    const [password,setpassword] = useState('')
    const {setUser}=useContext(useContext)
    const handelSubmit=()=>{

    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
             value={username} //this use the state of usestate and handel the username throught the varaible usestate
             onChange={(e)=> setUsername(e.target.value)} //this code of line try's to handel the username if there is a change in username 
             placeholder='username'/>
            <input type="text"
             value={password} 
             onChange={(e)=> setpassword(e.target.value)}
              placeholder='password'/>
            <button onClick={handelSubmit}>submit</button>
        </div>
    );
}

export default Login;