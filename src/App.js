import React from 'react';
import stockPhoto from './images/stock.jpg';

const App = () => {
  return (
    <>
    <div className='m-6 flex'>
      <img className='rounded-full m-2 w-16 h-16 object-cover shadow-lg' src={stockPhoto} alt='random person' />
      <img className='rounded-lg w-16 h-16 object-cover shadow-lg' src={stockPhoto} alt='random person' />
      <img className='rounded-full w-32 h-32 object-cover shadow-lg' src={stockPhoto} alt='random person' />
      <img className='rounded-lg w-32 h-32 object-cover shadow-lg' src={stockPhoto} alt='random person' />
    </div>

    <div></div>
    </>
  );
}

export default App;
