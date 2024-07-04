import { faker } from '@faker-js/faker';

import { Invoice } from '@prisma/client';

export const invoiceFactory = (n: number, customerId: string): Omit<Invoice, 'id'>[] =>
	[...Array(n).keys()].map(() => ({
		amount: faker.number.int({ min: 45, max: 500 }),
		date: faker.date.recent({ days: 30 }),
		status: faker.helpers.arrayElement(['paid', 'pending']),
		customerId,
	}));
