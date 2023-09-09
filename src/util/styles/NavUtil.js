import styled from 'styled-components';

export const HomeLink = styled.nav`
    display: flex;
    flex-direction: row-reverse;
    color: white;
    margin-bottom: 30px;
    padding-bottom: 12px;
    box-shadow: 0px 0px 8px 1px #fff;
`

export const NavContainer = styled.ul`
    padding-top: 1rem;
    list-style: none;
    padding-right: 5rem;
    font-size: 22px;
    transition: all 0.3s ease;
    `
    
export const IconText = styled.span`
    padding-right: 12px;
`

export const Icon = styled.li`
    padding: 5px;

    &:hover {
        cursor: pointer;
        background: hsla(100, 0%, 100%, 0.15);
        backdrop-filter: blur(5px);
        width: fit-content;
        padding: 5px;
    }

    &:active {
        color: #4FBBBF;
        transform: translateY(5px);
    }
`