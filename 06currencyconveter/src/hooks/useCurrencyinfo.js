import {useEffect,useState} from "react";

function useCurrencyinfo(currency){
    const [data,setData]=useEffect({})
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
        .then((res)=>res.json())
        /**.then((res) => res.json()):
After making a fetch() request, this then() method takes the response (res) and converts it into JSON format using the .json() method. This is typically done because most APIs return data in JSON format.

.then((res) => setdate(res[currency])):
Once the response is converted into JSON, this second then() is called. The res[currency] accesses a property in the returned JSON object, where currency is likely a variable containing a specific key, such as "USD", "EUR", or some other currency code. Then, it calls a function setdate() with this value. */
        .then((res)=>setdate(res[currency]))
        console.log(data);
        
    },[currency])
}