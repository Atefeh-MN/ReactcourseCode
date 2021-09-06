
import React from "react";
const MemoComp = (props) => {
    return (  
        <div>
            memo comp -{props.name}
        </div>
    );
}
 
export default React.memo(MemoComp);