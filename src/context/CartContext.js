import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducers";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {

    const [ state, dispatch ] = useReducer( cartReducer, cartInitialState );

    function addToCart(product){
        const updatedList = state.cartList.concat(product);
        let sum = state.total + (parseFloat(product.saleInfo?.listPrice?.amount || 0)) ;
        const updatedTotal = sum.toFixed(2);

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: parseFloat(updatedTotal)
            }
        })
    }

    function removeCart(product){
        const updatedList = state.cartList.filter(item => item.id !== product.id );
        let sum = state.total - (parseFloat(product.saleInfo?.listPrice?.amount || 0)) ;
        const updatedTotal = sum.toFixed(2);

        dispatch({
            type: "REMOVE_CART",
            payload: {
                products: updatedList,
                total: parseFloat(updatedTotal)
            }
        })
    }

    function clearCart(product){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeCart,
        clearCart
    }
    
    return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}