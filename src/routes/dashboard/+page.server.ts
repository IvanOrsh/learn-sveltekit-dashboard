import type { PageServerLoad } from './$types';
import { fetchAllRevenue, fetchCardData, fetchLatestInvoices } from '$lib/server/db/dashboardData';

export const load = (async () => {
	const cardData = fetchCardData();
	const latestInvoices = fetchLatestInvoices();
	const allRevenue = fetchAllRevenue();

	return {
		streamed: {
			cardData,
			latestInvoices,
			allRevenue,
		},
	};
}) satisfies PageServerLoad;
