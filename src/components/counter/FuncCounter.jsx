import React, { useEffect,useState } from 'react';


const FuncCounter = () => {
    const [name,setName]=useState('');
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("document titel updating");
        document.title=`clicked :${count} times`;
         },[count])

    
    return ( <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        <button onClick={()=>setCount(count+1)}>count={count}</button>
    </div> );
}
 
export default FuncCounter;
