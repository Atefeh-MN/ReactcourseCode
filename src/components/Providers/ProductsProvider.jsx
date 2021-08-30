import React from "react";
import { useContext,useState } from "react"; 


const ProductsContext=React.createContext();
const ProductsContextDispatcher=React.createContext();

const ProductsProvider = ({children}) => {
    const [Products,setProducts]=useState([
        {title:'React js',price:'99 $',id:1 ,quantity:1},
        {title:'Node js',price:'89 $',id:2,quantity:2},
        {title:'Javascript',price:'79 $',id:3,quantity:3}
    ] );
    return ( 
        <ProductsContext.Provider value={Products}>
            <ProductsContextDispatcher.Provider value={setProducts}>
                {children}
            </ProductsContextDispatcher.Provider>
        </ProductsContext.Provider>
        
     );
}
 
export default ProductsProvider;

export const useProducts=()=>useContext(ProductsContext);
export const useProductsActions=()=>{
    const setProducts=useContext(ProductsContextDispatcher);
    const products=useContext(ProductsContext);
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
    return({removeHandler,incrementHandler,decrementHandler,changeHandler})
}