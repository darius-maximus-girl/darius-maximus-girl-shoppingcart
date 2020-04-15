import React, { useContext } from 'react';
import Product from './Product';
import { StoreContext } from './contexts/StoreContext';


function ProductsList(props) {

    const { store } = useContext(StoreContext);
    const phones = store.products;

    return (
        <div className="products-container">
            {phones.map(phone => {
                return <Product key={phone.id} phone={phone} />
            })}
        </div>
    );
}

export default ProductsList;