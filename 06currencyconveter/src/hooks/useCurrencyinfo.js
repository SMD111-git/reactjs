import { useEffect,useState } from "react";
function useCurrencyinfo (currency) {
    const[data,setData]=useState({})
    useEffect(()=>{
                fetch(`https://latest.currency-api.pages.dev/v1/currencies/eur.json`)
                .then((res)=>res.json())
                .then((res)=> setInterval.json(res[eur]))
    
            },[eur])
            console.log(data);
            return data
            
    //this get 
}
export default useCurrencyinfo;