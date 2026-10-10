import type { ExchangeRate } from "../types/currency.types";


const BASE_URL = "https://api.frankfurter.dev/v2";

export async function getExchange(from: string, to: string): Promise<ExchangeRate> {
    const response = await fetch(`${BASE_URL}/rate/${from}/${to}`);

    if (!response.ok) {
        throw new Error("Erro na conversão")
    }

    return response.json()
}