const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

export const formatCurrencyInCents = (cents: number) => currencyFormatter.format(cents / 100);
