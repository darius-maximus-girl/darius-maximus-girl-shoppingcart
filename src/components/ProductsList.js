import React, { useContext } from 'react';
import Product from './Product';
import { StoreContext } from './contexts/StoreContext';

function ProductsList(props) {

    const { store } = useContext(StoreContext);
    const phones = store.products;

    return (
        <div>
            <div className="products-container">
                {phones.map(phone => {
                    return <Product key={phone.id} phone={phone} />
                })}
            </div>
            {/*COUNTS THE PRICE OF ALL PRODUCTS IN A CART*/}
            <div className='summary'>

            </div>
        </div>
    );
}

export default ProductsList;