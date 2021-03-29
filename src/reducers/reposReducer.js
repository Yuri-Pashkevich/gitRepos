const SET_REPOS = 'SET_REPOS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const IS_FETCH_ERROR = 'IS_FETCH_ERROR'
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'

const initState = {
    items: [],
    isFetching: true,
    currentPage: 1, 
    perPage: 12,
    totalCount: 0,
    isFetchError: false,
    inputValue: ''
}

export default function reposReducer(state = initState, action) {
    switch(action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case IS_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload
            }
        case SET_SEARCH_VALUE:
            return {
                ...state,
                inputValue: action.payload
            }    
        default:
            return state
    }
}

export const setRepos = repos => ({
    type: SET_REPOS,
    payload: repos
})

export const setIsFetching = bool => ({
    type: SET_IS_FETCHING,
    payload: bool
})

export const setCurrentPage = page => ({
    type: SET_CURRENT_PAGE,
    payload: page
})

export const setFetchError = bool => ({
    type: IS_FETCH_ERROR,
    payload: bool
})

export const setSearchValue = input => ({
    type: SET_SEARCH_VALUE,
    payload: input
})


