<script lang="ts">
	import { Trash } from 'lucide-svelte';

	export let id: string;
</script>

<form>
	<button class="rounded-md border p-2 hover:bg-gray-100">
		<span class="sr-only">Delete</span>
		<Trash class="w-5" />
	</button>
</form>
