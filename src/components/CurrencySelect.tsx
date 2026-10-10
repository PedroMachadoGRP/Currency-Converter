import * as Select from "@radix-ui/react-select";
import { currencies } from "../data/currencies";


interface CurrencySelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function CurrencySelect({
  value,
  onValueChange,
}: CurrencySelectProps) {
  const selectedCurrency = currencies.find(
    (currency) => currency.code === value,
  );

  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        aria-label="Selecionar moeda"
        className="flex items-center justify-between gap-2 h-full w-28 outline-none"
      >
        <Select.Value>
          {selectedCurrency && (
            <span className="flex items-center gap-2">
              <span>{selectedCurrency.flag}</span>
              <span>{selectedCurrency.code}</span>
            </span>
          )}
        </Select.Value>

        <Select.Icon>
          <span aria-hidden="true">⌄</span>
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={5}
          className="z-50 overflow-hidden rounded-md border border-neutral-300 bg-white shadow-lg"
        >
          <Select.Viewport className="p-1">
            {currencies.map((currency) => (
              <Select.Item
                key={currency.code}
                value={currency.code}
                className="flex items-center gap-2 px-3 py-2 rounded cursor-pointer outline-none text-neutral-800 data-highlighted:bg-neutral-200"
              >
                <Select.ItemText>
                  <span className="flex items-center gap-2">
                    <span>{currency.flag}</span>
                    <span>{currency.code}</span>
                    <span className="text-neutral-500">
                      - {currency.name}
                    </span>
                  </span>
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

