import React from 'react';
import './Cosmetic.css';
const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const { id, name, price } = props.cosmetic;
    return (
        <div>
            <h2>Buy This:{name}</h2>
            <p>Only for :${price}</p>
        </div>
    );
};

export default Cosmetic;