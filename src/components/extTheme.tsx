import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// General MUI theme
const extTheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					200: '#5d5dc6',
					300: '#4c4cb2',
					400: '#3b3ec6',
					500: '#3e3eb1',
					600: '#3e3eb1',
					700: '#31318c',
					800: '#31318c',
					900: '#1f1f5c',
					light: '#5d5dc6',
					main: '#3e3eb1',
					dark: '#31318c'
				},
				background: {
					paper: '#f0f0f4'
				},
				text: {
					primary: '#444950',
					secondary: '#6E747C',
					disabled: '#B3B6BC'
				}
			}
		},
		dark: {
			palette: {
				primary: {
					200: '#9e9efa',
					300: '#b3b3fc',
					400: '#a6a6fb',
					500: '#6e6ef7',
					600: '#3d3df5',
					700: '#3131d9',
					800: '#2b2bc8',
					900: '#1f1f8c',
					light: '#9e9efa',
					main: '#6e6ef7',
					dark: '#2b2bc8'
				},
				background: {
					paper: '#252627'
				},
				text: {
					primary: '#F5F6F7',
					secondary: '#B3B6BC',
					disabled: '#6E747C'
				}
			}
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536
		}
	}
});

export default extTheme;
