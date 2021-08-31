import WithCounter from './../Hoc/withCount';

const Clickcounter = ({count,incrementCount,props}) => {

    return ( 
        <div><h1 onClick={incrementCount}>Clicked {count} times</h1></div>
     );
}
 
export default WithCounter(Clickcounter,5);