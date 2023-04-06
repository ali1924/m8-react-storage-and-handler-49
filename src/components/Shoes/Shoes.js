import React from 'react';
import './Shoes.css';
import { add, multiplication } from '../../utilities/calculation';
const Shoes = () => {
    const addResult = add(100, 200);
    const mul = multiplication(10, 20);
    return (
        <div>
            <p>This is shoes components</p>
            <p>Addition:{addResult}</p>
            <p>Multiplication:{mul}</p>
        </div>
    );
};

export default Shoes;