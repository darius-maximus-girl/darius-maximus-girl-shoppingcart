export const storeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, productsInCart: [...state.productsInCart, action.item] }
        case 'REMOVE_ITEM':
            return { ...state, prodproductsInCart: state.filter(item => item.id !== action.id) }

        default:
            return state;
    }
}

