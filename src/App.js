import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import CategoryContainerComponent from './components/category-container/CategoryContainerComponent';



function App() {
  return (
    <div className="App">

      {/* <HomePage/> */}
      <CategoryContainerComponent/>
      
    </div>
  );
}

export default App;
