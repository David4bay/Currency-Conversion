/* eslint-disable react/prop-types */
import {
    ConvertTitle,
} from '../../styles/BodyUtil'

const ConvertedAmountLabel = ({currency, convertedNumber}) => {
    return (
        <label htmlFor="convertedTypeAmount">
                    <ConvertTitle>Converted to</ConvertTitle> 
                    {currency.defaultTypeAmount ? convertedNumber.toLocaleString("en-US",{
                        style: "currency",
                        currency: currency.convertedType
                    }) : 
                    currency.convertedTypeAmount.toLocaleString("en-US",{
                        style: "currency",
                        currency: currency.convertedType
                    })}
        </label>
    )
}

export default ConvertedAmountLabel