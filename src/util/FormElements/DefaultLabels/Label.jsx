/* eslint-disable react/prop-types */
import {
    ConvertTitle, Label,
} from '../../styles/BodyUtil'
import {useSelector} from "react-redux"

const DefaultLabel = ({oldAmount = 0, oldCurrency}) => {

    const payloadCurrencySymbol = useSelector((state) => state.newCurrencyPayload.new_currencySymbol_payload)
    const payloadAmount = useSelector((state) => state.newCurrencyPayload.currency_payload)
    const newPayloadActive = useSelector((state) => state.newCurrencyPayload.new_active)
    const newLoading = useSelector((state) => state.newCurrencyReducer.new_loading)

    return (
        <Label htmlFor="defaultTypeAmount">
                    <ConvertTitle>Converted <br/>{!newLoading || !newPayloadActive ? "from" : "to"}</ConvertTitle>
                    {
                        !newLoading && !newPayloadActive ? 
                        (   
                                oldAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${oldCurrency}`,
                                minimumFractionalDigits: 2
                        })
                        )

                        :

                       newLoading && newPayloadActive ?
                       (
                                payloadAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${payloadCurrencySymbol}`,
                                minimumFractionalDigits: 2
                                }))
                        :

                        (   
                            oldAmount.toLocaleString("en-US", {
                            style: "currency",
                            currency: `${oldCurrency}`,
                            minimumFractionalDigits: 2
                    }))
                    }
                </Label>
    )
}

export default DefaultLabel