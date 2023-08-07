import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: block;
    width: 100%;
`

export const Heading = styled.header`
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: bolder;
    text-align: center;
    width: fit-content;
    color: #fff;
    letter-spacing: 1px;
    padding-top: 10vh;
    z-index: -1;
    overflow: hidden;
    perspective: 1000px;

    @media (min-width: 900px) {
        
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    }
`

export const HeadingText = styled.span`
    display: block;
    width: fit-content;
    margin: auto;
    padding: 10px;
    z-index: -1;
    border-radius: 5px;
    font-size: clamp(1vw, 85px, 96px);
    box-shadow: 0px 0px 15px 3px #fff;
    transition: letter-spacing 0.4s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`

export const ExclamationMark = styled.span`
    color: #4FBBBF;
    transform: translateZ(900px);
`

export const CurrencyFont = {
    fontSize: 'clamp(1vw, 85px, 96px)',
    color: '#4FBBBF',
}

export const FontContainer = styled.span`
    display: block;
`

