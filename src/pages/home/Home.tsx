import { useState } from "react";
import { convertCurrency } from "../../services/currency.service";
import { CurrencySelect } from "../../components/CurrencySelect";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [userCurrency, setUserCurrency] = useState("BRL");
  const [requiredCurrency, setRequiredCurrency] = useState("USD");
  const [result, setResult] = useState<number | null>(null);

  async function handleConvert() {
    if (!amount || !Number.isFinite(Number(amount))) {
      return;
    }

    try {
      const converted = await convertCurrency(
        Number(amount),
        userCurrency,
        requiredCurrency,
      );

      setResult(converted);
    } catch (error) {
      console.error("Erro ao converter moeda:", error);
    }
  }

  return (
    <main className="flex justify-center items-center w-screen min-h-screen bg-neutral-200">
      <section className="flex flex-col gap-5 p-6 bg-neutral-300 border border-black rounded-md">
        <div className="flex flex-col gap-2">
          <span>Moeda de origem</span>

          <div className="flex items-center w-100 h-10 px-3 border border-black rounded-md bg-white">
            <input
              className="flex-1 min-w-0 h-full outline-none text-neutral-800"
              placeholder="Valor"
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />

            <CurrencySelect
              value={userCurrency}
              onValueChange={setUserCurrency}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span>Moeda de destino</span>

          <div className="flex items-center w-100 h-10 px-3 border border-black rounded-md bg-white">
            <p className="flex-1 min-w-0 text-neutral-800">
              {result !== null ? result.toFixed(2) : "Resultado"}
            </p>

            <CurrencySelect
              value={requiredCurrency}
              onValueChange={setRequiredCurrency}
            />
          </div>
        </div>

        <button
          className="h-10 rounded-md bg-neutral-950 border border-neutral-950 hover:bg-transparent hover:cursor-pointer duration-150 text-white"
          onClick={handleConvert}
        >
          Converter
        </button>
      </section>
    </main>
  );
}
