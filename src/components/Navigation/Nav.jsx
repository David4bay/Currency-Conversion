import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const HomeLink = styled.nav`
    display: flex;
    flex-direction: row-reverse;
    color: white;
    margin-bottom: 30px;
    padding-bottom: 12px;
    box-shadow: 0px 0px 8px 1px #fff;
`

const NavContainer = styled.ul`
    padding-top: 1rem;
    list-style: none;
    padding-right: 5rem;
    font-size: 22px;
    transition: all 0.3s ease;
    `
    
const IconText = styled.span`
    padding-right: 12px;
`

const Icon = styled.li`
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

function Nav() {
    return (
        <HomeLink>
            <NavContainer>
            <Icon>
            <IconText>Home</IconText><FontAwesomeIcon icon={faHouse} />
            </Icon>
            </NavContainer>
        </HomeLink>
    )
}

export default Nav;