import type { PageServerLoad } from './$types';
import { fetchAllRevenue, fetchCardData, fetchLatestInvoices } from '$lib/server/db/dashboardData';

// TODO: to be refactored in order to use data streaming
export const load = (async () => {
	const [allRevenueInCents, allLatestInvoices, cardData] = await Promise.all([
		fetchAllRevenue(),
		fetchLatestInvoices(),
		fetchCardData(),
	]);

	return {
		allRevenue: allRevenueInCents,

		latestInvoices: allLatestInvoices.map((i) => ({
			name: i.customer.name,
			email: i.customer.email,
			imageUrl: i.customer.imageUrl,
			amount: i.amount,
			createdAt: i.date,
		})),

		cardData,
	};
}) satisfies PageServerLoad;
