import React, { Children } from "react";
import Usercontext from "./Usercontext";

const Usercontextprovider=({Children})=>{//usecase and is the function
    const[user,setUser]=React.useState([])
    return(
        <Usercontext.Provider>
        {Children}
        </Usercontext.Provider>
    )
}

export default Usercontextprovider 