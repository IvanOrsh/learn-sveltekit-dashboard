const formatter = new Intl.DateTimeFormat('en-GB', {
	dateStyle: 'medium',
});

export const formatDate = (date: Date) => formatter.format(date);

export const formatIsoDate = (date: string) => formatter.format(new Date(date));
