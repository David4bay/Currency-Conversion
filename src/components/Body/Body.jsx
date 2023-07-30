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
            ...currency,
            [name]: value
        })
        if (currency.defaultTypeAmount.length > 5 || currency.convertedTypeAmount.length > 5) {
            setCurrency({...currency, [name]: value.slice(0, 6)})
        }
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
            <input type="number" name="defaultTypeAmount" id="defaultTypeAmount" 
            value={currency.defaultTypeAmount} maxLength="5"
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
            <input type="number" name="convertedTypeAmount" id="convertedTypeAmount"
            value={currency.convertedTypeAmount} maxLength="5"
            onChange={changeCurrencyHandler}
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