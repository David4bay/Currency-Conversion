/* eslint-disable react/prop-types */
import {
    ConvertTitle,
} from '../../styles/BodyUtil'

const DefaultLabel = ({currency, defaultNumber}) => {
    return (
        <label htmlFor="startingCurrency">
                    <ConvertTitle>Convert from</ConvertTitle> 
                    {defaultNumber ? defaultNumber.toLocaleString("en-US",{
                    style: "currency",
                    currency: currency.defaultType
                }) : currency.defaultTypeAmount.toLocaleString("en-US",{
                    style: "currency",
                    currency: currency.defaultType
                })}
                </label>
    )
}

export default DefaultLabel;