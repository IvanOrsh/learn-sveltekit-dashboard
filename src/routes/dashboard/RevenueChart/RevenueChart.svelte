<script lang="ts">
	import type { FetchedRevenue } from '$lib/server/db/dashboardData';
	import RevenueChartSkeleton from '../Skeletons/RevenueChartSkeleton.svelte';
	import Chart from './Chart.svelte';

	export let totalRevenue: Promise<FetchedRevenue[]>;
</script>

<div class="flex w-full flex-col md:col-span-4">
	{#await totalRevenue}
		<RevenueChartSkeleton />
	{:then data}
		<h2 class="mb-4 font-serif text-xl md:text-2xl">Recent Revenue</h2>
		<Chart {data} />
	{/await}
</div>
