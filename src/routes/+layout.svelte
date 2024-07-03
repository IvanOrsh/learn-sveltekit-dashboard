<script lang="ts">
	import { onNavigate } from '$app/navigation';

	import '@fontsource-variable/inter';
	import '@fontsource/lusitana/400.css';
	import '@fontsource/lusitana/700.css';
	import './global.css';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition &&
				navigation.from?.url.pathname !== navigation.to?.url.pathname &&
				document.startViewTransition(async () => {
					resolve();
					await navigation.complete;
				});
		});
	});
</script>

<slot class="font-sans"></slot>

<style>
	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(100%);
			/* @apply shadow; */
		}
	}

	:root::view-transition-old(root) {
		pointer-events: none;
		animation: 300ms ease-out both fade-out;
	}

	:root::view-transition-new(root) {
		pointer-events: none;
		animation: 300ms ease-out both slide-from-right;
	}
</style>
