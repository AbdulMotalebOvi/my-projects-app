import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop '>
            <div className='single-product'>
                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='bg-orange-100 h-96 mt-[120px] mr-3 rounded-xl' >
                <h1 className='text-center mt-2 text-2xl font-bold'>Order Review</h1>
                <div className='p-4 mt-3'>
                    <p>Selected items: {cart.length}</p>
                </div>
            </div>
        </div >
    );
};

export default Products;