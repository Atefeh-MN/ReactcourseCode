import React from 'react';
import Product from '../products/Product';
import { useProducts ,useProductsActions} from '../Providers/ProductsProvider';

// class ProductsList extends Component {

//     renderproduct() { 
//         const {products,onChange,onDecrement,onDelete,onIncrement}=this.props;
//         if(products.length===0)
//         return <div><h4>There is no product in carts</h4></div>
//         return (   
//         <div>
//             {products.map(product=>{
//             return(
//              <Product
//             // name={product.title} 
//             // price={product.price}
//            key={product.id} 
//            product={product}
//            onChange={(e)=>onChange(e,product.id)}
//            onIncrement={()=>onIncrement(product.id)}
//            onDecrement={()=>onDecrement(product.id)}
//              onDelete={()=>onDelete(product.id)} />)})}

//         </div> );
//     };

// render(){
//     const {products}=this.props;
//     return(<div>
//         {!products.length&&<h2>Go to Shopping</h2>}
//         {this.renderproduct()}
//     </div>
//         );
// };}
 
// export default ProductsList;

const ProductsList = (props) => {
   const products=useProducts();
   const dispatch=useProductsActions();
   const renderProduct=()=> {   
        if(products.length===0)
        return <div><h4>There is no product in carts</h4></div>
        return (   
        <div>
            {products.map(product=>{
            return(
             <Product
           key={product.id} 
           product={product}
           onChange={(e)=>dispatch({type:"edit",id:product.id,event:e})}
           onIncrement={()=>dispatch({type:"increment",id:product.id})}
           onDecrement={()=>dispatch({type:"decrement",id:product.id})}
             onDelete={()=>dispatch({type:"remove",id:product.id})} />)})}

        </div> );
    };
    return(<div>
        {!products.length&&<h2>Go to Shopping</h2>}
        {renderProduct()}
    </div>
        );
}
 
export default ProductsList;

