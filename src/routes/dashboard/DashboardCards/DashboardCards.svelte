<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
	import { formatCurrencyInCents } from '$lib/formatCurrency';
	import { Clock3, Coins, Inbox, Users2 } from 'lucide-svelte';
	import type { CardData } from '$lib/server/db/dashboardData';

	export let cardData: CardData;
</script>

<Card title="Collected" value={formatCurrencyInCents(cardData.amountCollected)}>
	<Coins class="h-5 w-5 text-gray-700" />
</Card>
<Card title="Pending" value={formatCurrencyInCents(cardData.amountPending)}>
	<Clock3 class="h-5 w-5 text-gray-700" />
</Card>
<Card title="Total Invoices" value={cardData.totalInvoices}>
	<Inbox class="h-5 w-5 text-gray-700" />
</Card>
<Card title="Total Customers" value={cardData.totalCustomers}>
	<Users2 class="h-5 w-5 text-gray-700" />
</Card>
