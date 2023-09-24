/* eslint-disable react/prop-types */
import {
    ConvertTitle, ConvertedLabel
} from '../../styles/BodyUtil'

const ConvertedAmountLabel = () => {
    return (
        <ConvertedLabel htmlFor="convertedTypeAmount">
                    <ConvertTitle>Converted to</ConvertTitle> 
                    {}
        </ConvertedLabel>
    )
}

export default ConvertedAmountLabel