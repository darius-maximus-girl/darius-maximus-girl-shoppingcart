import React, { useContext } from 'react';
import { StoreContext } from './contexts/StoreContext';

function ProductDetails(props) {

    const { store } = useContext(StoreContext);
    const item = store.productDetails;

    return (
        <div>
            <h3>Hello from Product Details</h3>
            <p>{item.model}</p>
            <img src={item.img} alt="mobile phone"></img>
            <p>{item.description}</p>
        </div>
    );
}

export default ProductDetails;