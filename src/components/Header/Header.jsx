import { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNairaSign, faDollarSign, faPoundSign, faYenSign } from '@fortawesome/free-solid-svg-icons'

import {
    HeaderContainer,
    Heading,
    ExclamationMark,
    HeadingText,
    CurrencyFont,
    FontContainer
} from '../../util/styles/HeaderUtil'

function Header() {
    
    const [effect, setEffect] = useState(false)

    const runEffect = useCallback((e) => {
        setEffect(true)
        if (effect) {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 15
            let yAxis = (window.innerHeight / 2 - e.pageY) / 15
            e.target.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`
        }
    }, [effect])
    
    useEffect(() => {
        setEffect(true)
        
        return () => {
            setEffect(false)
        }
    }, [effect])


    return (
        <HeaderContainer onMouseMove={runEffect}>
            <Heading>
                <HeadingText>
                    Convert Currency
                <ExclamationMark>!</ExclamationMark>
                </HeadingText>
                <FontContainer>
                    <FontAwesomeIcon style={CurrencyFont} icon={faDollarSign} />
                    <FontAwesomeIcon style={CurrencyFont} icon={faPoundSign} />
                    <FontAwesomeIcon style={CurrencyFont} icon={faYenSign} />
                    <FontAwesomeIcon style={CurrencyFont} icon={faNairaSign} />
                </FontContainer>
            </Heading>
        </HeaderContainer>
    )
}

export default Header