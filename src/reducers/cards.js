const cards = (state = {}, action) => {
    switch(action.type){
        case 'SET_SEARCH_FILTER':
            return ({
                ...state,
                searchFilter: action.searchFilter
            });
        case 'SET_FILTER':
            return ({
                ...state,
                filter: action.filter
            });
        default:
            return state
    }
}

export default cards;