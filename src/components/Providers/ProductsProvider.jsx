import React from "react";
import { useContext,useReducer} from "react"; 
import { productsData } from './../../db/products';
import _ from 'lodash'



const ProductsContext=React.createContext();
const ProductsContextDispatcher=React.createContext();
// const initialState=[
//     {title:'React js',price:'99 $',id:1 ,quantity:1},
//     {title:'Node js',price:'89 $',id:2,quantity:2},
//     {title:'Javascript',price:'79 $',id:3,quantity:3}
// ];
const reducer= (state, action) => {
    switch (action.type) {
        case "increment":
          {  const index=state.findIndex(item=>item.id===action.id);
            const product={...state[index]};
            product.quantity++;    
            const updatedProducts=[...state];
            updatedProducts[index]=product; 
            return updatedProducts ;}
        case "decrement":
            {const index=state.findIndex(item=>item.id===action.id);
             const product={...state[index]}; 
            if (product.quantity===1) 
            { const productsFilter=state.filter(p=>p.id!==action.id);
            return productsFilter;}
            else{
                const updatedProducts=[...state];
                product.quantity--;
                updatedProducts[index]=product;
                return updatedProducts
            }   
        }
        case "remove":
            const filterProduts=state.filter(p=> p.id!==action.id);
            return filterProduts;
        case "edit": 
        {const index=state.findIndex(item=>item.id===action.id);
        const product={...state[index]};
        product.title=action.event.target.value;    
        const updatedProducts=[...state];
        updatedProducts[index]=product;
            return updatedProducts;}
        case 'filter':{
            // console.log(action.event.target.value)
            const value=action.selectOption.value;
            if(value===""){
                return productsData;
            }else{
                const updatedProducts=productsData.filter(p=>p.category===value)
            return updatedProducts;}}
        case 'sort':{
            const value=action.selectOption.value
            const products=[...state];
            if(value==="lowest"){
                return _.orderBy(products, ['price'],['asc']);
            }else{
                return _.orderBy(products, ['price'],['desc']);
            }
        }
        default:
            return state;
    }
};

const ProductsProvider = ({children}) => {
    const [products,dispatch]=useReducer(reducer,productsData );
    return ( 
        <ProductsContext.Provider value={products}>
            <ProductsContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductsContextDispatcher.Provider>
        </ProductsContext.Provider>
        
     );
}
 
export default ProductsProvider;

export const useProducts=()=>useContext(ProductsContext);
export const useProductsActions=()=>useContext(ProductsContextDispatcher);
//     const products=useContext(ProductsContext);
//     const changeHandler=(event,id)=>{
//         const index=products.findIndex(item=>item.id===id);
//         const product={...products[index]};
//         product.title=event.target.value;    
//         const updatedProducts=[...products];
//         updatedProducts[index]=product;
//        setProducts(updatedProducts)
    
//     }
//     const incrementHandler=(id)=>{
//         const index=products.findIndex(item=>item.id===id);
//         const product={...products[index]};
//         product.quantity++;    
//         const updatedProducts=[...products];
//         updatedProducts[index]=product;
//          setProducts(updatedProducts)
          
//     }
//     const decrementHandler=(id)=>{
//         const index=products.findIndex(item=>item.id===id);
//         const product={...products[index]}; 
//         if (product.quantity===1) 
//         { const productsFilter=products.filter(p=>p.id!==id);
//         setProducts(productsFilter)}
//             else{
                
//                 const updatedProducts=[...products];
//                 product.quantity--;
//                 updatedProducts[index]=product;
//                 setProducts(updatedProducts)
//             }   
//     }
//    const removeHandler=(id)=>{
//         const filterProduts=products.filter(p=> p.id!==id);
//         setProducts(filterProduts)
//     }
//     return({removeHandler,incrementHandler,decrementHandler,changeHandler})
