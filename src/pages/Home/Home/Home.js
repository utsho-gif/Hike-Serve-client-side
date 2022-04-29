import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h3>This is home</h3>
            <Products></Products>
        </div>
    );
};

export default Home;