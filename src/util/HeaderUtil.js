import styled from 'styled-components';


export const Heading = styled.header`
    display: block;
    margin: auto;
    font-style: normal;
    font-weight: bolder;
    text-align: center;
    max-width: fit-content;
    margin: auto;
    padding-left: 8vw;
    color: #fff;
    letter-spacing: 1px;
    padding-top: 10vh;
    z-index: -1;
    overflow: hidden;
    perspective: 1000px;

    @media (min-width: 900px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    }
`

export const HeadingText = styled.span`
    display: block;
    text-align: center;
    padding: 10px;
    z-index: -1;
    font-size: clamp(1vw, 50px, 96px);
    box-shadow: 0px 0px 15px 3px #fff;
    transition: letter-spacing 0.4s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`

export const ExclamationMark = styled.span`
    color: #4FBBBF;
    
    &:hover {
        transform: translateZ(700px);
    }
`

export const CurrencyFont = {
    fontSize: '6rem',
    color: '#4FBBBF',
}

export const FontContainer = styled.span`
    display: block;
`

