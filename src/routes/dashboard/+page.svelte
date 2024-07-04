<script lang="ts">
	import DashboardCards from './DashboardCards/DashboardCards.svelte';
	import LatestInvoices from './LatestInvoices/LatestInvoices.svelte';
	import RevenueChart from './RevenueChart/RevenueChart.svelte';

	import CardSkeleton from './Skeletons/CardSkeleton.svelte';
	import LatestInvoicesSkeleton from './Skeletons/LatestInvoicesSkeleton.svelte';
	import RevenueChartSkeleton from './Skeletons/RevenueChartSkeleton.svelte';

	export let data;
</script>

<main>
	<h1 class="mb-4 font-serif text-xl md:text-2xl">Dashboard</h1>
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#await data.streamed.cardData}
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
		{:then value}
			<DashboardCards cardData={value} />
		{/await}
	</div>

	<div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
		{#await data.streamed.allRevenue}
			<RevenueChartSkeleton />
		{:then value}
			<RevenueChart totalRevenue={value} />
		{/await}

		{#await data.streamed.latestInvoices}
			<LatestInvoicesSkeleton />
		{:then value}
			<LatestInvoices latestInvoices={value} />
		{/await}
	</div>
</main>
