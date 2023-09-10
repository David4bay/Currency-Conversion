import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import {
    HomeLink,
    NavContainer,
    IconText,
    Icon
} from '../../util/styles/NavUtil'



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

export default Nav