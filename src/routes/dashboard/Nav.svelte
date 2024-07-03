<script lang="ts">
	import { Globe, Home, Files, Users2, Power } from 'lucide-svelte';
</script>

<nav class="flex h-full flex-col px-3 py-4 md:px-2">
	<a
		class="mb-2 flex h-20 items-end justify-start rounded-md bg-primary-600 p-4 no-underline md:h-40"
		href="/"
		><div class="w-32 text-white md:w-40">
			<div class="flex flex-row items-center font-serif leading-none text-white">
				<Globe size="42" />
				<h1 class="text-[44px]">Acme</h1>
			</div>
		</div></a
	>
	<div class="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
		<!-- TODO: hover -->
		<a
			aria-label="Home"
			class="rounded-mdp-3 flex h-[48px] grow items-center justify-center gap-2 bg-sky-100 text-sm font-medium no-underline hover:text-primary-600 md:flex-none md:justify-start md:p-2 md:px-3"
			href="/dashboard"
		>
			<Home />
			<p class="hidden md:block">Home</p></a
		><a
			aria-label="Invoices"
			class="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium no-underline hover:bg-sky-100 hover:text-primary-600 md:flex-none md:justify-start md:p-2 md:px-3"
			href="/dashboard/invoices"
		>
			<Files />
			<p class="hidden md:block">Invoices</p></a
		><a
			aria-label="Customers"
			class="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium no-underline hover:bg-sky-100 hover:text-primary-600 md:flex-none md:justify-start md:p-2 md:px-3"
			href="/dashboard/customers"
		>
			<Users2 />
			<p class="hidden md:block">Customers</p></a
		>
		<div class="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

		<!-- Sign Out #TODO -->
		<form action="" method="post">
			<button
				class="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-primary-600 md:flex-none md:justify-start md:p-2 md:px-3"
			>
				<Power />
				<div class="hidden md:block">Sign Out</div></button
			>
		</form>
	</div>
</nav>
