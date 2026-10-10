export interface ExchangeRate {
    date:string;
    base:string;
    quote:string;
    rate:number
}

export interface Currency {
  code: string;
  name: string;
  flag:string
}