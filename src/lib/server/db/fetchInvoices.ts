import type { Prisma } from '@prisma/client';
import { prisma } from './prisma';
// import { delay } from './delay';

const ITEMS_PER_PAGE = 6;

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

function isValidDate(query: string): boolean {
	const date = new Date(query);
	return !isNaN(date.getTime());
}

function buildCustomerNameFilter(query: string): Prisma.CustomerWhereInput {
	return {
		name: {
			contains: query,
			mode: 'insensitive',
		},
	};
}

function buildCustomerEmailFilter(query: string): Prisma.CustomerWhereInput {
	return {
		email: {
			contains: query,
			mode: 'insensitive',
		},
	};
}

function buildInvoiceAmountFilter(query: string): Prisma.InvoiceWhereInput {
	const amount = parseInt(query);
	return isNaN(amount)
		? {}
		: {
				amount: {
					equals: amount * 100, // in cents
				},
			};
}

function buildInvoiceDateFilter(query: string): Prisma.InvoiceWhereInput {
	return isValidDate(query)
		? {
				date: {
					equals: new Date(query),
				},
			}
		: {};
}

function buildInvoiceStatusFilter(query: string): Prisma.InvoiceWhereInput {
	return {
		status: {
			contains: query,
			mode: 'insensitive',
		},
	};
}

function buildInvoiceFilter(query: string): Prisma.InvoiceWhereInput {
	return {
		OR: [
			{
				customer: buildCustomerNameFilter(query),
			},
			{
				customer: buildCustomerEmailFilter(query),
			},
			buildInvoiceAmountFilter(query),
			buildInvoiceDateFilter(query),
			buildInvoiceStatusFilter(query),
		],
	};
}

export const fetchFilteredInvoices = async ({
	query = '',
	currentPage = 1,
}: {
	query: string;
	currentPage: number;
}) => {
	// await delay(1.5); // TODO: remove delay!

	const offset = (currentPage - 1) * ITEMS_PER_PAGE;

	try {
		const whereClauses = buildInvoiceFilter(query);

		const invoices = await prisma.invoice.findMany({
			select: {
				id: true,
				amount: true,
				date: true,
				status: true,
				customer: {
					select: {
						name: true,
						email: true,
						imageUrl: true,
					},
				},
			},
			skip: offset,
			take: ITEMS_PER_PAGE,
			orderBy: {
				date: 'desc',
			},
			where: whereClauses,
		});

		return invoices;
	} catch (e) {
		console.error('Database Error:', e);
		throw new Error('Failed to fetch invoices.');
	}
};

export type FilteredInvoices = Awaited<ReturnType<typeof fetchFilteredInvoices>>;

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
