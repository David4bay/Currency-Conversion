import styled from 'styled-components';

export const FormElement = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: repeat(auto, 5fr);
max-width: 900px;
place-items: center;
margin: auto;
align-items: start;
margin-top: 15px;
`

export const Legend = styled.legend`
color: #ffffff;
letter-spacing: 1px;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 50px;
grid-row: 1/2;
grid-column: 1/3;
height: max-content;
`

export const FirstFieldSet = styled.fieldset`
display: grid;
grid-rows: 2/3;
text-align: center;
color: #ffffff;
letter-spacing: 1px;
border: none;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 10px;
`

export const SecondFieldSet = styled.fieldset`
display: grid;
grid-rows: 2/3;
color: #ffffff;
letter-spacing: 1px;
border: none;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 10px;
`

export const ConvertTitle = styled.span`
display: block;
`

export const CurrencyInput = styled.input`
border: none;
padding: 7px;
border-radius: 5px;
`

export const SwapCurrencyButton = styled.button`
color: #fff;
padding: 10px;
border: none;
box-shadow: -1px 0px 1px 0px #fff;
background-color: hsla(0, 0%, 0%, 0.45);
backdrop-filter: blur(5px);

&:active {
    box-shadow: 2px 0px -2px 1px #fff;
}
`

export const ResetButton = styled.button`
color: #fff;
padding: 10px;
border: none;
box-shadow: -1px 0px 1px 0px #fff;
background-color: hsla(0, 0%, 0%, 0.45);
backdrop-filter: blur(5px);
`

export const Heading = styled.header`
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
    padding: 10px;
    z-index: -1;
    font-size: 6rem;
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