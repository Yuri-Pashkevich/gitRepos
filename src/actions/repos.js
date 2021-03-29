import axios from 'axios'
import { setFetchError, setRepos, setIsFetching } from '../reducers/reposReducer'

export const getRepos = (searchQuery = 'stars:%3E1', currentPage, perPage) => {
    if(searchQuery === '') {
        searchQuery = 'stars:%3E1'
    }
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
            dispatch(setRepos(response.data)) 
        } 
        catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
        }
    }
}

export const getCurrentRepo = (username, reponame, setRepo) => { 
    return async dispatch => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}`)
        setRepo(response.data)     
    }
}

export const getContributors = (username, reponame, setContributors) => { 
    return async dispatch => {
        const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}/contributors?page=1&per_page=10`)
        setContributors(response.data) 
        dispatch(setIsFetching(false))
    }
}