import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    state = { name:"ati" }

    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"ati"})
        },1000)
    }
    render() { 
        console.log("parentComp");
        return ( <div>
            parent comp 
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
            <MemoComp name={this.state.name}/>
        </div> );
    }
}
 
export default ParentComp;