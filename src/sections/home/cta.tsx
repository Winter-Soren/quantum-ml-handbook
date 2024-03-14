import React from 'react';
import { Box, Stack, Button, Typography, useTheme } from '@mui/material';

type Props = {};

const CallToAction = (props: Props) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				backgroundColor: 'primary.main',
				// color: 'white',
				padding: '0 10%',
				mt: 10
			}}
		>
			<Stack
				spacing={2}
				sx={{
					mt: 5,
					mb: 5
				}}
			>
				<Typography
					variant='h1'
					sx={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 400 }}
					color={'white'}
					align='center'
				>
					Join the Quantum Revolution
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontFamily: 'Inter', fontSize: 15, padding: '0 10%' }}
					color={'white'}
					align='center'
				>
					Discover the exciting world of QML with us! Our open-source guide offers AI/ML insights, practical
					exercises, and a supportive community to help you become a QML expert. Let's unlock QML's potential
					together!
				</Typography>
			</Stack>
		</Box>
	);
};

export default CallToAction;
