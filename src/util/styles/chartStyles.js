import styled from 'styled-components'

export const ChartWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
gap: 10px;
min-height: 100vh;
`

export const ChartContainer = styled.div`
width: 35%;
color: #ffffff;
textAlign: center;

@media (max-width: 900px) {
    width: 65%;
}
`
export const Paragraph = styled.p`
margin-top: 80px;
`
export const StrongText = styled.strong`
line-height: 1.7;
`

export const SelectCurrencyContainer = styled.div`
display: block;

@media (min-width: 900px) {
    margin: 100px auto 0px auto;
}
`