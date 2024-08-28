import { createContext, useCallback, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const filterInitialState = {
    productList: [],
    instockOnly: false,
    bestSellerOnly: false,
    sortby: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(filterReducer, filterInitialState);

    const  initialProductList = useCallback((products) => {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        });

    }, []);

    function bestSeller(products){
        return state.bestSellerOnly ? products.filter(product => product?.saleInfo?.listPrice?.amount <= 500 || product?.volumeInfo?.averageRating >= 4) : products ;
    }

    function inStock(products){
        return state.instockOnly ? products.filter(product => product?.saleInfo?.listPrice?.amount >= 1) : products ; 
    }

    function sort(products){
        if (state.sortby === "lowtohigh"){
            return  products.sort((a, b) => Number(a?.saleInfo?.listPrice?.amount) - Number(b?.saleInfo?.listPrice?.amount));
        }
        if (state.sortby === "hightolow"){
            return products.sort((a, b) => Number(b?.saleInfo?.listPrice?.amount) - Number(a?.saleInfo?.listPrice?.amount));
        }
        return products;
        
    }

    function starRatings(products){
        if(state.ratings === "4STARSABOVE"){
            return products.filter(product => product?.volumeInfo?.averageRating >= 4);
        }
        if(state.ratings === "3STARSABOVE"){
            return products.filter(product => product?.volumeInfo?.averageRating >= 3);
        }
        return products;
    }

    const filterProductList = starRatings(sort(inStock(bestSeller((state.productList)))));

    const value = {
        state,
        dispatch,
        products: filterProductList,
        initialProductList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
}