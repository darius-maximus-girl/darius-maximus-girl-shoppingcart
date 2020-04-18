export const storeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.item],
                products: state.products.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            inStock: item.inStock - 1
                        }
                    } else {
                        return item
                    }
                }),
                totalPrice: state.totalPrice + action.price
            }
        case 'REMOVE_ITEM':
            return {
                ...state, productsInCart: state.productsInCart.filter(item => item.id !== action.id),
            }
        case 'SET_PRODUCT_DETAILS':
            return {
                ...state, productDetails: action.details,
            }
        case 'INCREASE_INSTOCK':
            return {
                ...state,
                products: state.products.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            inStock: item.inStock + 1
                        };
                    } else {
                        return item
                    }
                }),
                productsInCart: state.productsInCart.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            inCart: item.inCart - 1
                        }
                    } else {
                        return item
                    }
                }),
                totalPrice: state.totalPrice - action.price
            }
        case 'DECREASE_INSTOCK':
            return {
                ...state,
                products: state.products.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            inStock: item.inStock - 1
                        };
                    } else {
                        return item
                    }
                }),
                productsInCart: state.productsInCart.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            inCart: item.inCart + 1
                        }
                    } else {
                        return item
                    }
                }),
                totalPrice: state.totalPrice + action.price
            }
        case 'DECREASE_STOCK_FROM_DETAILS':
            return {
                ...state,
                products: state.products.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            inStock: item.inStock - 1
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state;
    }
}

