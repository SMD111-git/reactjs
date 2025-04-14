import React, { useEffect, useState } from 'react';


function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/SMD111-git')
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data)})
    },[])
    return (
        <div className='text-center m-4 bg-gray-700  text-white p-4 text-3xl'>
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="git image" width={200}/>
        </div>
    );
}

export default Github;