import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


export const Repo = ({name, stargazers_count, updated_at, html_url, owner}) => {
    
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    const toLocaleDate = new Date(updated_at).toLocaleString('ru', options).split(' ');
    toLocaleDate.splice(3, 1, 'в');
    const formattedDate = toLocaleDate.join(' ');

    return (
        <RepoBlock>
            <div className="repo-header">
                <h2 className="repo-header-title">
                    <NavLink to={`/card/${owner.login}/${name}`}>{name}</NavLink> 
                </h2>
                <div className="repo-header-stars">
                    <span>Количество звезд: </span> 
                    {stargazers_count}
                </div>
            </div>
            <div className="repo-last-commit"><span>Последний коммит: </span> {formattedDate}</div>
            <a href={html_url} className="repo-link">Ссылка на репозиторий: {html_url}</a>
        </RepoBlock>
    )
}

const RepoBlock = styled.div`
    border: 1px solid rgba(95, 117, 122, 0.1);
    background-color: rgba(238, 250, 255, 0.1);
    border-radius: 5px 5px 0 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: ease 0.2s;
    h2 {
        font-weight: 400;
        margin-bottom: 20px;
    }
    span {
        font-weight: 400;
        font-size: 14px;
    }
    .repo-last-commit {
        margin-bottom: 10px;
    }
    .repo-link {
        font-size: 12px;
        line-height: 14px;
        display: block;
        margin-top: auto;
    }
    :hover {
        background-color: rgba(137, 212, 255, 0.5)
    }
`