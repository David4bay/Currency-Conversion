import styled from 'styled-components'

export const FormElement = styled.div`
display: grid;
grid-template-columns: repeat(3, auto);
grid-template-rows: repeat(3, auto);
place-items: center;
margin: auto;
align-items: start;
margin-top: 15px;

@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
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

@media (max-width: 800px) {
    
}
`

export const FirstFieldSet = styled.fieldset`
display: grid;
grid-column: 1/2;
grid-row: 2/3;
text-align: center;
color: #ffffff;
gap: 8px;
letter-spacing: 3px;
border: none;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 10px;

@media (max-width: 800px) { 
    
}
`

export const SecondFieldSet = styled.fieldset`
display: grid;
grid-column: 2/3;
grid-row: 2/3;
gap: 35px;
color: #ffffff;
letter-spacing: 3px;
border: none;
width: 100%;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 25px;

@media (max-width: 800px) { 
    
}
`

export const ThirdFieldSet = styled.fieldset`
display: grid;
grid-column: 3/4;
grid-row: 2/3;
color: #ffffff;
gap: 8px;
letter-spacing: 3px;
border: none;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 10px;

@media (max-width: 800px) { 
    
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

export const SwapCurrencyText = styled.strong`

`

export const SwapCurrencyButton = styled.button`
display: inline-grid;

min-width: 50%;
max-width: 400px;
margin: auto;
color: #fff;
padding: 10px;
border: none;
box-shadow: -1px 0px 1px 0px #fff;
background-color: hsla(0, 0%, 0%, 0.45);
backdrop-filter: blur(5px);

&:active {
    transform: translateY(6%);
}

&:hover {
    cursor: pointer;
}

@media (max-width: 800px) { 
}
`

export const ResetButton = styled.button`
color: #fff;
padding: 10px;
border: none;
min-width: 50%;
max-width: 400px;
margin: auto;
box-shadow: -1px 0px 1px 0px #fff;
background-color: hsla(0, 0%, 0%, 0.45);
backdrop-filter: blur(5px);

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: translateY(6%);
    }

@media (max-width: 800px) { 
   
}
`