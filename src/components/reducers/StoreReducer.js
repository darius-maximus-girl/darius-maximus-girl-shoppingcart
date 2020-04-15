export const storeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, productsInCart: [...state.productsInCart, action.item] }
        case 'REMOVE_ITEM':
            return { ...state, prodproductsInCart: state.productsInCart.filter(item => item.id !== action.id) }
        case 'SET_PRODUCT_DETAILS':
            return {
                ...state, productDetails: action.details,
            }
        default:
            return state;
    }
}

