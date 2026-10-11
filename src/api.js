export async function fetchExchangeRates(baseCurrency = "USD") {
    const response = await fetch(
        `https://open.er-api.com/v6/latest/${baseCurrency}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch exchange rates.");
    }

    const data = await response.json();

    if (data.result !== "success") {
        throw new Error("The currency API returned an error.");
    }

    return data.rates;
}