import { useState } from "react/cjs/react.development";
import { useProductsActions } from "../Providers/ProductsProvider";
import Select from 'react-select';
import styles from "./filter.module.css"
const Filter = () => {
 const dispatch=useProductsActions();
 const [value,setValue]=useState();
 const [sort,setSort]=useState();
 const options=[
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
 const changeHandler=(selectOption)=>{
    dispatch({type:"filter",selectOption})
    ;dispatch({type:"sort",selectOption:sort})
    setValue(selectOption)
 }
    return (<div className={styles.filter}> 
        <p>filter base on</p>
        <div className={styles.selectContainer}>
            <span>order by </span>
                        <Select
        value={value}
        onChange={changeHandler}
        options={options}
        className={styles.select}
      />
        </div>
        <div className={styles.selectContainer}>
            <span>sort </span>
                        <Select
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
        className={styles.select}
      />
        </div>
    </div>  );
}
 
export default Filter;