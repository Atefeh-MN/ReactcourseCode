// import ClassCounter from './components/counter/ClassCounter';
// import FuncCounter from './components/counter/FuncCounter';
// import FuncCleanup from './components/counter/FuncCleanup';
// import CounterProvider from './components/context/CounterProvider';
// import Counterone from './components/context/Counterone';
// import CounterReducer from './components/Reducer/CounterReducer';
// import CounterReducerTwo from './components/Reducer/CounterReducerTwo';
// import CounterProvider2 from './components/combineContext&reducer/CounterProvider2';
// import CounterOne2 from './components/combineContext&reducer/CounterOne2';
import React from 'react'
import { useState } from 'react';
import style from './App.module.css'
import Navbar from './components/navBar/Navbar';
import ProductsList from './components/ProductsList/ProductsList';
import Wrapper from './components/Hoc/Wrapper';

const App = () => {
    const [products,setProducts]=useState([
        {title:'React js',price:'99 $',id:1 ,quantity:1},
        {title:'Node js',price:'89 $',id:2,quantity:2},
        {title:'Javascript',price:'79 $',id:3,quantity:3}
    ] );
   const changeHandler=(event,id)=>{
        const index=products.findIndex(item=>item.id===id);
        const product={...products[index]};
        product.title=event.target.value;    
        const updatedProducts=[...products];
        updatedProducts[index]=product;
       setProducts(updatedProducts)
    
    }
    const incrementHandler=(id)=>{
        const index=products.findIndex(item=>item.id===id);
        const product={...products[index]};
        product.quantity++;    
        const updatedProducts=[...products];
        updatedProducts[index]=product;
         setProducts(updatedProducts)
          
    }
    const decrementHandler=(id)=>{
        const index=products.findIndex(item=>item.id===id);
        const product={...products[index]}; 
        if (product.quantity===1) 
        { const productsFilter=products.filter(p=>p.id!==id);
        setProducts(productsFilter)}
            else{
                
                const updatedProducts=[...products];
                product.quantity--;
                updatedProducts[index]=product;
                setProducts(updatedProducts)
            }   
    }
   const removeHandler=(id)=>{
        const filterProduts=products.filter(p=> p.id!==id);
        setProducts(filterProduts)
    }

    return ( <>
            <Navbar totalItem={products.filter(p=>p.quantity>0).length}/>
            <ProductsList
            products={products}
            onChange={changeHandler}
            onIncrement={incrementHandler}
            onDelete={removeHandler}
            onDecrement={decrementHandler}/>
            </> );
}
 
export default  Wrapper(App,style.container);
// class App extends Component {
//     state = { products:[
//         {title:'React js',price:'99 $',id:1 ,quantity:1},
//         {title:'Node js',price:'89 $',id:2,quantity:2},
//         {title:'Javascript',price:'79 $',id:3,quantity:3}
//     ] ,
//     isShow:true,
// }
//     changeHandler=(event,id)=>{
//         const index=this.state.products.findIndex(item=>item.id===id);
//         const product={...this.state.products[index]};
//         product.title=event.target.value;    
//         const products=[...this.state.products];
//         products[index]=product;
//           this.setState({products})
    
//     }
//     incrementHandler=(id)=>{
//         const index=this.state.products.findIndex(item=>item.id===id);
//         const product={...this.state.products[index]};
//         product.quantity++;    
//         const products=[...this.state.products];
//         products[index]=product;
//           this.setState({products})
          
//     }
//     decrementHandler=(id)=>{
//         const index=this.state.products.findIndex(item=>item.id===id);
//         const product={...this.state.products[index]}; 
        
//         if (product.quantity===1) 
//         { const productsFilter=this.state.products.filter(p=>p.id!==id);
//             this.setState({products:productsFilter})}
//             else{
                
//                 const products=[...this.state.products];
//                 product.quantity--;
//                 products[index]=product;
//                 this.setState({products})
                
//             }   

//     }
//     removeHandler=(id)=>{
//         const filterProduts=this.state.products.filter(p=> p.id!==id);
//         this.setState({products:filterProduts})
//     }
//    componentDidUpdate(prevProps, prevState) {
//        console.log('App.js',prevState);
//    }
//     render() { 
//         return ( 
//                 <>
//                 {/* <CounterProvider2>
//                 <p>this is a count counter</p>
//                     <CounterOne2/>
//                 </CounterProvider2> */}
//              {/* <CounterProvider>
//                     <p>this is a count counter</p>
//                      <Counterone/> 
//                      <CounterReducer/>
//                      <CounterReducerTwo/> 
//                 </CounterProvider>   */}
//             {/* <button onClick={()=>this.setState({isShow:!this.state.isShow})}>{this.state.isShow ? "Hide" :"show"}</button>
//             {this.state.isShow && <FuncCleanup/>} */}
//             {/* <FuncCounter/> */}
//             {/* <ClassCounter/> */}
//              <Navbar totalItem={this.state.products.filter(p=>p.quantity>0).length}/>
//             <ProductsList
//             products={this.state.products}
//             onChange={this.changeHandler}
//             onIncrement={this.incrementHandler}
//             onDelete={this.removeHandler}
//             onDecrement={this.decrementHandler}/>
              
//         </> );
//     }
// }
 
// export default Wrapper(App,style.container);
// const App = () => {
//     const [product,setProducts]=useState([
//                 {title:'React js',price:'99 $'},
//                 {title:'Node js',price:'89 $'},
//                 {title:'Javascript',price:'79 $'}
//         ])
//     const clickHandler=()=>{
//         setProducts([
//         {title:'React js',price:'89 $'},
//         {title:'Node js',price:'79 $'},
//         {title:'Javascript',price:'69 $'}])
//     }
//     return (<div>
//                    <h1>Shopping App </h1>
//                   {product.map(product=>{
//                  return(<Product name={product.title} price={product.price}/>)})}
//                  <button onClick={clickHandler}>change price</button>
//           </div>);
// }
 
// export default App;