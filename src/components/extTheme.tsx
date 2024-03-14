import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// General MUI theme
const extTheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: 'hsl(240, 48%, 47%)',
					light: 'hsl(240, 48%, 57%)',
					dark: 'hsl(240, 48%, 37%)'
				},
				background: {
					paper: 'hsl(240, 15%, 95%)'
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
					main: 'hsl(240, 90%, 70%)',
					light: 'hsl(240, 90%, 80%)',
					dark: 'hsl(240, 90%, 60%)'
				},
				background: {
					paper: 'hsl(210, 3%, 15%)'
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
