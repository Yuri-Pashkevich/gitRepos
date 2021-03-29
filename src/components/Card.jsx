import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCurrentRepo, getContributors } from '../actions/repos'
import { useSelector, useDispatch } from 'react-redux'
import { Fetching } from './Main'
import styled from 'styled-components'
import { styles } from './styles.js'

export const Card = props => {
    const { username, reponame } = useParams()
    const [repo, setRepo] = useState({owner: {}})
    const [contributors, setContributors] = useState([])
    const isFetching = useSelector(state => state.repos.isFetching)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentRepo(username, reponame, setRepo))
        dispatch(getContributors(username, reponame, setContributors))
    }, [username, reponame, dispatch])
    const { name, stargazers_count, owner } = repo
    return (
        <CardContainer>
            {
                isFetching === false
                    ?
                    <>
                        <div className="card">
                            <div className="img-wrapper">
                                <img src={owner.avatar_url} alt="avatar"/>
                            </div>
                            <div>
                                <h2 className="name">{name}</h2>
                                <span className="stars">Количество звезд: </span>
                                <span>{stargazers_count}</span>
                                <span className="contributors">Участники: </span>
                                {contributors.map(({login}, i) => (
                                    <div key={i}>{i + 1}. {login}</div>
                                ))}                        
                            </div>
                        </div>
                        <button onClick={() => props.history.goBack()}>Back to main page</button>
                    </>
                    :
                    <Fetching/> 
            }
        </CardContainer>   
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 800px;
    padding: 0 20px;
    box-sizing: border-box;
    button {
        ${styles.button}
        border: 2px solid rgba(142, 232, 255, 0.5);
        background-color: rgba(238, 250, 255, 0.5);
        border-radius: 5px;
        &:hover {
            border: 2px solid rgba(255, 255, 255, 0);
        }
        position: absolute;
        top: 75%;
    }
    .card {
        display: grid;
        grid-template-columns: repeat(2, minmax(300px, 50%));
        gap: 200px;
    }
    .img-wrapper {
        width: 300px;
        height: 300px;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .stars {
        font-weight: 400;
    }
    .contributors {
        display: block;
        margin: 20px 0 5px;
        font-weight: 400;
    }
    h2 {
        font-size: 30px;
    }
`