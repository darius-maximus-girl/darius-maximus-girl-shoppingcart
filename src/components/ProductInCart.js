
import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from './contexts/StoreContext';
import TrashCan from '../assets/images/trash.png';

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
            <div className="item__image">
                <img className="item__image-img" src={item.img} alt="cart-img"></img>
            </div>
            <div className="item__summary">
                <p className="item__summary-model">{item.model}</p>
                <div className="item__summary-number">
                    <div className="btns-container">
                        <button className="items-number" onClick={() => addItem(item.id)}>+</button>
                        <button className="items-number" onClick={() => removeItem(item.id)}>-</button>
                    </div>
                    <p className="items-number">{item.inCart}</p>
                    <img src={TrashCan} className="delete-btn" alt="trash can" onClick={() => removeAllItems(item.id)}></img>
                </div>
                <p className="item-price">{price.toFixed(2)}$</p>
            </div>
        </li>
    );
}

export default ProductInCart;