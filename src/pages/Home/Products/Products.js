import React, { useEffect, useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProduct();
    return (
        <div className='container my-5'>
            <h3>Products</h3>
            <div className='row my-3 g-5'>
            {
                products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
           
        </div>
    );
};

export default Products;