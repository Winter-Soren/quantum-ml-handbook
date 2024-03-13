import React from 'react';
import { Box, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { features, FeatureType } from '@site/src/data/features';

type Props = {};

const Features = (props: Props) => {
	const theme = useTheme();
	const [expanded, setExpanded] = React.useState<number | false>(false);

	const handleExpansion = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box sx={{ padding: '0 10%', mt: 10 }}>
			<Grid container>
				<Grid
					item
					xs={12}
					md={6}
				>
					<Typography
						variant='h1'
						sx={{
							fontFamily: 'Inter',
							fontSize: 45,
							fontWeight: 500,
							color: theme.palette.text.primary
						}}
					>
						Why is this your ultimate QML companion?
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
				>
					{features.map((feature: FeatureType, index: number) => (
						<Accordion
							key={index}
							expanded={expanded === index}
							onChange={handleExpansion(index)}
							sx={{
								backgroundColor: '#2c2c2c', // Dark background color
								borderRadius: '8px', // Rounded corners
								marginBottom: '10px', // Spacing between accordions
								boxShadow: 'none', // No shadow
								'& .MuiAccordionSummary-root': {
									borderBottom: '1px solid #555', // Border bottom
									color: '#fff', // White text color
									'&:hover': {
										backgroundColor: '#3c3c3c' // Darker background on hover
									}
								}
							}}
						>
							<AccordionSummary expandIcon={<MdKeyboardArrowDown />}>
								<Typography
									variant='h4'
									sx={{
										fontFamily: 'Inter',
										fontSize: 16,
										fontWeight: 400,
										color: theme.palette.text.primary
									}}
								>
									{feature.title}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Inter',
										fontSize: 14,
										fontWeight: 300,
										color: theme.palette.text.primary
									}}
								>
									{feature.content}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Grid>
			</Grid>
		</Box>
	);
};

export default Features;
