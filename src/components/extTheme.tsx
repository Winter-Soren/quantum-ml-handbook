import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// General MUI theme
const extTheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: 'hsl(240, 48%, 47%)'
				},
				background: {
					paper: 'hsl(240, 15%, 95%)'
				}
			}
		},
		dark: {
			palette: {
				primary: {
					main: 'hsl(240, 90%, 70%)'
				},
				background: {
					paper: 'hsl(210, 3%, 15%)'
				}
			}
		}
	}
});

export default extTheme;
