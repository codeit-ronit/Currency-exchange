import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
  
        useEffect(()=>{              // useffect use kiya kyuki har mount(dependency - currency) pe re render chahiye tha
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@/latest/currencies/${currency}.json`)    //fetch kiya api
            .then((res)=> res.json())                 //.then callback leta apne andar , to jo response aaya usko json format me convert kiya pehle
            .then((res) => setData(res[currency]))                // to store the data everytime it updates we use setdata and we store the currency(any given) and its values                   
        },[currency])     
    console.log(data)                //dependency currency isliye liya kyuki jab jab currency bdlega(inr ya usd) tb firse data fetch hoga or ui render hoga
    return(data)

}

export default useCurrencyInfo ;