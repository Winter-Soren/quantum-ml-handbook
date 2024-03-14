export type InsidesType = {
	icon?: React.ReactNode | string;
	title: string;
	content: string;
};

export const insides: InsidesType[] = [
	{
		icon: '/img/concept.png',
		title: 'Foundational QML Concepts',
		content:
			"Master the essentials, from qubits and superposition to quantum gates and circuits, all explained with the familiar lens of AI/ML concepts. It's like learning a new language with a bilingual dictionary readily available!"
	},
	{
		icon: '/img/master.png',
		title: 'Hands-on Framework Mastery',
		content:
			'Get comfortable with leading QML frameworks like Qiskit and PennyLane, learning to build, train, and evaluate your own quantum models. Think of it as building your own powerful tools within your AI/ML toolkit!'
	}
];
