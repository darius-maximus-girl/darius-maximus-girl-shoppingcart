import React, { useState, useEffect } from 'react';
import Product from './Product';

const phones = [
    {
        model: 'samsung-galaxy-s6',
        img: '/images/samsung-galaxy-s6.png',
        price: 300,
        id: 1,
        inStock: 10,
    },
    {
        model: 'samsung-galaxy-j7',
        img: '/images/samsung-galaxy-j7-pro.jpg',
        price: 400,
        id: 2,
        inStock: 3
    },
    {
        model: 'LG-g710EM',
        img: '/images/lg-g710EM.jpg',
        price: 400,
        id: 3,
        inStock: 24
    },
]

function ProductsList(props) {
    const [products, setProducts] = useState(phones);

    useEffect(() => {
        //Fetch data of products => here use setProducts
        console.log(products)
    }, [])

    return (
        <div>
            <h3>Hello from ProductsList</h3>
            {/*PASSES PRODUCTS*/}
            {products.map(phone => {
                return <Product key={phone.id} phone={phone} />
            })}
        </div>
    );
}

export default ProductsList;