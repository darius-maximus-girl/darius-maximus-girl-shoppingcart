import React, { createContext, useReducer, useEffect } from 'react';
import { storeReducer } from '../reducers/StoreReducer';
import { products, productDetails, deliveryOptions } from '../productsDB';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const [store, dispatch] = useReducer(storeReducer, {
        products: products,
        productDetails: productDetails,
        productsInCart: [],
        totalPrice: 0,
        deliveryOptions: deliveryOptions,
    });

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;