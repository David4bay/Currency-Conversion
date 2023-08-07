import { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNairaSign, faDollarSign, faPoundSign, faYenSign } from '@fortawesome/free-solid-svg-icons';

import {
    Heading,
    ExclamationMark,
    HeadingText,
    CurrencyFont,
    FontContainer
} from '../../util/HeaderUtil';

function Header() {
    
    const [effect, setEffect] = useState(false);
    const effectRef = useRef(null);

    const runEffect = useCallback((e) => {
        setEffect(true)
        if (effect) {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
            e.target.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
        }
    }, [effect])
    
    useEffect(() => {
        setEffect(false);
        return () => {
            setEffect(true);
        }
    }, [effect])


    return (
        <Heading onMouseMove={runEffect}>
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
    )
}

export default Header;