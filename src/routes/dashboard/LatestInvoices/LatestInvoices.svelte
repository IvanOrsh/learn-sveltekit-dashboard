<script lang="ts">
	import { RefreshCcw } from 'lucide-svelte';
	import { formatCurrencyInCents } from '$lib/formatCurrency';
	import { formatDate } from '$lib/formatDate';
	import type { LatestInvoices } from '$lib/server/db/dashboardData';
	import LatestInvoicesSkeleton from '../Skeletons/LatestInvoicesSkeleton.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';

	export let latestInvoices: Promise<LatestInvoices>;
</script>

<div class="flex w-full flex-col md:col-span-4">
	{#await latestInvoices}
		<LatestInvoicesSkeleton />
	{:then data}
		<h2 class="mb-4 font-serif text-xl md:text-2xl">Latest Invoices</h2>
		<div class="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
			<div class="bg-white px-6">
				{#each data as invoice, i}
					<div class="flex flex-row items-center justify-between py-4" class:border-t={i !== 0}>
						<div class="flex items-center gap-4">
							<Avatar
								src={invoice.customer.imageUrl}
								alt={`${invoice.customer.name}'s profile picture`}
								size={32}
							/>
							<div class="min-w-0">
								<p class="truncate text-sm font-semibold md:text-base">
									{invoice.customer.name}
								</p>
								<p class="truncate text-sm text-gray-500 sm:block">
									{invoice.customer.email}
								</p>
								<p class="truncate text-sm text-gray-500 sm:block">
									{formatDate(invoice.date)}
								</p>
							</div>
						</div>
						<p class="truncate font-serif text-sm font-medium md:text-base">
							{formatCurrencyInCents(invoice.amount)}
						</p>
					</div>
				{/each}
			</div>
			<div class="flex items-center pb-2 pt-6">
				<RefreshCcw class="h-5 w-5 text-gray-500" />
				<h3 class="ml-2 text-sm text-gray-500">Updated just now</h3>
			</div>
		</div>
	{/await}
</div>
