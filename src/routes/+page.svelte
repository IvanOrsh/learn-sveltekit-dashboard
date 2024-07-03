<script lang="ts">
	import { MoveRight } from 'lucide-svelte';

	import HeroDesktopAvif from './hero-desktop.png?w=800;1200;1400&format=avif&as=srcset&img';
	import HeroDesktopWebp from './hero-desktop.png?w=800;1200;1400&format=webp&as=srcset&img';
	import HeroDesktopFallback from './hero-desktop.png?w=800;1200;1400&format=png&as=metadata&img';

	import HeroMobileAvif from './hero-mobile.png?w=720&format=avif&as=srcset&img';
	import HeroMobileWebp from './hero-mobile.png?w=720&format=webp&as=srcset&img';
	import HeroMobileFallback from './hero-mobile.png?w=720&format=png&as=metadata&img';
</script>

<header class="mb-4 flex h-20 shrink-0 items-end rounded-lg bg-primary-500 p-4 md:h-52" />

<main class="flex grow flex-col gap-4 md:flex-row">
	<div
		class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20"
	>
		<div
			class="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
		/>

		<p class="font-serif text-xl text-gray-800 md:text-3xl md:leading-normal">
			<strong>Welcome to Acme.</strong> This is the example for the{' '}
			<a href="https://nextjs.org/learn/"> Next.js Learn Course </a>
			, brought to you by Vercel.
		</p>

		<a
			class="flex items-center gap-4 self-start rounded-lg bg-primary-500 px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-primary-400 md:text-base"
			href="/login"
			><span>Log in</span>
			<MoveRight />
		</a>
	</div>

	<div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
		<picture class="hidden md:block">
			<source srcset={HeroDesktopAvif} type="image/avif" />
			<source srcset={HeroDesktopWebp} type="image/webp" />
			<img
				src={HeroDesktopFallback.src}
				width={HeroDesktopFallback.width}
				height={HeroDesktopFallback.height}
				alt="Screenshots of the dashboard project showing desktop version"
			/>
		</picture>

		<picture class="block md:hidden">
			<source srcset={HeroMobileAvif} type="image/avif" />
			<source srcset={HeroMobileWebp} type="image/webp" />
			<img
				src={HeroMobileFallback.src}
				width={HeroMobileFallback.width}
				height={HeroMobileFallback.height}
				alt="Screenshots of the dashboard project showing two different mobile views"
			/>
		</picture>
	</div>
</main>
