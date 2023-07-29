import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const HomeLink = styled.nav`
    color: white;
`

const NavContainer = styled.ul`
    margin-top: 1rem;
    list-style: none;
    padding-left: 5rem;
    font-size: 22px;
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
    }

    &:active {
        color: #4FBBBF;
        transform: translateY(5px);
    }
`

const IconText = styled.span`
    padding-left: 12px;
`

function Nav() {
    return (
        <HomeLink>
            <NavContainer>
            <li>
                <FontAwesomeIcon icon={faHouse} /><IconText>Home</IconText>
            </li>
            </NavContainer>
        </HomeLink>
    )
}

export default Nav;