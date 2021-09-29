import styles from './Product.module.css'
import { BiTrash } from "react-icons/bi";
const product = ({onIncrement,onDelete,onDecrement,onChange,product}) => {
    return ( <div className={styles.product}>
         <p>name : {product.title} </p>
         <p>price: {product.price} </p>
         <input type="text" className={styles.input} onChange={onChange} value={product.title} />
         <span className={styles.value}>{product.quantity}</span>
         <button className={`${styles.button} ${styles.inc}`} onClick={onIncrement}> + </button>
         <button onClick={onDecrement} className={`${styles.button} ${product.quantity===1&&styles.remove}`}> {product.quantity>1 ?'-':<BiTrash/>} </button>
         <button className={styles.button} onClick={onDelete}> Delete</button>
         
    </div> );
}
 
export default product;