import React, { createContext, useReducer, useEffect } from 'react';
import { storeReducer } from '../reducers/StoreReducer';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const [userProducts, dispatch] = useReducer(storeReducer, []);

    useEffect(() => {
        console.log('USER PRODUCTS', userProducts)
    })
    return (
        <StoreContext.Provider value={{ userProducts, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;