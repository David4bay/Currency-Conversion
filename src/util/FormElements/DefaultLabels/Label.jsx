/* eslint-disable react/prop-types */
import {
    ConvertTitle, Label,
} from '../../styles/BodyUtil'
import {useSelector} from "react-redux"

const DefaultLabel = ({oldAmount = 0, oldCurrency}) => {

    const payloadCurrencySymbol = useSelector((state) => state.newCurrencyPayload.new_currencySymbol_payload)

    const payloadAmount = useSelector((state) => state.newCurrencyPayload.currency_payload)

    const newPayloadActive = useSelector((state) => state.newCurrencyPayload.new_active)

    const oldPayloadActive = useSelector((state) => state.oldCurrencyPayload.old_active)

    const defaultTitle = useSelector((state) => state.ratesReducer.defaultTitle)

    return (
        <Label htmlFor="defaultTypeAmount" title={defaultTitle}>
                    <ConvertTitle>Converted <br/>{!newPayloadActive ? "from" : "to"}</ConvertTitle>
                    {
                        oldPayloadActive && !newPayloadActive ? 
                        ( 
                                oldAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${oldCurrency}`,
                                minimumFractionalDigits: 2
                        })
                        )

                        :

                       (
                                payloadAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: `${oldCurrency || payloadCurrencySymbol}`,
                                minimumFractionalDigits: 2
                            })
                        )
                    }
                </Label>
    )
}

export default DefaultLabel