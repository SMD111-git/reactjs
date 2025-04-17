import React, { Children } from "react";
import Usercontext from "./Usercontext";//importing the file

const Usercontextprovider=({Children})=>{//usecase and is the function
    const[user,setUser]=React.useState(null)
    return(
        <Usercontext.Provider value={{user,setUser}}>
        {Children}
        </Usercontext.Provider>
    )
}

export default Usercontextprovider 