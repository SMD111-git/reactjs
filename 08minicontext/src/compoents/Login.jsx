import React,{useState,useContext} from 'react'; //importing the hooks and compoents in to the file
import UserContext from '../context/UserContext'; //importing the context file in the this app.jsx
function Login() {
    const [username,setUsername] = useState('')
    const [password,setpassword] = useState('')// this part of file is  all about data sending process 
    const {setUser}=useContext(UserContext)//over here the concept is that the username and password is send to a context file ,
    const handleSubmit=(e)=>{//where the user type's the detail that are  send to context.jsx file throught the use of setuser(prop) and eventhandel
        e.preventDefault() //it prevent the 
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
             value={username} //this use the state of usestate and handel the username throught the varaible usestate
             onChange={(e)=> setUsername(e.target.value)} //this code of line try's to handel the username if there is a change in username 
             placeholder='username'/>
             {"    "}
            <input type="password"
             value={password} 
             onChange={(e)=> setpassword(e.target.value)}
              placeholder='password'/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}

export default Login;

