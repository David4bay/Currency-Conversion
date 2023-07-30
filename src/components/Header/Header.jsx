import { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNairaSign, faDollarSign, faPoundSign, faYenSign } from '@fortawesome/free-solid-svg-icons';

const Heading = styled.header`
    font-style: normal;
    font-weight: bolder;
    text-align: center;
    width: 100%;
    padding-left: 8vw;
    color: #fff;
    letter-spacing: 1px;
    padding-top: 10vh;
    z-index: -1;
    overflow: hidden;
    perspective: 3000px;

    @media (min-width: 900px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    }
`

const HeadingText = styled.span`
    padding: 10px;
    z-index: -1;
    font-size: 6rem;
    box-shadow: 0px 0px 15px 0px #fff;

    &:hover {
        cursor: pointer;
    }
`

const ExclamationMark = styled.span`
    color: #4FBBBF;
`

const CurrencyFont = {
    fontSize: '6rem',
    color: '#4FBBBF',
}



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
        return () => setEffect(true);
    }, [effect])


    return (
        <Heading onMouseMove={runEffect}>
            <HeadingText ref={effectRef}>
                Convert Currency
            <ExclamationMark>!</ExclamationMark>
            </HeadingText>
            <span>
                <FontAwesomeIcon style={CurrencyFont} icon={faDollarSign} />
                <FontAwesomeIcon style={CurrencyFont} icon={faPoundSign} />
                <FontAwesomeIcon style={CurrencyFont} icon={faYenSign} />
                <FontAwesomeIcon style={CurrencyFont} icon={faNairaSign} />
            </span>
        </Heading>
    )
}

export default Header;