/* eslint-disable react/prop-types */
import {
    ConvertTitle, ConvertedLabel
} from '../../styles/BodyUtil'
import {useSelector} from "react-redux"

const ConvertedAmountLabel = ({newAmount, newCurrency}) => {

    const converted = useSelector((state) => state.payloadReducer.converted)
    const payloadAmount = useSelector((state) => state.payloadReducer.payload_amount)
    const payloadCurrency = useSelector((state) => state.payloadReducer.payload_currency)
    const loading = useSelector((state) => state.payloadReducer.loading)

    return (
        <ConvertedLabel htmlFor="convertedTypeAmount">
                    <ConvertTitle>Converted <br/>{converted ? "from" : "to"}</ConvertTitle>
                    {
                        converted && !loading ? 
                        (   
                                newAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${newCurrency}`,
                                minimumFractionalDigits: 2    
                        })
                        ) 
                           : 
                        !converted && !loading ? (   
                                payloadAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${payloadCurrency || newCurrency}`,
                                minimumFractionalDigits: 2
                        })
                        ) :
                         (   
                            newAmount.toLocaleString("en-US", {
                            style: "currency",
                            currency: `${newCurrency}`,
                            minimumFractionalDigits: 2    
                    })
                    )
                    }
        </ConvertedLabel>
    )
}

export default ConvertedAmountLabel