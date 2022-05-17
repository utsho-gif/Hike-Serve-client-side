import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Products from '../Products/Products';
import Special from '../Special/Special';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Special></Special>
            <Products></Products>
            <Counter></Counter>
        </div>
    );
};

export default Home;