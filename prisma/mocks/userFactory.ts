import { faker } from '@faker-js/faker';

import { User } from '@prisma/client';

export const userFactory = (n: number): Omit<User, 'id'>[] =>
	[...Array(n).keys()].map(() => ({
		name: faker.person.fullName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
	}));
