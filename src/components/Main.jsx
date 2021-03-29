import React, { useEffect } from 'react'
import { getRepos } from '../actions/repos'
import { Repo } from './Repo'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Error } from './Error'


export const Main = () => {

  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)
  const isFetching = useSelector(state => state.repos.isFetching)
  const isFetchError = useSelector(state => state.repos.isFetchError)

  const currentPage = useSelector(state => state.repos.currentPage)
  const perPage = useSelector(state => state.repos.perPage)
  const searchValue = useSelector(state => state.repos.inputValue)

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage))
  }, [currentPage])

  const reposList = repos.filter((repo, index) => index < 12).map(repo => (

    <Repo {...repo} key={repo.id} />

  ))

  return (
    <MainContainer>
      {
        isFetchError
          ?
          <Error />
          :
          <>
            {
              isFetching === false
                ?
                <ReposColumns>
                  {reposList}
                </ReposColumns>
                :
                <Fetching />
            }

          </>
      }
    </MainContainer>
  )
}

const MainContainer = styled.div`
 
  position: relative;
  height: 800px;
  padding: 25px 20px 0;
`

export const Fetching = styled.div`

  font-size: 10px;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: -moz-linear-gradient(left, #db1b1b 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #db1b1b 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #db1b1b 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #db1b1b 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #db1b1b 10%, rgba(255, 255, 255, 0) 42%);
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  &:before {
    width: 50%;
    height: 50%;
    background: #db1b1b;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    content: '';
  } 
  &:after {
    background: #ffffff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  } 
`

const ReposColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 33%));
  grid-gap: 20px;
  @media (max-width: 960px) {
    & {
      grid-template-columns: repeat(2, minmax(100px, 50%));
    }
  }
  
`