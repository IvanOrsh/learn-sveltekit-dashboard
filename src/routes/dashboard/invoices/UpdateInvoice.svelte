<script lang="ts">
	import { PencilIcon } from 'lucide-svelte';

	export let id: string;
</script>

<a
	href={`/dashboard/invoices/${id}/edit`}
	class="rounded-md border p-2 text-gray-900 hover:bg-gray-100"
>
	<PencilIcon className="w-5" />
</a>
