import React from 'react';
import './App.css';
import AppBar from './components/appbar';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Comments from './components/Comments';
import Menu from './components/Menu';
import PickoftheWeek from './components/pickoftheweek';

function App() {
  return (
    <div className="App">
     <AppBar/>
    <Banner/>
    <Menu/>
    <PickoftheWeek/>
    <Comments/>
    <Cart/>
    <div className='text-center text-primary my-1 small'>Copyrights 2022-2023</div>
    </div>
  );
}

export default App;
