import { useState } from "react/cjs/react.development";
import { useProductsActions } from "../Providers/ProductsProvider";
import styles from "./filter.module.css"
import SelectComponent from "../../common/select/Select";
import SearchBar from "../../common/search/Search";

const Filter = () => {
 const dispatch=useProductsActions();
 const [filter,setFilter]=useState();
 const [sort,setSort]=useState();
 const filterOptions=[
     {value:"",label:"All"},
     {value:"electronics",label:"electronics"},
     {value:"jewelery",label:"jewelery"},
     {value:"men's clothing",label:"men's clothing"},
     {value:"women's clothing",label:"women's clothing"}
 ];;
 const sortOptions=[
     {value:"highest",label:"highest"},
     {value:"lowest",label:"lowest"}
 ];
 const sortHandler=(selectOption)=>{
    dispatch({type:"sort",selectOption});
    setSort(selectOption)
 }
 const filterHandler=(selectOption)=>{
    dispatch({type:"filter",selectOption});
    dispatch({type:"sort",selectOption})
    setFilter(selectOption)
 }
    return (
    <section>
        <SearchBar filter={filter}/>
        <div className={styles.filter}> 
        <p>Filter products base on</p>
        <SelectComponent
        title='Filter by category '
        value={filter}
        onChange={filterHandler}
        options={filterOptions}
        
        />
        <SelectComponent
        title='sort by price'
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
        
        />
    </div>
    </section>
    
     );
}
 
export default Filter;