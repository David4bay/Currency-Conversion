import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        diplay: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
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
    

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 50%;

    }
`

export const HeadingText = styled.span`
    width: fit-content;
    padding: 10px;
    z-index: -1;
    border-radius: 5px;
    font-size: clamp(1vw, 85px, 96px);
    filter: drop-shadow(0px 0px 15px lightblue);
    box-shadow: 0px 0px 15px 5px #fff;
    transition: letter-spacing 0.4s ease-in-out;
    perspective: 1000px;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 800px) {
        font-size: clamp(1vw, 50px, 60px);
    }
`

export const ExclamationMark = styled.span`
    color: #4FBBBF;
    transform: translateZ(900px);
`

export const CurrencyFont = {
    color: '#4FBBBF',
    boxShadow: '0px 0px 10px 1px #fff',
    padding: '5px',
    filter: 'drop-shadow(0px 0px 15px lightblue)'
}

export const FontContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    padding: 15px;
    font-size: clamp(1vw, 50px, 60px);
`

