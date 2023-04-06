import React from 'react';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const product = props.cosmetic;
    // console.log(props.cosmetic);
    const { id, name, price } =product;
  
    
    // handler cart
    const addToCart =(product)=>{
        console.log('added',product);
    }
    return (
        <div className='product'>
            <h2>Buy This:{name}</h2>
            <p>Only for :${price}</p>
            {/* <button onClick={addToCart}>Add To Cart</button> */}
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Cosmetic;