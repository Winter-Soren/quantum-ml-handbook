import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

// home sections
import Banner from '@site/src/sections/home/banner';
import Features from '@site/src/sections/home/features';
import Testimonials from '@site/src/sections/home/testimonials';
import CallToAction from '@site/src/sections/home/cta';
import Insides from '@site/src/sections/home/insides';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`Hello from ${siteConfig.title}`}>
			<Head>
				<meta
					name='author'
					content='Soham Bhoir'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='revisit-after'
					content='1 day'
				/>
				<meta
					name='language'
					content='English'
				/>
				<meta
					name='generator'
					content='VS Code'
				/>
				<meta
					name='distribution'
					content='global'
				/>
				<meta
					property='og:image'
					content='https://quantummlhandbook.vercel.app/logo3.png'
				/>
				<meta
					property='image'
					content='https://quantummlhandbook.vercel.app/logo3.png'
				/>
				<meta
					name='description'
					content={siteConfig.tagline}
				/>
				<meta
					name='keywords'
					content='quantum machine learning, quantum ml, quantum machine learning tutorial, handbook, soham bhoir, quantum machine learning handbook, machine learning, quantum algorithm, quantum gates, quantum circuit, quantum superposition, quantum entanglement'
				/>
				<meta
					name='twitter:title'
					content={siteConfig.title}
				/>
				<meta
					name='twitter:description'
					content={siteConfig.tagline}
				/>
				<meta
					name='twitter:image'
					content='https://quantummlhandbook.vercel.app/logo3.png'
				/>

				<link
					rel='canonical'
					href='https://quantummlhandbook.vercel.app/'
				/>

				<link
					rel='preconnect'
					href='https://quantummlhandbook.vercel.app/logo3.png'
				/>
				<script type='application/ld+json'>
					{JSON.stringify({
						'@context': 'Quantum Machine Learning',
						'@type': 'GitHub',
						name: 'Quantum Machine Learning Handbook',
						url: 'https://quantummlhandbook.vercel.app/',
						logo: 'https://quantummlhandbook.vercel.app/logo3.png'
					})}
				</script>
			</Head>
			<Banner />
			<Features />
			<Insides />
			<CallToAction />
		</Layout>
	);
}
