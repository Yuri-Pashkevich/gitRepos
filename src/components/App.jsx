import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { Card } from './Card'
import { Main } from './Main'
import { Error } from './Error'
import { Header } from './Header'
import styled, { createGlobalStyle } from 'styled-components'
import { Pages } from './Pages'
import { Footer } from './Footer'
import { RobotolightWoff2, RobotolightWoff, RobotolightTtf, RobotoWoff2, RobotoWoff, RobotoTtf } from '../fonts/fonts'

export const App = () => {
  return (
    <HashRouter>
      <MainContainer>
        <GlobalStyle />
        <Header/>
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/card/:username/:reponame' component={Card} />
            <Route path='/error' component={Error} />
            <Redirect to='/' />
          </Switch>
        <Pages/>
        <Footer/>
      </MainContainer>
    </HashRouter>
  )
}

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;

    @media (max-width: 1180px) {
        & {
            width: 100%;
        }
    }
`

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotolightWoff2}) format('woff2'), 
    url(${RobotolightWoff}) format('woff'), 
    url(${RobotolightTtf}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoWoff2}) format('woff2'), 
    url(${RobotoWoff}) format('woff'), 
    url(${RobotoTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  body {
    font-family: 'Roboto';
    font-weight: 100;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: #2d4961;
    text-decoration: none;
  }
  h2 {
    margin: 0;
    font-weight: 400;
    margin-bottom: 20px;
    font-size: 22px;
  }
`;