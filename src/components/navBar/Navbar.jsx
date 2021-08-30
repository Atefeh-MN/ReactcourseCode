import React from 'react';
import { BiCartAlt} from 'react-icons/bi';
import { useProducts } from '../Providers/ProductsProvider';
import styles from './navbar.module.css';

// class Navbar extends Component {
   
//     state = {  }
//     render() { 
//         const {totalItem}=this.props; 
//         let iconStyle = { fontSize: "16px",width:'30px',height:'30px' };
    
//         return ( <div className={styles.navBar}>
//             <ul className={styles.ul}>
//                 <li>Home</li>
//                 <li>Products</li>
//                 <li>Company</li>
//                 <li>Contact Us</li>
//                 <li>About Us</li>
                
//             </ul>
            
            
//             <div className={styles.metaArea}>
//                 <div className={`${styles.cart} ${styles.metaDiv}`}><span>{totalItem}</span> <BiCartAlt style={iconStyle} /></div>
            
//                 <div className={`${styles.account} ${styles.metaDiv}`}>Log in</div>
//                 <div className={`${styles.logo} ${styles.metaDiv}`}><h2>Shopping App</h2></div>
                
                
//             </div>


//         </div> );
//     }
// }
 
// export default Navbar;
const Navbar = (props) => {
    const products=useProducts();
    const totalItem=products.filter(p=>p.quantity>0).length; 
    let iconStyle = { fontSize: "16px",width:'30px',height:'30px' };


return ( 
        <div className={styles.navBar}>
        <ul className={styles.ul}>
            <li>Home</li>
            <li>Products</li>
            <li>Company</li>
            <li>Contact Us</li>
            <li>About Us</li>
            
        </ul>
        
        
        <div className={styles.metaArea}>
            <div className={`${styles.cart} ${styles.metaDiv}`}><span>{totalItem}</span> <BiCartAlt style={iconStyle} /></div>
        
            <div className={`${styles.account} ${styles.metaDiv}`}>Log in</div>
            <div className={`${styles.logo} ${styles.metaDiv}`}><h2>Shopping App</h2></div>
            
            
        </div>


    </div> ) ;
}
 
export default Navbar;
