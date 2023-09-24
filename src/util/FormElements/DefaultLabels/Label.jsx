/* eslint-disable react/prop-types */
import {
    ConvertTitle, Label,
} from '../../styles/BodyUtil'

const DefaultLabel = () => {
    return (
        <Label htmlFor="defaultTypeAmount">
                    <ConvertTitle>Convert from</ConvertTitle> 
                    {}
                </Label>
    )
}

export default DefaultLabel