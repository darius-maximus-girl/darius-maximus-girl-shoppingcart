import React, { createContext, useState } from 'react';

const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const [userProducts, setUserProducts] = useState([]);

    return (
        <StoreContext.Provider>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;