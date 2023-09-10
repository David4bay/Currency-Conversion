/* eslint-disable react/prop-types */
import {
    ConvertTitle,
} from '../../styles/BodyUtil'

const DefaultLabel = ({currency, defaultNumber}) => {
    return (
        <label htmlFor="defaultTypeAmount">
                    <ConvertTitle>Convert from</ConvertTitle> 
                    {currency.convertedTypeAmount ? defaultNumber.toLocaleString("en-US",{
                    style: "currency",
                    currency: currency.defaultType
                }) : currency.defaultTypeAmount.toLocaleString("en-US",{
                    style: "currency",
                    currency: currency.defaultType
                })}
                </label>
    )
}

export default DefaultLabel