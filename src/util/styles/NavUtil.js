import styled from 'styled-components';

export const HomeLink = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: white;
    margin-bottom: 30px;
    padding-bottom: 12px;
    box-shadow: 0px 0px 8px 1px #fff;
`

export const NavContainer = styled.ul`
    display: flex;
    width: 800px;
    padding-top: 1rem;
    list-style: none;
    transition: all 0.3s ease;
    `
    
export const IconText = styled.span`
    font-size: 20px;
    padding-right: 12px;
`

export const Icon = styled.li`
    display: flex;
    margin-left: 12px;
    gap: 0.8rem;
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