
import { useCount,useCountActions} from './CounterProvider';

const Counterone = () => {
    
    const count=useCount();
    const {addFive,addOne,decrement}=useCountActions();
   
    return ( 
        <div>
            <h1>count is :{count}</h1>
            <button onClick={addOne}>add one</button>
            <button onClick={addFive}>Add five</button>
            <button onClick={decrement}>decrement</button>
        </div>
     );
}
 
export default Counterone;