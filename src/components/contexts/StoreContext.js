import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const [userProducts, setUserProducts] = useState([]);

    const addUserProduct = (product) => {
        setUserProducts([...userProducts, product])
    }

    const removeUserProduct = (id) => {
        setUserProducts(userProducts.filter(item => item.id !== id))
    }

    return (
        <StoreContext.Provider value={{ userProducts, addUserProduct, removeUserProduct }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;