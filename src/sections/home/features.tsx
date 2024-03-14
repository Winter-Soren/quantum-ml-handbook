import React from 'react';
import {
	Box,
	Typography,
	Grid,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	useTheme,
	useMediaQuery
} from '@mui/material';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FcOk } from 'react-icons/fc';
import { features, FeatureType } from '@site/src/data/features';

type Props = {};

const Features = (props: Props) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));
	const [expanded, setExpanded] = React.useState<number | false>(false);

	const handleExpansion = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box
			sx={{
				padding: '0 10%',
				mt: 10
			}}
		>
			<Grid container>
				<Grid
					item
					xs={12}
					md={6}
					sm={12}
				>
					<Typography
						variant='h1'
						sx={{
							fontFamily: 'Inter',
							fontSize: isMobile ? 21 : isTablet ? 30 : 36,
							fontWeight: 500,
							color: theme.palette.text.primary,
							mr: isMobile ? 0 : isTablet ? 0 : 5
						}}
						align={isMobile ? 'center' : isTablet ? 'center' : 'left'}
					>
						Why is this your ultimate Quantum ML companion?
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sm={12}
					sx={{
						mt: isMobile ? 2 : isTablet ? 4 : 0
					}}
				>
					{features.map((feature: FeatureType, index: number) => (
						<Accordion
							key={index}
							expanded={expanded === index}
							onChange={handleExpansion(index)}
							sx={{
								backgroundColor: theme.palette.background.paper,
								boxShadow: 'none',
								'& .MuiAccordionSummary-root': {
									color: '#fff' // White text color
								}
							}}
						>
							<AccordionSummary expandIcon={<MdKeyboardArrowDown />}>
								<Typography
									variant='h4'
									sx={{
										fontFamily: 'Inter',
										fontSize: isMobile ? 12 : isTablet ? 15 : 15,
										fontWeight: 400,
										color: theme.palette.text.primary,
										display: 'flex',
										alignItems: 'center'
									}}
								>
									<FcOk
										style={{
											marginRight: '8px',
											// width: isMobile ? '3em' : isTablet ? '3em' : 0,
											height: isMobile ? '1.2em' : isTablet ? '1.2em' : '1.2rem'
										}}
									/>
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
