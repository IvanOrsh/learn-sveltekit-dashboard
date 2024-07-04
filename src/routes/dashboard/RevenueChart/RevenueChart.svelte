<script lang="ts">
	import { formatCurrencyInCents } from '$lib/formatCurrency';
	import type { Revenue } from '$lib/server/db/dashboardData';
	import RevenueChartSkeleton from '../Skeletons/RevenueChartSkeleton.svelte';

	export let totalRevenue: Promise<Revenue[]>;
</script>

<div class="w-full md:col-span-4">
	{#await totalRevenue}
		<RevenueChartSkeleton />
	{:then data}
		<h2 class="mb-4 font-serif text-xl md:text-2xl">Recent Revenue</h2>
		<ul>
			{#each data as { month, revenue }}
				<li>{month}: {formatCurrencyInCents(revenue)}</li>
			{/each}
		</ul>
	{/await}
</div>
