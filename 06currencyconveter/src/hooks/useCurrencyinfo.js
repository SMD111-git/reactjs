import {useEffect,useState} from "react";

function useCurrencyinfo(currency){
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
        .then((res)=>res.json())
        .then((res)=>)
    },[])
}