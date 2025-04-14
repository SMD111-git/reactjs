import React, { Children } from "react";
import Usercontext from "./Usercontext";

const Usercontextprovider=({Children})=>{//usecase and is the function
    return(
        <>
        {Children}
        </>
    )
}

export default Usercontextprovider 