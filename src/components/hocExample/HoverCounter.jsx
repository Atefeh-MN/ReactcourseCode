import WithCounter from './../Hoc/withCount';
const HoverCounter = ({count,props,incrementCount}) => {

    return ( <div><h1 onMouseOver={incrementCount}>hovered {count} times</h1></div> );
}
 
export default WithCounter(HoverCounter,10);