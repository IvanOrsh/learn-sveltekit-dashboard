const formatter = new Intl.DateTimeFormat('en-GB', {});

export const formatDate = (date: Date) => formatter.format(date);
