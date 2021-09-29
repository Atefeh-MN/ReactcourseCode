import { useState } from 'react';
import styles from './search.module.css'
import { useProductsActions } from '../../components/Providers/ProductsProvider';

const SearchBar = ({filter}) => {
    const dispatch=useProductsActions()

    const [value,setValue]=useState();
    const changeHandler=(e)=>{
        dispatch({type:"filter",selectOption:filter});
        dispatch({type:"search",event:e});
        setValue(e.target.value)
    }
    return ( 
        <div className={styles.formControl}>
            <div>search for</div>
            <input type="text" onChange={changeHandler} value={value} placeholder='search for ...' />
        </div>
     );
}
 
export default SearchBar;