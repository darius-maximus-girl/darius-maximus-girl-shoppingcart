
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
            dispatch({ type: 'DECREASE_INSTOCK', id, price: item.price })
        }
    }

    const removeItem = (id) => {
        if (item.inCart > 1) {
            let newPrice = price - item.price;
            setPrice(newPrice);
            dispatch({ type: 'INCREASE_INSTOCK', id, price: item.price });
        } else if (item.inCart === 1) {
            dispatch({ type: 'REMOVE_ITEM', id, price: item.price });
            dispatch({ type: 'INCREASE_INSTOCK', id, price: item.price });
        }
    }

    const removeAllItems = (id) => {
        dispatch({ type: 'RETURN_ALL', id, number: item.inCart, price: price })
    }

    return (
        <li className="item">
            <p className="item-model">{item.model}</p>
            <img className="item-img" src={item.img} alt="cart-img"></img>
            <div className="item-btns">
                <button onClick={() => addItem(item.id)}>+</button>
                <button onClick={() => removeItem(item.id)}>-</button>
            </div>
            <button onClick={() => removeAllItems(item.id)}>Remove item</button>
            <p className="item-number">{item.inCart}</p>
            <p className="item-price">{price.toFixed(2)}$</p>
        </li>
    );
}

export default ProductInCart;