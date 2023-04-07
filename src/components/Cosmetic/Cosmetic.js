import React from 'react';
import './Cosmetic.css';
import { removeFromCartDb } from '../../utilities/fakeDbWithObject';
const Cosmetic = (props) => {
    const product = props.cosmetic;
    const addToCart = props.addToCart;
    // console.log(props.cosmetic);
    const { id, name, price } =product;
  
    
    //add cart
    // const addToCart =(product)=>{
    //     console.log('added',product);
    // }
    // remove cart
    const removeFromCart= (id) => {
        // console.log('remove', id);
        removeFromCartDb(id);
    }

    return (
        <div className='product'>
            <h2>Buy This:{name}</h2>
            <p>Only for :${price}</p>
            <p>Product id:{id}</p>
            {/* <button onClick={addToCart}>Add To Cart</button> */}
            <button onClick={() => addToCart(product)}>Add To Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;