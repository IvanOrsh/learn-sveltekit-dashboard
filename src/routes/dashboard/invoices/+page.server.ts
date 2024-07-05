import { fetchFilteredInvoices } from '$lib/server/db/fetchInvoices';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const invoices = fetchFilteredInvoices('26100');
	return {
		streamed: {
			invoices,
		},
	};
}) satisfies PageServerLoad;
