import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// home sections
import Banner from '@site/src/sections/home/banner';
import Features from '@site/src/sections/home/features';
import Testimonials from '@site/src/sections/home/testimonials';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description='Description will go into a meta tag in <head />'
		>
			{/* <HomepageHeader /> */}
			{/* <HomepageFeatures /> */}
			<Banner />
			<Features />
			<Testimonials />
		</Layout>
	);
}
