import { faker } from '@faker-js/faker';

import { Customer } from '@prisma/client';

export const customerFactory = (n: number): Omit<Customer, 'id'>[] =>
	[...Array(n).keys()].map(() => ({
		name: faker.person.fullName(),
		email: faker.internet.email(),
		imageUrl: faker.image.avatar(),
	}));
