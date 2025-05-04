export const initialState = {
    loading: false,
    products: [],
    filtered: [],
    categories: [],
    error: ''
}

export function productRuducer(state, action) {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true }
        case 'FETCH_SUCCESS':
            return {
                ...state, loading: false, products: action?.payload,
                filtered: action?.payload,
                categories: [...new Set(action.payload.map(p => p.category))]
            };
        case 'FETCH_ERROR':
            return {
                ...state, loading: false, error: action.payload
            }
        case 'SEARCH':
            return {
                ...state,
                filtered: state.products.filter((p) => p.title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        case 'FILTER_BY_CATEGORY':
            return {
                ...state,
                filtered: action.payload === 'ALL' ? state.products : state.products.filter(p => p.category === action.payload)
            }
        case 'SORT_BY_PRICE':
            const sorted = [...state.filtered].sort((a,b)=>action.payload === 'asc' ? a.price - b.price: b.price - a.price)
            return { ...state, filtered:sorted}

        default:
            return state;
    }

}


