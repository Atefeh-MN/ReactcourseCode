import React, {  PureComponent } from 'react';


class PureComp extends PureComponent {
    
    render() { 
        console.log( "pure Comp" )
        return (<div>
            pure  Comp - {this.props.name}
        </div>  );
    }
}
 
export default PureComp;