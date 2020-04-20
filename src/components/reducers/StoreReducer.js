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
        case 'CHOOSE_DELIVERY':
            return {
                ...state,
                totalPrice: (state.totalPrice - action.currentDeliveryPrice) + action.price,
                deliveryOptions: state.deliveryOptions.map(option => {
                    if (option.id === action.id) {
                        return {
                            ...option,
                            checked: true
                        }
                    } else {
                        return {
                            ...option,
                            checked: false
                        }
                    }
                })
            }
        case 'RETURN_ALL':
            return {
                ...state,
                totalPrice: state.totalPrice - action.price,
                productsInCart: state.productsInCart.filter(item => item.id !== action.id),
                products: state.products.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            inStock: item.inStock + action.number,
                        }
                    } else {
                        return item
                    }

                })
            }
        case 'CLEAR_THE_CART':
            return ({
                ...state,
                productsInCart: [],
                totalPrice: 0,
                deliveryOptions: state.deliveryOptions.map(option => {
                    return ({
                        ...option,
                        checked: false
                    })
                })
            })
        default:
            return state;
    }
}

