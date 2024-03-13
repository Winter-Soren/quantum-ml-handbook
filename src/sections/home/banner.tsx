import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material';
import extTheme from '@site/src/components/extTheme';
import { FaArrowRight } from 'react-icons/fa6';

const Banner = () => {
	const { siteConfig } = useDocusaurusContext();
	const theme = useTheme();

	return (
		<Container>
			<Stack
				direction='column'
				justifyContent='center'
				alignItems='center'
				spacing={2}
			>
				<img
					src='/img/blue-qc.png'
					alt='quantum computer clipart'
					style={{ width: '18%', maxHeight: '100%' }}
				/>
				<Box>
					<Typography
						variant='h1'
						sx={{ fontSize: 50, fontFamily: 'Inter', fontWeight: 700, color: theme.palette.text.primary }}
					>
						{siteConfig.title}
					</Typography>
				</Box>
				<Box
					sx={{
						padding: '0 10%'
					}}
				>
					<Typography
						variant='h3'
						sx={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 400, color: theme.palette.text.primary }}
						align='center'
					>
						{siteConfig.tagline}
					</Typography>
				</Box>
				<Box>
					<Button
						variant='contained'
						disableElevation
						endIcon={<FaArrowRight />}
						sx={{
							backgroundColor: theme.palette.primary.light,
							'&:hover': {
								backgroundColor: theme.palette.primary.main
							}
						}}
						
					>
						Start Learning
					</Button>
				</Box>
				<Box>
					<Typography sx={{ fontStyle: 'italic', color: theme.palette.text.primary }}>
						It's completely free!
					</Typography>
				</Box>
				<Box>
					<iframe
						src='https://ghbtns.com/github-btn.html?user=winter-soren&amp;repo=qml-documentation&amp;type=star&amp;count=true&amp;size=large'
						// frameBorder={0}
						// scrolling={0}
						width={165}
						height={30}
						title='Stars'
					/>
				</Box>
			</Stack>
		</Container>
	);
};

export default Banner;
