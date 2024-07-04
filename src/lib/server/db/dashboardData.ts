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
