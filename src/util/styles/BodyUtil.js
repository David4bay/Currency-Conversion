import styled from 'styled-components'

export const FormElement = styled.div`
display: grid;
grid-template-columns: repeat(3, auto);
grid-template-rows: repeat(4, auto);
max-width: 800px;
place-items: center;
margin: auto;
align-items: start;
margin-top: 15px;

@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

export const Legend = styled.legend`
display: grid;
grid-column: 2/3;
grid-row: 1/2;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
color: #ffffff;
letter-spacing: 1px;
text-transform: uppercase;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
padding: 50px;
`

export const FirstFieldSet = styled.fieldset`
display: grid;
grid-column: 1/2;
grid-row: 2/3;
text-align: center;
color: #ffffff;
gap: 8px;
max-width: 190px;
letter-spacing: 3px;
border: none;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 10px;
overflow: visible;
overflow-wrap: anywhere;
`

export const Label = styled.label`
max-width: 190px;
`
export const ConvertedLabel = styled.label`
max-width: 190px;
`

export const SecondFieldSet = styled.fieldset`
display: grid;
grid-column: 2/3;
grid-row: 2/3;
gap: 35px;
color: #ffffff;
letter-spacing: 3px;
width: 100%;
border: none;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 25px;
`
export const Span = styled.span`
display: flex; 
width: max-content; 
margin: auto; 
gap: 15px;
`

export const Select = styled.select`
display: grid;
grid-row: 2/3;
margin: 8px auto 0px auto;
background: transparent;
padding: 8px;
color: #ffffff;
box-shadow: 2px 8px 0px 0px black;

@media (max-width: 800px) {
    display: block;
    margin: auto;
}
`

export const Option = styled.option`
background: #212A3E;
color: #ffffff;
text-align: center;
`

export const ThirdFieldSet = styled.fieldset`
display: grid;
grid-column: 3/4;
grid-row: 2/3;
color: #ffffff;
gap: 8px;
max-width: 190px;
letter-spacing: 3px;
border: none;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 10px;
overflow: visible;
overflow-wrap: anywhere;
`

export const ConvertTitle = styled.span`
display: block;
`

export const CurrencyInput = styled.input`
border: none;
padding: 12px 8px 8px 8px;
background-color: transparent;
box-shadow: 2px 2px 0px 3px black;
color: #ffffff;
letter-spacing: 2px;
`

export const SwapCurrencyText = styled.strong`

`

export const SwapCurrencyButton = styled.button`
display: grid;
grid-row: 5/6;
min-width: 100px;
max-width: 400px;
margin: -50px auto;
color: #fff;
padding: 10px;
border: none;
box-shadow: 2px 8px 0px 0px black;
background-color: hsla(0, 0%, 0%, 0.45);
backdrop-filter: blur(5px);

&:active {
    transform: translateY(6%);
}

&:hover {
    cursor: pointer;
    transform: translateY(3px);
}
`

export const ResetButton = styled.button`
display: grid;
grid-row: 6/7;
color: #fff;
padding: 10px;
border: none;
min-width: 100px;
max-width: 400px;
margin: 50px auto;
box-shadow: 2px 8px 0px 0px black;
background-color: hsla(0, 0%, 0%, 0.45);
backdrop-filter: blur(5px);
transition: all 0.1s linear;

    &:hover {
        cursor: pointer;
        transform: translateY(3px);
    }

    &:active {
        transform: translateY(6%);
    }
`