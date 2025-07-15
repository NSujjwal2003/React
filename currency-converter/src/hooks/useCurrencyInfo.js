import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!baseCurrency) return;

        fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates))
            .catch((err) => console.error("Error fetching exchange rates:", err));
    }, [baseCurrency]);

    return data;
}

export default useCurrencyInfo;
