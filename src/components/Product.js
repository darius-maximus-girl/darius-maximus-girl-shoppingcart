import React, { useContext } from 'react';
import { StoreContext } from '../components/contexts/StoreContext';

function Product({ phone }) {

    const { dispatch } = useContext(StoreContext);

    //Handle onClick => 1) add item to a cart 2) toggle button (on the basis of id check the userProducts in the store, e.g. on the basis of indexOf or include? if the userProducts inclide a product with the id which is equal to the phone.id then the button says smth like 'Already in your cart' else it says 'Add to cart' :)  

    return (
        <div>
            <h3>{phone.model}</h3>
            <p>{phone.price}</p>
            <img src={phone.img}></img>
            <button onClick={() => dispatch({
                type: 'ADD_ITEM', item: {
                    id: phone.id,
                    model: phone.model,
                    price: phone.price,
                    img: phone.img,
                    inStock: phone.inStock
                }
            })}>Add to cart</button>
        </div>
    );
}

export default Product;