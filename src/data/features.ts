// Define a type for the features
export type FeatureType = {
	title: string;
	content: string;
	open: boolean;
};

// Define the features array with the Feature type
export const features: FeatureType[] = [
	{
		title: 'Practical Knowledge & Framework Exploration',
		content:
			'This documentation goes beyond abstract theory, guiding you through hands-on exercises and experiments using prominent QML frameworks like Qiskit and PennyLane. Think of it as a personalized lab session where you learn by doing!',
		open: true
	},
	{
		title: 'Structured Roadmap & Community Driven',
		content:
			'Instead of overwhelming you with information, this guide provides a structured, step-by-step learning path. The modular approach lets you progress at your own pace, while the open-source nature encourages community contributions and continual improvement.',
		open: false
	}
];
