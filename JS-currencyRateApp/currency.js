class currency {
    constructor() {
        //https://app.freecurrencyapi.com/dashboard rest apı'dan veriler çekilir.
        this.Url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Q8lPGsft3OrGpO7NwrTz8pHF9sTNNCzQ7nGZP9gN&base_currency=";
    }

    async exchange(amount, firstOptionValue, secondOptionValue) {
        const response = await fetch(this.Url + firstOptionValue);
        const result = await response.json();
        const exchangeResult = amount * result.data[secondOptionValue];
        return exchangeResult;
    }
}