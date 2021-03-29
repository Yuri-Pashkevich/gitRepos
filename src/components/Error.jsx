import React from 'react'
import styled from 'styled-components'

export const Error = props => {
    return (
        <ErrorContainer>
            Упс, что-то пошло не так, попробуйте обновить страницу
        </ErrorContainer>
    )
}

const ErrorContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`