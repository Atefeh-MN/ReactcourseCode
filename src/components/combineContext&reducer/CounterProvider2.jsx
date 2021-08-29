import { useReducer,useContext } from "react";
import React from "react";

const CounterContext2=React.createContext();
const CounterContextDispatcher2=React.createContext();

const initialState=0;
const reducer=(State,action)=>{
    switch (action.type){
        case "add":
            return State+action.value;
        case "decrement":
            return State-action.value;
        case "reset":
            return initialState;
        default :return State;    
    }
}

const CounterProvider2 = ({children}) => {

    const [count,dispatch]=useReducer(reducer,initialState);
    return ( 
        <CounterContext2.Provider value={count}>
            <CounterContextDispatcher2.Provider value={dispatch}>
                {children}
            </CounterContextDispatcher2.Provider>

        </CounterContext2.Provider>
     );
}
 
export default CounterProvider2;

export const useCount2=()=>useContext(CounterContext2);
export const useCountAction2=()=>useContext(CounterContextDispatcher2);
