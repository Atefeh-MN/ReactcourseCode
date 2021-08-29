
const Wrapper = (Wrappercomponent,className) => {
    return (props )=>{
        return(
            <div className={className}>
                <Wrappercomponent {...props}/>
            </div>
        )
    };
}
 
export default Wrapper;