// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	declare module '*&img';

	interface Document {
		startViewTransition(callback: () => void): void;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
