/* eslint-disable react/prop-types */
import {
    ConvertTitle, ConvertedLabel
} from '../../styles/BodyUtil'

const ConvertedAmountLabel = ({currency, convertedNumber}) => {
    return (
        <ConvertedLabel htmlFor="convertedTypeAmount">
                    <ConvertTitle>Converted to</ConvertTitle> 
                    {currency.defaultTypeAmount ? convertedNumber.toLocaleString("en-US",{
                        style: "currency",
                        currency: currency.convertedType
                    }) : 
                    currency.convertedTypeAmount.toLocaleString("en-US",{
                        style: "currency",
                        currency: currency.convertedType
                    })}
        </ConvertedLabel>
    )
}

export default ConvertedAmountLabel