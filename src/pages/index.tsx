import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { Box } from '@mui/material';

import styles from './index.module.css';

// home sections
import Banner from '@site/src/sections/home/banner';
import Features from '@site/src/sections/home/features';
import Testimonials from '@site/src/sections/home/testimonials';
import CallToAction from '@site/src/sections/home/cta';
import Insides from '@site/src/sections/home/insides';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description='Description will go into a meta tag in <head />'
		>
			{/* <Box> */}
				<Banner />
				<Features />
				<Insides />
				{/* <Testimonials /> */}
				<CallToAction />
			{/* </Box> */}
		</Layout>
	);
}
