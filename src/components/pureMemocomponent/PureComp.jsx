import React, {  PureComponent } from 'react';


class PureComp extends PureComponent {
    
    render() { 
        console.log(pureComp)
        return (<div>
            PureComp - {this.props.name}
        </div>  );
    }
}
 
export default PureComp;