/* eslint-disable react/prop-types */
import {
    ConvertTitle,
} from '../../styles/BodyUtil'

const DefaultLabel = ({currency}) => {
    return (
        <label htmlFor="startingCurrency">
                    <ConvertTitle>Convert from</ConvertTitle> 
                    {currency.defaultTypeAmount.toLocaleString("en-US",{
                    style: "currency",
                    currency: currency.defaultType
                })}
                </label>
    )
}

export default DefaultLabel;