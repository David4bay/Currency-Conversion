

 const chartDataHandler = (oldCurrency, newCurrency, defaultRate, convertedRate) => {
    return {
        labels: [`${oldCurrency} valued in ${newCurrency}`, `${newCurrency} valued in ${oldCurrency}`],
        datasets: [
          {
            label: 'Currency Rate(s)',
            data: [defaultRate, convertedRate],
            backgroundColor: [ 
              'rgba(255, 29, 132, 1)',
              'rgba(54, 122, 235, 2)',
            ],
            borderColor: [
              'rgba(255, 29, 132, 1)',
              'rgba(54, 122, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
}

export default chartDataHandler;