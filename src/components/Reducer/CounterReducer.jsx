import { useReducer } from "react";

const initialState={
    firstCounter:0,
    secondCounter:0
};
const  reducer= (state, action) => {
    switch (action.type) {
        case "add":
            return {...state,firstCounter:state.firstCounter+action.value};
        case "reset":
        return initialState;
        case "decrement":
            return  {...state,firstCounter:state.firstCounter-action.value};
         case "add2":
            return {...state,secondCounter:state.secondCounter+action.value};
        case "decrement2":
            return  {...state,secondCounter:state.secondCounter-action.value};
        default:
            return state;
    }
}


const CounterReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return ( 
        <> 
        <div>
              <h1>count one is :{count.firstCounter}</h1>
            <button onClick={()=>dispatch({type:"add" ,value:1})}>Add one</button>
            <button onClick={()=>dispatch({type:"add",value:5})}>Add Five</button>
            <button onClick={()=>dispatch({type:"decrement",value:1})}>decrement</button>

        </div>
        <div>
        <h1>count two is :{count.secondCounter}</h1>
      <button onClick={()=>dispatch({type:"add2" ,value:1})}>Add one</button> 
      <button onClick={()=>dispatch({type:"add2",value:5})}>Add Five</button>
      <button onClick={()=>dispatch({type:"decrement2",value:1})}>decrement</button>

  </div>
  <button onClick={()=>dispatch({type:"reset"})}>reset</button>
  </>
    );
}
 
export default CounterReducer;