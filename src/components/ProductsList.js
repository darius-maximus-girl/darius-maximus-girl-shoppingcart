import React, { useState, useEffect } from 'react';
import Product from './Product';

const phones = [
    {
        model: 'samsung-galaxy-s6',
        urlImg: '/images/samsung-galaxy-s6.png',
        price: 300,
        id: 1
    },
    {
        model: 'samsung-galaxy-s6',
        urlImg: '/images/samsung-galaxy-js7-pro.jpg',
        price: 400,
        id: 2
    },
]

function ProductsList(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //Fetch data of products 
    }, [])

    return (
        <div>
            <h3>Hello from ProductsList</h3>
            {/*PASSES PRODUCTS*/}
            <Product />
            <img src={phones[0].urlImg}></img>
        </div>
    );
}

export default ProductsList;