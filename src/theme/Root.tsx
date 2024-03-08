import React from 'react';
import { getInitColorSchemeScript } from '@mui/material/styles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import extTheme from '@site/src/components/extTheme';

export default function Root(props: { children: React.ReactNode }) {
	return (
		<>
			{getInitColorSchemeScript()}
			<CssVarsProvider theme={extTheme}>{props.children}</CssVarsProvider>
		</>
	);
}
