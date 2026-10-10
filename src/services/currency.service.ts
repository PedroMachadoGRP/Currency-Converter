import { getExchange } from "../api/currency.api";

export async function convertCurrency(amount: number, from: string, to: string): Promise<number> {
    const { rate } = await getExchange(from, to);

    return amount * rate;
}