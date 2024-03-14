import React from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery, Card, CardContent, Stack } from '@mui/material';
import { insides, InsidesType } from '@site/src/data/insides';

type Props = {};

const Insides = (props: Props) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Box
			sx={{
				padding: '0 10%',
				mt: 10
			}}
		>
			<Box
				sx={{
					mb: isMobile ? 2 : isTablet ? 4 : 3
				}}
			>
				<Typography
					variant='h1'
					align='center'
					sx={{
						fontFamily: 'Inter',
						fontSize: isMobile ? 21 : isTablet ? 30 : 36,
						fontWeight: 500,
						color: theme.palette.text.primary
					}}
				>
					What's Inside?
				</Typography>
			</Box>
			<Box>
				<Grid
					container
					spacing={isMobile ? 4 : 8}
				>
					{insides.map((item: InsidesType, index: number) => (
						<Grid
							item
							key={index}
							xs={12}
							md={6}
						>
							<Card
								sx={{
									boxShadow: 'none'
									// border: `0.5px solid ${theme.palette.primary.light}`
								}}
							>
								<CardContent>
									{/* Cardmedia */}
									<Stack
										direction='column'
										justifyContent='center'
										alignItems='center'
									>
										<Box
											sx={{
												width: isMobile ? '20%' : isTablet ? '13%' : '15%',
												mb: 2
											}}
										>
											<img
												src={item.icon as string}
												alt={item.title}
												style={{
													width: '100%',
													height: '100%',
													objectFit: 'cover'
												}}
											/>
										</Box>
										<Typography
											variant='h2'
											align='center'
											sx={{
												fontFamily: 'Inter',
												fontSize: isMobile ? 16 : isTablet ? 17 : 18,
												fontWeight: 400,
												color: theme.palette.text.primary
											}}
										>
											{item.title}
										</Typography>
										<Typography
											variant='body1'
											align='justify'
											sx={{
												fontFamily: 'Inter',
												fontSize: 14,
												fontWeight: 350,
												color: theme.palette.text.primary,
												mt: 2
											}}
										>
											{item.content}
										</Typography>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Insides;
