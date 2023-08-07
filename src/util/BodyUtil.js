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

@media (max-width: 900px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(auto, 5fr);

}
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

@media (max-width: 900px) { 
    display: grid;
    grid-column: 1/3;
    grid-row: 2/3;
}
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

@media (max-width: 900px) { 
    display: grid;
    grid-column: 1/3;
    grid-row: 3/4;
    margin-top: 50px;
}
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

@media (max-width: 900px) { 
    display: grid;
    grid-column: 1/3;
    grid-row: 3/4;
}
`

export const ResetButton = styled.button`
color: #fff;
padding: 10px;
border: none;
box-shadow: -1px 0px 1px 0px #fff;
background-color: hsla(0, 0%, 0%, 0.45);
backdrop-filter: blur(5px);

@media (max-width: 900px) { 
    display: grid;    
    grid-column: 1/3;
    grid-row: 4/5;
    margin-bottom: 100px;
}
`