import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { Box, Button, Container, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa6';

const Banner = () => {
	const { siteConfig } = useDocusaurusContext();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Container>
			<Stack
				direction='column'
				justifyContent='center'
				alignItems='center'
				spacing={2}
			>
				<img
					src='/img/blue-qc-light.png'
					alt='quantum computer clipart'
					style={{
						width: isMobile ? '42%' : isTablet ? '25%' : '18%',
						maxHeight: '100%',
						marginTop: isMobile ? 5 : isTablet ? 10 : 20
					}}
				/>
				<Box>
					<Typography
						variant='h1'
						sx={{
							fontSize: isMobile ? 28 : isTablet ? 43 : 52,
							fontFamily: 'Inter',
							fontWeight: 700,
							color: theme.palette.text.primary
						}}
						align='center'
					>
						{siteConfig.title}
					</Typography>
				</Box>
				<Box
					sx={{
						padding: isMobile ? 0 : '0 10%'
					}}
				>
					<Typography
						variant='h3'
						sx={{
							fontSize: isMobile ? 16 : isTablet ? 20 : 24,
							fontFamily: 'Inter',
							fontWeight: 400,
							color: theme.palette.text.primary
						}}
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
								backgroundColor: theme.palette.primary.main,
								color: 'white'
							}
						}}
						component={Link}
						to='/docs/get-started'
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
					{/* github stars */}
					<iframe
						src='https://ghbtns.com/github-btn.html?user=winter-soren&amp;repo=quantum-ml-handbook&amp;type=star&amp;count=true&amp;size=large'
						width={165}
						height={30}
						style={{ marginLeft: 40}}
						title='Stars'
					/>
					{/* github forks */}
					<iframe
						src='https://ghbtns.com/github-btn.html?user=winter-soren&amp;repo=quantum-ml-handbook&amp;type=fork&amp;count=true&amp;size=large'
						width={165}
						height={30}
						title='Forks'
					/>
				</Box>
			</Stack>
		</Container>
	);
};

export default Banner;
