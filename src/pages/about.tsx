import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import { Typography, Button, Box } from '@mui/material';

type Props = {};

const about = (props: Props) => {
	return (
		<Layout>
			<Box>
				<Typography variant='h4'>About</Typography>
			</Box>
		</Layout>
	);
};

export default about;
