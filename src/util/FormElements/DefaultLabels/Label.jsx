/* eslint-disable react/prop-types */
import {
    ConvertTitle, Label,
} from '../../styles/BodyUtil'

const DefaultLabel = ({defaultInputActive, defaultState, oldAmount, oldCurrency, newCurrency, newAmount}) => {
    return (
        <Label htmlFor="defaultTypeAmount">
                    <ConvertTitle>Convert {defaultState ? "from" : "to"}</ConvertTitle>
                    {/* {
                            defaultInputActive === true ?
                            newAmount.toLocaleString("en-US", {
                            style: "currency",
                            currency: `${newCurrency}`,
                            minimumFractionalDigits: 2
                        })
                        :
                            oldAmount.toLocaleString("en-US", {
                            style: "currency",
                            currency: `${oldCurrency}`,
                            minimumFractionalDigits: 2
                       })
                        } */}
                </Label>
    )
}

export default DefaultLabel