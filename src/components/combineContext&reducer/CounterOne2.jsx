
import { useCountAction2 ,useCount2} from './CounterProvider2';

const CounterOne2 = () => {
    const count=useCount2();
    const dispatch=useCountAction2();
    return ( <div>
        <h1>count is :{count}</h1>
        <button onClick={()=>dispatch({type:"add",value:1})}>Add</button>
        <button onClick={()=>dispatch({type:"decrement",value:1})}>decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>


    </div> );
}
 
export default CounterOne2;