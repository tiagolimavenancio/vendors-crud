const initialState = {     
    data: [],
    vendor: { },   
    isLoading: false
};

export function vendors(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_VENDOR':
            return {
                ...state,
                data: action.payload
            };
        case 'VENDOR_DETAIL':
            return {
                ...state,
                vendor: {
                    id: action.payload._id,
                    ...action.payload
                }
            };        
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                vendor: {                      
                    ...state.vendor,
                    [action.props]: action.value
                }
            };
        case "VENDOR_UPDATED":
            return state; 
        case "CLEAR_VENDOR_PROPS":
            return {
                ...state,
                vendor: { }
            };
        default:
            return state
     }
}