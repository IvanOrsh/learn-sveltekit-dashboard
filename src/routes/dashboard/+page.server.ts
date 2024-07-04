import type { PageServerLoad } from './$types';
import { fetchAllRevenue, fetchCardData, fetchLatestInvoices } from '$lib/server/db/dashboardData';

// TODO: to be refactored in order to use data streaming
export const load = (async () => {
	const allRevenueInCents = await fetchAllRevenue();
	const allLatestInvoices = await fetchLatestInvoices();
	const cardData = await fetchCardData();

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
