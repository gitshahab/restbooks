
export const filterReducer = (state, action) => {
    const { type, payload } = action;

    switch(type){
        case "PRODUCT_LIST":
            return { ...state, productList: payload.products};
        case "SORT_BY":
            return { ...state, sortby: payload.sortby};
        case "RATINGS":
            return { ...state, ratings: payload.ratings};
        case "BEST_SELLER":
            return {...state, bestSellerOnly: payload.bestSellerOnly};
        case "INSTOCK":
            return { ...state, instockOnly: payload.instockOnly};
        case "CLEAR_FILTER":
            return { ...state, sortby: null, ratings: null, bestSellerOnly: false, instockOnly: false};
        default:
            throw new Error(`No case found for action type: ${type}`);
    }
}
