const intlNumberFormatValues: string[] = ['de-DE', 'currency', 'EUR'];

export const currencyFormatter: Intl.NumberFormat = new Intl.NumberFormat(
    intlNumberFormatValues[0],
    {
        style: intlNumberFormatValues[1],
        currency: intlNumberFormatValues[2],
    },
);


