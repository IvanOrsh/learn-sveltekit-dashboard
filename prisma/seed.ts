import { PrismaClient } from '@prisma/client';
import { userFactory, customerFactory, invoiceFactory, revenueFactory } from './mocks';

const prisma = new PrismaClient();

try {
	const users = userFactory(3);
	const createdUsers = await prisma.user.createMany({ data: users });

	console.log(`Users successfully created: ${createdUsers.count}`);

	const customers = customerFactory(10);
	for (const customer of customers) {
		const { id: customerId } = await prisma.customer.create({ data: customer });
		const invoices = invoiceFactory(10, customerId);

		await prisma.invoice.createMany({ data: invoices });

		console.log(`Created ${invoices.length} invoices for customer ${customer.name}`);
	}

	const revenues = revenueFactory();
	const createdRevenues = await prisma.revenue.createMany({ data: revenues });

	console.log(`Revenues successfully created: ${createdRevenues.count}`);

	await prisma.$disconnect();
} catch (e) {
	console.error(e);
	await prisma.$disconnect();
	process.exit(1);
}
