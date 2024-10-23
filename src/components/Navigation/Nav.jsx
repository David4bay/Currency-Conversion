import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faNairaSign } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'

import {
    HomeLink,
    NavContainer,
    IconText,
    Icon
} from '../../util/styles/NavUtil'

import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <HomeLink>
            <NavContainer>
            <Icon>
            <FontAwesomeIcon 
            icon={faHouse} 
            />
            <IconText>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "idle"
                  } 
                    to="/"
                    >        
                    Home
                    </NavLink>
            </IconText>
            </Icon>
            <Icon>
            <FontAwesomeIcon 
            style={{margin: "2px -4px auto auto"}}
            icon={faNairaSign} 
            />
            <IconText>
                    <NavLink 
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "idle"
                  }
                    to="/rates"
                    >        
                    Rates
                    </NavLink>
            </IconText>
            </Icon>
            </NavContainer>
        </HomeLink>
    )
}

export default Nav