import React from 'react';
import './Cosmetics.css';
import Cosmetic from '../Cosmetic/Cosmetic';
const Cosmetics = () => {
    //create local data
    const cosmetics = [
        { id:1,name:'alta',price:100},
        { id:2,name:'alta',price:100},
        { id:3,name:'alta',price:100},
        { id:4,name:'alta',price:100},
        { id:5,name:'alta',price:100},
    ]
    return (
        <div>
            <h1>Welcome to my Cosmetic store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;