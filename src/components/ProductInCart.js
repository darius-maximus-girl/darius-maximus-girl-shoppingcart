
import React from 'react';

function ProductInCart(props) {

    const { item } = props;

    return (
        <li className="item">
            HELLO FROM PRODUCT IN CART 
            {item.model}

        </li>
    );
}

export default ProductInCart;