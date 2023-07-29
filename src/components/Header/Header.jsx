import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNairaSign } from '@fortawesome/free-solid-svg-icons';

const Heading = styled.header`
    font-style: normal;
    font-weight: bolder;
    text-align: center;
    width: 100%;
    padding-left: 8vw;
    color: #fff;
    letter-spacing: 1px;
    padding-top: 10vh;

    @media (min-width: 900px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    }
`

const HeadingText = styled.span`
    font-size: 7rem;

    &:hover {
        cursor: pointer;
    }
`

const CurrencyFont = {
    fontSize: '10rem',
    color: '#4FBBBF'
}

function Header() {
    
    const [effect, setEffect] = useState(false);

    const effectRef = useRef(null);

    const runEffect = e => {
        setEffect(true)
        let xAxis = (window.innerWidth/2 - e.pageX) / 25;
        let yAxis = (window.innerHeight/2 - e.pageY) / 25;
        e.target.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
    }

    useEffect(() => {
        setEffect(false);
        if (!effect) {
            effectRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
        return () => setEffect(true);
    }, [effect])


    return (
        <Heading onMouseMove={runEffect} ref={effectRef}>
            <HeadingText>Convert Currency!</HeadingText>
            <span>
                <FontAwesomeIcon style={CurrencyFont} icon={faNairaSign} />
            </span>
        </Heading>
    )
}

export default Header;