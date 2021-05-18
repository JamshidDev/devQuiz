import React, {useState} from "react";

function FetchApi(){
    const [loading, setLoading]=useState(true);
    const [country, setCountry]=useState([]);

 async function RequestFetch() {
        const url="https://api.myip.com";
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>setCountry(res));
        

    }
    RequestFetch();
    console.log(country);

    return(
        <div>
            {loading ? <div>Loading...</div> : <div>person....</div>}
        </div>
    )
}
export default FetchApi;