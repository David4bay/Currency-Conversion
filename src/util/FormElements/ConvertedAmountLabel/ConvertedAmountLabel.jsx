/* eslint-disable react/prop-types */
import {
    ConvertTitle, ConvertedLabel
} from '../../styles/BodyUtil'

const ConvertedAmountLabel = ({defaultInputActive, defaultState, newAmount, newCurrency, oldCurrency, oldAmount}) => {
    return (
        <ConvertedLabel htmlFor="convertedTypeAmount">
                    <ConvertTitle>Converted {defaultState ? "to" : "from"}</ConvertTitle> 
                    {/* {
                    defaultInputActive === false ? 
                        oldAmount.toLocaleString("en-US", {
                        style: "currency",
                        currency: `${oldCurrency}`,
                        minimumFractionalDigits: 2
                    })
                    : 
                        newAmount.toLocaleString("en-US", {
                        style: "currency",
                        currency: `${newCurrency}`,
                        minimumFractionalDigits: 2
                    })
                    } */}
        </ConvertedLabel>
    )
}

export default ConvertedAmountLabel