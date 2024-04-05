// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState(0);
  const [inputCurrency, setInputCurrency] = useState("USD");
  const [outputCurrency, setOutputCurrency] = useState("EUR");
  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${Number(
            value
          )}&from=${inputCurrency}&to=${outputCurrency}`
        );
        const data = await res.json();
        console.log("data");
        console.log(data.rates[outputCurrency]);

        setOutput(data.rates[outputCurrency]);
      }
      fetchData();
    },
    [value, inputCurrency, outputCurrency]
  );
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select
        value={inputCurrency}
        onChange={(e) => setInputCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={outputCurrency}
        onChange={(e) => setOutputCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
