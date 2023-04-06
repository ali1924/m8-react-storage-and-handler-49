import React, { useEffect, useState } from 'react';
import './Cosmetics.css';
import Cosmetic from '../Cosmetic/Cosmetic';
import { addToDb } from '../../utilities/fakedb';
const Cosmetics = () => {
    // create local data online json generator
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setCosmetics(data));
    }, [])
    
    const addToCart = (product) => {
        // console.log('added', product);
        addToDb(product.id);
    }
    //create local data offline
    // const cosmetics = [
    //     { id:1,name:'alta',price:100},
    //     { id:2,name:'alta',price:100},
    //     { id:3,name:'alta',price:100},
    //     { id:4,name:'alta',price:100},
    //     { id:5,name:'alta',price:100},
    // ]
    return (
        <div>
            <h1>Welcome to my Cosmetic store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    addToCart={addToCart}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;