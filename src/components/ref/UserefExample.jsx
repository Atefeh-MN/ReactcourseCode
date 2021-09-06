import { useRef, useState, useEffect } from 'react';



const UseRefExample = () => {


    const [inputValue,setInputValue]=useState("");
    const [count,setCount]=useState(0)
    // const resetHandler=()=>{
    //     setInputValue("")
    // }
    
    const changeHandler=(e)=>{
        setInputValue(e.target.value)
    }
    const previousCount=useRef();
    // const inputRef=useRef();
     const previousValue=useRef();
    useEffect(()=>{
     previousValue.current=inputValue;

    },[inputValue])

    useEffect(()=>{
        previousCount.current=count;
    },[count])

    return ( 
        <div>
            <input type="text" onChange={changeHandler} value={inputValue}/>
            {/* <button onClick={resetHandler}>
                Reset
            </button> */}
            <p>my name is {inputValue} and it use to be {previousValue.current}</p>
            <div>
                <button onClick={()=>setCount(Math.ceil(Math.random()*100))}>generate nomber</button>
                <div>count is :{count}</div>
                <div>previous count is :{previousCount.current}</div>
            </div>
        </div>
     );
}
 
export default UseRefExample;