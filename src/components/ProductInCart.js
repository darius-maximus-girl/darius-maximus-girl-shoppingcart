
import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from './contexts/StoreContext';

function ProductInCart(props) {

    const { dispatch, store } = useContext(StoreContext);
    const { item } = props;
    let [price, setPrice] = useState(item.price * item.inCart);

    useEffect(() => {
        console.log(item.inCart)
    })

    const addItem = (id) => {
        if (item.inCart < item.inStock) {
            let newPrice = price + item.price;
            setPrice(newPrice);
            dispatch({ type: 'DECREASE_INSTOCK', id })
        }
    }

    const removeItem = (id) => {
        if (item.inCart > 1) {
            let newPrice = price - item.price;
            setPrice(newPrice);
            dispatch({ type: 'INCREASE_INSTOCK', id });
        } else if (item.inCart === 1) {
            dispatch({ type: 'REMOVE_ITEM', id });
            dispatch({ type: 'INCREASE_INSTOCK', id });
        }
    }

    return (
        <li className="item">
            <p className="item-model">{item.model}</p>
            <img className="item-img" src={item.img} alt="cart-img"></img>
            <div className="item-btns">
                <button onClick={() => addItem(item.id)}>+</button>
                <button onClick={() => removeItem(item.id)}>-</button>
            </div>
            <p className="item-number">{item.inCart}</p>
            <p className="item-price">{price}$</p>
        </li>
    );
}

export default ProductInCart;