import React from 'react';
import './Home.css';
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';
import { render } from '@testing-library/react';

function Home() {
    return(
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

export default Home;