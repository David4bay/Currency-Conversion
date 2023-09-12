import styled from 'styled-components'

export const FormElement = styled.div`
display: grid;
grid-template-columns: repeat(3, auto);
grid-template-rows: repeat(4, auto);
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
max-width: 182.5px;
letter-spacing: 3px;
border: none;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;

font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 10px;
overflow: hidden;

@media (max-width: 800px) { 
    
}
`

export const Label = styled.label`
max-width: 182.5px;
overflow: hidden;
`
export const ConvertedLabel = styled.label`
max-width: 182.5px;
overflow: hidden;
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

@media (max-width: 800px) { 
    
}
`
export const Select = styled.select`
display: block;
background-color: transparent;
padding: 8px;
color: #ffffff;
width: 100%;
box-shadow: 2px 8px 0px 0px black;

@media (max-width: 800px) {
    display: block;
    width: 75%;
    margin: auto;
}
`

export const ThirdFieldSet = styled.fieldset`
display: grid;
grid-column: 3/4;
grid-row: 2/3;
color: #ffffff;
gap: 8px;
max-width: 182.5px;
letter-spacing: 3px;
border: none;
text-transform: Capitalize;
font-style: Verdana, Tahoma, sans-serif;
font-weight: 600;
font-size: clamp(1vw, 20px, 22px);
text-align: center;
padding: 10px;
overflow: hidden;

@media (max-width: 800px) { 
    
}
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
`

export const SwapCurrencyText = styled.strong`

`

export const SwapCurrencyButton = styled.button`
display: grid;
min-width: 100px;
max-width: 400px;
margin: auto;
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

@media (max-width: 800px) { 
}
`

export const ResetButton = styled.button`
color: #fff;
padding: 10px;
border: none;
min-width: 100px;
max-width: 400px;
margin: auto;
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

@media (max-width: 800px) { 
   
}
`