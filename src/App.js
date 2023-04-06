import './App.css';
import React from 'react';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';

const App = () => {
  return (
    <div className='App'>
      <Cosmetics></Cosmetics>
      {/* <Shoes></Shoes> */}
    </div>
  );
};

export default App;