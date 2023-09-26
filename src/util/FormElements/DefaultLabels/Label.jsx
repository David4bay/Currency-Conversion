/* eslint-disable react/prop-types */
import {
    ConvertTitle, Label,
} from '../../styles/BodyUtil'
import {useSelector} from "react-redux"

const DefaultLabel = ({oldAmount = 0, oldCurrency}) => {

    const converted = useSelector((state) => state.payloadReducer.converted)
    const payloadAmount = useSelector((state) => state.payloadReducer.payload_amount)
    const payloadCurrency = useSelector((state) => state.payloadReducer.payload_currency)
    const loading = useSelector((state) => state.payloadReducer.loading)

    return (
        <Label htmlFor="defaultTypeAmount">
                    <ConvertTitle>Converted <br/>{!converted ? "from" : "to"}</ConvertTitle>
                    {
                        !converted && !loading ? 
                        (   
                                oldAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${oldCurrency}`,
                                minimumFractionalDigits: 2
                        }))
                       :
                        !converted && loading && (
                                oldAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${oldCurrency}`,
                                minimumFractionalDigits: 2
                        })
                        ) ||
                        (   
                                payloadAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${payloadCurrency || oldCurrency}`,
                                minimumFractionalDigits: 2
                        })
                        ) 
                    }
                </Label>
    )
}

export default DefaultLabel