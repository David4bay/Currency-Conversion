import { useState, useEffect, useRef, useCallback } from 'react'
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
    const effectRef = useRef(null)

    const runEffect = useCallback((e) => {
        console.log(`MOUSE MOVEMENT DETECTED`)
        setEffect(true)
        if (effect) {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 15
            let yAxis = (window.innerHeight / 2 - e.pageY) / 15
            e.target.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`
        }
    }, [effect])
    
    useEffect( useCallback(() => {
        setEffect(false)
        return () => {
            setEffect(true)
        }
    }, [effect]), [effect])


    return (
        <HeaderContainer onMouseMove={runEffect}>
            <Heading>
                <HeadingText ref={effectRef}>
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