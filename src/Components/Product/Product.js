import React from 'react';
import './Product.css'

const Product = (props) => {
    const { addToCart, product } = props;
    const { name, seller, price, ratings, img } = props.product
    return (
        <div className='product'>
            <div className="card w-80 h-[600px] bg-base-100 shadow-xl">
                <figure className='w-[-286px] h-[-280px]'><img src={img} onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3>Price: {price}</h3>
                    <p><small>{seller}</small></p>
                    <p><small>{ratings} star</small></p>
                    <div className="card-actions justify-center">
                        <button onClick={() => addToCart(product)} className="btn btn-outline btn-info w-full font-bold">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;