import React from 'react'
import HeaderLogo from '../images/gitrepos.png'
import { setSearchValue, setCurrentPage } from '../reducers/reposReducer'
import { useSelector, useDispatch } from 'react-redux'
import { getRepos } from '../actions/repos'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { styles } from './styles.js'

export const Header = () => {
    const searchValue = useSelector(state => state.repos.inputValue)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }
    
    return (
        <HeaderContainer>
            <Logo to='/' onClick={() => {
                dispatch(setSearchValue(''))
                dispatch(setCurrentPage(1))
                dispatch(getRepos(''))
                }
            }>
                <img src={HeaderLogo} alt="headerlogo"/>
            </Logo>
            <Form onSubmit={(e) => onSubmit(e)}>
            <input value={searchValue} onChange={(e) => dispatch(setSearchValue(e.target.value))} type="text" placeholder="Input repo name"/>
            <button type='submit'>Поехали!</button>
            </Form>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    background-color: ${styles.headerFooterColor};
    border-radius: 0 0 10px 10px;
`

const Logo = styled(NavLink)`
    height: 80px;
    width: 330px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    margin-bottom: 10px;
`
const Form = styled.form`
    input {
        font-family: 'Roboto'; 
        font-weight: 100;
        font-size: 16px;
        color: #105974;
        border: none;
        border-radius: 5px;
        padding: 7px;
        width: 265px;
        margin-right: 20px;
        ::placeholder {
            font-family: 'Roboto';   
            font-weight: 100;
            font-size: 16px;
        }
        :focus {
            outline: none
        }
    }
    button {
        ${styles.button}
    }
`