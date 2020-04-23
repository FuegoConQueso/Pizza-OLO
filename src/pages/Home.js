import React from 'react';
import './Home.css';
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';

function Home() {
    return(
        <div className="App">
            <Header text="Welcome to Joey's Pizzaria!" />

            <div>
                <HomeBody text="Order online, and have a hot pizza
                                waiting for you in 30 minutes or less!" />
            </div>
        </div>
    );
}

export default Home;