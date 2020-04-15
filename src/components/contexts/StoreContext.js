import React, { createContext, useReducer, useEffect } from 'react';
import { storeReducer } from '../reducers/StoreReducer';
import { products, productDetails } from '../productsDB';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const [store, dispatch] = useReducer(storeReducer, {
        products: products, 
        productDetails: productDetails, 
        productsInCart: [] 
    });

    useEffect(() => {
    console.log(store)
    }, [store])

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;