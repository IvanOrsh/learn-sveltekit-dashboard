import { prisma } from './prisma';
import { delay } from './delay';

//==============================================
/* FOR INVOICES:

- Items per page (6)
- query: string
- currentPage: number

- 1. offset = (currentPage - 1) * ITEMS_PER_PAGE;
- 2.  SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
*/
const ITEMS_PER_PAGE = 10;

export const fetchFilteredInvoices = async (query: string = '', currentPage: number = 1) => {
	await delay(1.5);

	const offset = (currentPage - 1) * ITEMS_PER_PAGE;

	try {
		const invoices = await prisma.invoice.findMany({
			skip: offset,
			take: ITEMS_PER_PAGE,
			orderBy: {
				date: 'desc',
			},
			where: {
				OR: [
					// query by customer name
					{
						customer: {
							name: {
								contains: query,
								mode: 'insensitive',
							},
						},
					},
					// // query by customer email
					{
						customer: {
							email: {
								contains: query,
								mode: 'insensitive',
							},
						},
					},
					// // query by amount
					{
						amount: {
							equals: parseInt(query) || undefined,
						},
					},
					// query by date
					// {
					// 	date: {
					// 		equals: new Date(query),
					// 	},
					// },
					// query by status
					// {
					// 	status: {
					// 		contains: query,
					// 		mode: 'insensitive',
					// 	},
					// },
				],
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

		return invoices;
	} catch (e) {
		console.error('Database Error:', e);
		throw new Error('Failed to fetch invoices.');
	}
};

export type FilteredInvoices = Awaited<ReturnType<typeof fetchFilteredInvoices>>[number];

/*
export async function fetchInvoicesPages(query: string) {
  noStore();
  try {
    type Count = { count: number };
    const count = await sql<Count>`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}
	*/
