import { prisma } from './prisma';

export const fetchAllRevenue = async () => prisma.revenue.findMany();

//==============================================
/*

SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

*/
export const fetchLatestInvoices = async () =>
	prisma.invoice.findMany({
		take: 5,
		orderBy: {
			date: 'desc',
		},
		include: {
			customer: {
				select: {
					name: true,
					imageUrl: true,
					email: true,
				},
			},
		},
	});

//==============================================
/*
    SELECT COUNT(*) FROM invoices`;
    SELECT COUNT(*) FROM customers`;
    SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;
*/
export type CardData = {
	amountCollected: number;
	amountPending: number;
	totalInvoices: number;
	totalCustomers: number;
};

export const fetchCardData = async (): Promise<CardData> => {
	const [amountCollectedResult, amountPendingResult, totalInvoices, totalCustomers] =
		await Promise.all([
			prisma.invoice.aggregate({
				_sum: {
					amount: true,
				},
				where: {
					status: 'paid',
				},
			}),
			prisma.invoice.aggregate({
				_sum: {
					amount: true,
				},

				where: {
					status: 'pending',
				},
			}),
			prisma.invoice.count(),
			prisma.customer.count(),
		]);

	return {
		amountCollected: amountCollectedResult._sum.amount || 0,
		amountPending: amountPendingResult._sum.amount || 0,
		totalInvoices,
		totalCustomers,
	};
};
