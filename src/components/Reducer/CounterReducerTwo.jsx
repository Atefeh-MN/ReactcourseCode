import { useReducer } from "react";


const initialState=0;
const reducer= (state, action) => {
    switch (action) {
        case "add":
            return state+1;
        case "addFive":
            return state+5;
        case "decrement":
            return state-1;
        case "reset":
            return initialState;    
        default:
            return state;
    }
};
const CounterReducerTwo = () => {

    const [count,dispatch]=useReducer(reducer,initialState);
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState);
    return ( 
        <div>
            <h1>count one is:{count}</h1>
           
            <div>
                <button onClick={()=>dispatch("add")}>Add one</button>
                <button onClick={()=>dispatch("addFive")}>Add Five</button>
                <button onClick={()=>dispatch("decrement")}>decrement</button>
                <button onClick={()=>dispatch("reset")}>reset</button>
            </div>
            <h1>count Two is:{countTwo}</h1>
           
           <div>
               <button onClick={()=>dispatchTwo("add")}>Add one</button>
               <button onClick={()=>dispatchTwo("addFive")}>Add Five</button>
               <button onClick={()=>dispatchTwo("decrement")}>decrement</button>
               <button onClick={()=>dispatchTwo("reset")}>reset</button>
           </div>
        </div>
     );
}
 
export default CounterReducerTwo;
