<script lang="ts">
	import CardSkeleton from './CardSkeleton.svelte';
	import RevenueChartSkeleton from './RevenueChartSkeleton.svelte';
	import LatestInvoicesSkeleton from './LatestInvoicesSkeleton.svelte';
</script>

<div class="shimmer relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100" />
<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
	<CardSkeleton />
	<CardSkeleton />
	<CardSkeleton />
	<CardSkeleton />
</div>
<div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
	<RevenueChartSkeleton />
	<LatestInvoicesSkeleton />
</div>
