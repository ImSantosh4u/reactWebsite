import React, { useState,useEffect } from 'react';

const UseEffect1 = () => {
    const [chat, setChat] = useState(0);

    useEffect(()=>{
        console.log("inside the useEffect")
        if(chat>=1){
        document.title=`chat(${chat})`;
        }
        else
        {
            document.title=`chat`;
        }
    },[chat])

    useEffect(()=>{
        console.log("second useEffect");

    },[])
    console.log("outside of useEffect")


    return (
        <div>
        <h1>{chat}</h1>
        <button onClick={()=>setChat(chat+1)}>click</button>
            
        </div>
    );
}

export default UseEffect1;