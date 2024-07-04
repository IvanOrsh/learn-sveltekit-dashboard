import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

try {
	const invoices = await prisma.invoice.deleteMany();
	const customers = await prisma.customer.deleteMany();
	const users = await prisma.user.deleteMany();
	const revenues = await prisma.revenue.deleteMany();
	console.log({ customers, invoices, users, revenues });

	await prisma.$disconnect();
} catch (e) {
	console.error(e);
	await prisma.$disconnect();
	process.exit(1);
}
