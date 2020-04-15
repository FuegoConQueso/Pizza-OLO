import React from 'react';
import './App.css';
import Header from './components/Header';
import HomeBody from './components/HomeBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header text="Welcome to Joey's Pizzaria!" />
      </header>

      <div> 
        <HomeBody text="Order online, and have a hot pizza
                        waiting for you in 30 minutes or less!" />
      </div>
    </div>
  );
}

export default App;