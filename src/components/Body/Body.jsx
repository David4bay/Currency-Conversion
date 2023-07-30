import { useState } from 'react';



function Body() {

    const [currency, setCurrency] = useState({
        defaultType: 'USD',
        defaultTypeAmount: 0,
        convertedType: 'EUR',
        convertedTypeAmount: 0
    })

    const changeCurrencyHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setCurrency({
            ...currency, [name]: value
        })
    }

    return (
        <form>
            <legend>Swap and Compare Currencies</legend>
            <fieldset>
            <label htmlFor="startingCurrency">
                From {currency.defaultTypeAmount.toLocaleString({
                style: "currency",
                currency: currency.defaultType
            })}
            </label>
            <input type="number" name="currency" id="currency" 
            value={currency.defaultTypeAmount} max={99999} 
            onChange={changeCurrencyHandler}
            />
            </fieldset>
            <fieldset>
            <label htmlFor="convertedCurrency">
                To {currency.convertedTypeAmount.toLocaleString({
                    style: "currency",
                    currency: currency.convertedType
                })}
            </label>
            <input type="number" name="convertedCurrency" id="convertedCurrency"
            value={currency.convertedTypeAmount} max={99999}
            onChange={currency.convertedTypeAmount}
            />
            </fieldset>
            <button>
                Swap {currency.defaultType}/{currency.convertedType}
            </button>
            <button>
                Reset Currencies</button>
        </form>
    )
}


export default Body;