import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
	title: 'QML Docs',
	tagline: 'Dinosaurs are cool',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://qml-documentation.vercel.app',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Winter-Soren', // Usually your GitHub org/user name.
	projectName: 'QML-Documentation', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					path: 'docs',
					remarkPlugins: [remarkMath],
					rehypePlugins: [rehypeKatex]
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
				},
				theme: {
					customCss: './src/css/custom.css'
				}
				// sitemap: {
				// 	changefreq: EnumChangefreq.WEEKLY,
				// 	priority: 0.5,
				// 	ignorePatterns: ['/tags/**'],
				// 	filename: 'sitemap.xml'
				// }
			} satisfies Preset.Options
		]
	],

	stylesheets: [
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
			type: 'text/css',
			integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
			crossorigin: 'anonymous'
		}
	],
	
	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'QML Docs',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg'
			},
			items: [
				{ to: '/about', label: 'About', position: 'left' },
				{ to: '/docs/get-started', label: 'Get Started', position: 'left' },
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Docs'
				},
				{ to: '/references', label: 'References', position: 'left' },
				{
					href: 'https://github.com/Winter-Soren/qml-documentation/',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/basics'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus'
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus'
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'Basics',
							to: '/docs/basics'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} QML Docs, Inc. Built with Docusaurus.`
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula
		}
	} satisfies Preset.ThemeConfig
};

export default config;
