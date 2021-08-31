
import React, { Component } from 'react';

class Classtimer extends Component {
    state = { 
        count:0
     }
     componentDidMount() {
         this.myTimer=setInterval(()=>{
             console.log("hi ati");
             this.setState({count:this.state.count+1})
         },1000)
     }
     componentWillUnmount(){
         console.log("cwum");
         clearInterval(this.myTimer)
     }

    render() { 
        return ( <div>ClassTimer</div> );
    }
}
 
export default Classtimer;