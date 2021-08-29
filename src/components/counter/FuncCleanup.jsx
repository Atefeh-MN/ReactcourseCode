import React, { useState, useEffect } from 'react';


const FuncCleanup = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
     const Timer=   setInterval(()=>{
        console.log('timer is ok');
        setCount(count+1)},1000)
        return()=>{
            clearInterval(Timer);
        }
    },[count])

    return ( <div>
        Functional clean up
    </div> );
}
 
export default FuncCleanup;