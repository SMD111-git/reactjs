import React from "react";
import UserContext from "./UserContext";//importing the file

const UserContextProvider=({children})=>{//usecase and is the function
    const[user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider 
