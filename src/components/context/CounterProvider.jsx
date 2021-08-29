import React from "react";
import { useState,useContext } from "react";

const Countcontext=React.createContext();
const CountcontextDispatcher=React.createContext();

const CounterProvider = ({children}) => {
    
    const [count,setCount]=useState(0);
    return ( 
        <Countcontext.Provider value={count}>
            <CountcontextDispatcher.Provider value={setCount}>
                {children}
            </CountcontextDispatcher.Provider>
        </Countcontext.Provider>
     );
} 
 
export default CounterProvider;

export const useCount=()=>useContext(Countcontext);
export const useCountActions=()=>{
    const setCount=useContext(CountcontextDispatcher);
    const addOne=()=>{
        setCount(prevCount=>prevCount+1)
    }
    const addFive=()=>{
        setCount(prevCount=>prevCount+5)
    }
    const decrement=()=>{
        setCount(prevCount=>prevCount-1)
    }
    return({addFive,addOne,decrement})
}
