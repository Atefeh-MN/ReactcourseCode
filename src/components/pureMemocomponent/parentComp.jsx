import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

class parentComp extends Component {
    state = { name="ati" }

    componentDidMount(){
        setInterval(()=>{
            this.setState(this.state.name="ati")
        },1000)
    }
    render() { 
        console.log(parentComp);
        return ( <div>
            parentComp-----parentComp
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
        </div> );
    }
}
 
export default parentComp;