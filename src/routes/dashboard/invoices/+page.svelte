<script lang="ts">
	import Table from './Table.svelte';

	export let data;
</script>

<div class="w-full">
	<div class="flex w-full items-center justify-between">
		<h1 class="font-serif text-2xl">Invoices</h1>
	</div>
	<div class="mt-4 flex items-center justify-between gap-2 md:mt-8">
		Search Create Invoices
		<!-- <Search placeholder="Search invoices..." /> -->
		<!-- <CreateInvoice /> -->
	</div>
	{#await data.streamed.invoices}
		Loading
	{:then invoices}
		<Table {invoices} />
	{/await}

	<div class="mt-5 flex w-full justify-center">
		Pagination
		<!-- <Pagination totalPages={totalPages} /> -->
	</div>
</div>
