<script lang="ts">
	import { Chart, registerables } from 'chart.js';
	import { formatCurrencyInCents } from '$lib/formatCurrency';
	import { onMount } from 'svelte';

	export let data: { month: string; revenue: number }[];

	let canvasElement: HTMLCanvasElement;
	Chart.register(...registerables);

	onMount(() => {
		const ctx = canvasElement.getContext('2d');

		if (!ctx) return;

		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: data.map((d) => d.month),
				datasets: [
					{
						label: 'Revenue',
						data: data.map((d) => d.revenue / 100),
						borderWidth: 1,
						backgroundColor: '#f87171',
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});
</script>

<canvas bind:this={canvasElement} />
