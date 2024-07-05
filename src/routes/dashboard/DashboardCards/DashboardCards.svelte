<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import { formatCurrencyInCents } from '$lib/formatCurrency';
	import { Clock3, Coins, Inbox, Users2 } from 'lucide-svelte';
	import CardSkeleton from '../Skeletons/CardSkeleton.svelte';
	import type { CardData } from '$lib/server/db/dashboardData';

	export let cardData: Promise<CardData>;
</script>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
	{#await cardData}
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
	{:then data}
		<Card title="Collected" value={formatCurrencyInCents(data.amountCollected)}>
			<Coins class="h-5 w-5 text-gray-700" />
		</Card>
		<Card title="Pending" value={formatCurrencyInCents(data.amountPending)}>
			<Clock3 class="h-5 w-5 text-gray-700" />
		</Card>
		<Card title="Total Invoices" value={data.totalInvoices}>
			<Inbox class="h-5 w-5 text-gray-700" />
		</Card>
		<Card title="Total Customers" value={data.totalCustomers}>
			<Users2 class="h-5 w-5 text-gray-700" />
		</Card>
	{/await}
</div>
