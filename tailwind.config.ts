import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter Variable', ...fontFamily.sans],
			serif: ['Lusitana', ...fontFamily.serif],
		},

		extend: {
			colors: {
				primary: colors.rose,
				svelte: '#ff3e00',
			},
		},
	},
	plugins: [],
};

export default config;
