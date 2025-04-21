import {createContext,useContext} from "react";

const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{}
})
export default ThemeContext