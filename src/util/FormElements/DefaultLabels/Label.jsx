/* eslint-disable react/prop-types */
import {
    ConvertTitle, Label,
} from '../../styles/BodyUtil'

const DefaultLabel = ({currency, defaultNumber}) => {
    return (
        <Label htmlFor="defaultTypeAmount">
                    <ConvertTitle>Convert from</ConvertTitle> 
                    {currency.convertedTypeAmount ? defaultNumber.toLocaleString("en-US",{
                    style: "currency",
                    currency: currency.defaultType
                }) : currency.defaultTypeAmount.toLocaleString("en-US",{
                    style: "currency",
                    currency: currency.defaultType
                })}
                </Label>
    )
}

export default DefaultLabel