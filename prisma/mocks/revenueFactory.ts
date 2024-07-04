import { faker } from '@faker-js/faker';

import type { Revenue } from '@prisma/client';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const revenueFactory = (): Omit<Revenue, 'id'>[] =>
	months.map((month) => ({
		revenue: faker.number.int({ min: 2_500, max: 10_000 }),
		month,
	}));
