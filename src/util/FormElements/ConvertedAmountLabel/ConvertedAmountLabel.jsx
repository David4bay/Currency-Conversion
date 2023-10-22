/* eslint-disable react/prop-types */
import {
    ConvertTitle, ConvertedLabel
} from '../../styles/BodyUtil'
import {useSelector} from "react-redux"

const ConvertedAmountLabel = ({newAmount, newCurrency}) => {

    const payloadCurrencySymbol = useSelector((state) => state.oldCurrencyPayload.old_currencySymbol_payload)
    const payloadAmount = useSelector((state) => state.oldCurrencyPayload.currency_payload)
    const oldPayloadActive = useSelector((state) => state.oldCurrencyPayload.old_active)
    const newPayloadActive = useSelector((state) => state.newCurrencyPayload.new_active)

    return (
        <ConvertedLabel htmlFor="convertedTypeAmount">
                    <ConvertTitle>Converted <br/>{!oldPayloadActive && newPayloadActive ? "from" : "to"}</ConvertTitle>
                    {                        
                        !oldPayloadActive && newPayloadActive ? 
                        (   
                                newAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${newCurrency}`,
                                minimumFractionalDigits: 2    
                        })
                        ) 
                           : 
                        (   
                                payloadAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${newCurrency || payloadCurrencySymbol}`,
                                minimumFractionalDigits: 2
                            })
                        )
                    }
        </ConvertedLabel>
    )
}

export default ConvertedAmountLabel