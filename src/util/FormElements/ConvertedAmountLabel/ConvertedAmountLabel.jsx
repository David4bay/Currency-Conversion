/* eslint-disable react/prop-types */
import {
    ConvertTitle,
} from '../../styles/BodyUtil';

const ConvertedAmountLabel = ({currency, convertedNumber}) => {
    return (
        <label htmlFor="convertedCurrency">
                    <ConvertTitle>Converted to</ConvertTitle> 
                    {convertedNumber ? convertedNumber.toLocaleString("en-US",{
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

export default ConvertedAmountLabel;