# Quantum Computing Concepts
Before exploring AI/ML algorithms in the context of quantum, it's important to distinguish between "quantum computers" and "quantum machine learning." While often used interchangeably, the latter is a subset of the former. Remember, quantum computing encompasses a vast field, and quantum machine learning represents just one specific area within it.

## 1. Qubit aka Quantum Bit (The Quantum Bits that Think Outside the Binary Box)
Forget the 0s and 1s you know from regular computers. In the strange world of quantum, information comes in a whole new flavor called qubits. Think of them as the essential building blocks of quantum machine learning (QML), the superpowered cousin of AI.

But what makes these qubits so special? Buckle up, because we're diving into the quantum weirdness:

**Beyond the Binary**: Unlike their classical counterparts, qubits aren't limited to just being 0 or 1. They can exist in a state called superposition (we will study this concept later), where they're both 0 and 1 at the same time! Imagine a light switch that's not just on or off, but somehow dimmed to both states simultaneously. That's the mind-bending power of superposition.

**Probabilities Play the Game**: While a regular bit gives you a definitive answer (0 or 1 only), a qubit's state is described by probabilities. Think of it like a spinning coin – the longer it spins, the closer it gets to landing on heads or tails, but until it stops, both possibilities exist with certain probabilities.

**Entangled and Unstoppable**: Qubits can also be entangled, a phenomenon where the state of one qubit instantly influences the state of another, no matter how far apart they are. It's like having a pair of magic coins that always land on the same side, no matter how far you separate them. Or think of it as a pair of best friends who always finish each other's sentences, no matter where they are.

### What are qubits made of?
Just like classical bits are made by turning on or off the electrical current, qubits are made by manipulating the state of subatomic particles (particles like electrons, photons, or ions). Generally Gold/Iron ions are used to create qubits. These particles have a property called "spin," which can be used to represent the 0 and 1 states of a qubit.



## 2. Quantum Superposition
Remember flipping a coin? Heads or tails, a clear answer. Now imagine flipping a **quantum coin**, a **qubit**, that lands on **both heads and tails simultaneously**. That's the mind-bending concept of **quantum superposition**, the foundation of quantum machine learning (QML). Let's delve into the science and math behind this phenomenon, exciting any curious college student like yourself!

**The Bits and Beyond:** Classical computers rely on **bits**, the 0s and 1s that hold information. Qubits, their quantum counterparts, can be 0, 1, or in a **superposition** of both states. Think of it as a blurred picture where heads and tails coexist, encoded as **complex numbers (α and β)** representing their **probabilities**. The closer \( |\alpha|^2 + |\beta|^2 \) is to 1, the more certain the state is of being a specific combination of \( |0\rangle \) and \( |1\rangle \).


**Math Unveils the Magic:** Quantum mechanics describes superposition using the **ket vector** notation. A qubit in superposition is represented as:
$$
|\psi\rangle = \alpha|0\rangle + \beta|1\
\tag{14}
$$

where:

* \( |0\rangle \) and \( |1\rangle \) are basis states representing 0 and 1 with probability 1.
* \( \alpha \) and \( \beta \) are complex numbers defining the probabilities of each state and satisfying \( |\alpha|^2 + |\beta|^2 = 1 \).


Think of this equation as a recipe for the qubit's "blurriness," with \(\alpha\) and \(\beta\) determining the blend of 0 and 1.

**Unleashing the Power:** Superposition allows qubits to explore multiple possibilities simultaneously. Consider searching a maze:

* **Classical bit:** Checks each path one by one, slow and methodical.
* **Superposition:** Explores all paths at once, finding the solution much faster!

This "parallel processing" empowers QML to tackle complex problems beyond classical reach.

**Examples Ignite the Imagination:**

* **Drug Discovery:** Simulating complex molecules is time-consuming classically. Superposition allows QML to analyze diverse configurations simultaneously, accelerating drug development.
* **AI for Everyone:** Quantum-powered AI algorithms could break barriers, solving problems like NP-hard and NP.

**Beyond the Basics:** Remember, measuring a qubit "collapses" its superposition, forcing it into a definite 0 or 1 state. Additionally, superposition is fragile and easily disrupted, requiring extremely cool environments (near 0 kelvin temperatures ) for quantum computers.

### Example
Consider we have a qubit \(\alpha\) which has a probability of 50% of being in state \(|0\rangle\) and 50% of being in state \(|1\rangle\) (it will only 0 and 1 as either of the possiblity and nothing else). This can be represented as:

$$
|\psi\rangle = \frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle
\tag{15}
% \label{eq:15}
$$

This can be rewritten as:

$$
|\psi\rangle = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{1}{\sqrt{2}}\begin{bmatrix} 0 \\ 1 \end{bmatrix}
\tag{16}
$$

Expanding and simplifying this expression, we get:

$$
|\psi\rangle = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ 0 \end{bmatrix} + \begin{bmatrix} 0 \\ \frac{1}{\sqrt{2}} \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix}
\tag{17}
$$

In equation (15) the *\( \frac{1}{\sqrt{2}} \)* represents the value of *\( \alpha \)* and *\( \beta \)*. The probability of the qubit being in state *\( |0\rangle \)* is *\( |\alpha|^2 = \frac{1}{2} \)* and the probability of the qubit being in state *\( |1\rangle \)* is *\( |\beta|^2 = \frac{1}{2} \)*. The sum of the probabilities is 1, which is a requirement for a qubit to be in a valid superposition state.


### Limitations
Superposition is a powerful concept, but it has its limitations. The biggest limitation is that the superposition is very fragile. Any interaction with heat, light or any other form of energy which is not at ~0 kelvin temperature will cause the qubit to collapse into a definite state. Now you must be wondering that we cannot measure or observe the qubit when it expresses superposition, but that's not true. We can measure the qubit when it is in superposition, but the act of measuring will cause the qubit to collapse into a definite state. This is called the "collapse of the wave function" or "quantum decoherence". We will study about this in detail later.

## 3. Quantum Entanglement

Buckle up, because now we're diving into entanglement, where things get even weirder and more wonderful. This spooky phenomenon, where qubits become mysteriously linked no matter the distance, is another cornerstone of quantum machine learning (QML). Let's unravel the magic behind this quantum entanglement, a concept that even Einstein called "spooky action at a distance."

**Imagine this**: You and your best friend are each holding a spinning coin. Normally, each coin can be heads or tails independently. But with entanglement, it's like your coins are magically connected. Even if you're miles apart, when you measure one coin, you instantly know the state of the other, regardless of distance! It's as if they share a single fate, defying classical logic.

Here, the state of a single coin is head or tail, but the state of the entangled pair is uncertain until you measure one. 

**The Math Behind the Magic**: While entanglement seems like a magical connection, it's rooted in the math of quantum mechanics. We can represent entangled qubit using **joint key vector**, like a fancy equation that captures their connectedness. Imagine two qubits, A and B, being entangled:

$$
|\psi AB\rangle = \alpha|00\rangle + \beta|11\rangle
\tag{18}
$$


Here, \( |00\rangle \) and \( |11\rangle \) are basis states representing the qubits being in state 0 and 1, respectively. The complex numbers \( \alpha \) and \( \beta \) define the probabilities of each state and satisfy \( |\alpha|^2 + |\beta|^2 = 1 \). The qubits are entangled when they're in this joint state, and measuring one instantly determines the state of the other, no matter the distance.

Before diving more deeper into different types of entanglement, let's first understand the concept of "Bell State".

### Bell State
This is a special type of entangled state of two qubits. This is vanilla of entanglement. In reality, there are many qubits which are entangled in a more complex way, but Bell state is the simplest form of entanglement. It's like the "Hello World" of entanglement. 

**The Mathematical Melody**: Each Bell state is represented by a mathematical equation, like a unique musical note in the quantum score. There are four main Bell states:

1. **\( |\Phi^+\rangle \)**: This state is a superposition of both qubits being in state 0 and 1. It's like a quantum coin that's both heads and tails at the same time. The equation for this state is:

$$
|\Phi^+\rangle = \frac{1}{\sqrt{2}}|00\rangle + \frac{1}{\sqrt{2}}|11\rangle
\tag{19}
$$

2. **\( |\Phi^-\rangle \)**: This state is a superposition of both qubits being in state 0 and 1, but with a negative sign. It's like a quantum coin that's both heads and tails at the same time, but with a twist. The equation for this state is:

$$
|\Phi^-\rangle = \frac{1}{\sqrt{2}}|00\rangle - \frac{1}{\sqrt{2}}|11\rangle
\tag{20}
$$

3. **\( |\Psi^+\rangle \)**: This state is a superposition of one qubit being in state 0 and the other being in state 1. It's like a quantum coin that's either heads or tails, but you don't know which. The equation for this state is:

$$
|\Psi^+\rangle = \frac{1}{\sqrt{2}}|01\rangle + \frac{1}{\sqrt{2}}|10\rangle
\tag{21}
$$

4. **\( |\Psi^-\rangle \)**: This state is a superposition of one qubit being in state 0 and the other being in state 1, but with a negative sign. It's like a quantum coin that's either heads or tails, but with a twist. The equation for this state is:

$$
|\Psi^-\rangle = \frac{1}{\sqrt{2}}|01\rangle - \frac{1}{\sqrt{2}}|10\rangle
\tag{22}
$$

These Bell states are the foundation of quantum entanglement, and they're the building blocks for more complex entangled states. They're like the "saa-ree-ga" (or "do-re-mi") of the quantum world, setting the stage for the entangled symphony. In simple, you can imagine as two dancers, always moving in harmony, no matter how far apart they are.

<!-- ### Types of Entanglement
Entanglement is not just limited to Bell states. There are many different types of entanglement. Some of the most common types of entanglement are: -->

<!-- 1. **Bell State Entanglement**: This is the simplest form of entanglement. It's like the "Hello World" of entanglement. In reality, there are many qubits which are entangled in a more complex way, but Bell state is the simplest form of entanglement. It's like the "Hello World" of entanglement.

2. **GHZ State Entanglement**: This is a more complex form of entanglement. It involves three or more qubits, and it's like a quantum dance where all the qubits are entangled in a complex pattern. It's named after the physicists who first proposed it, Greenberger, Horne, and Zeilinger.

3. **W State Entanglement**: This is another complex form of entanglement. It involves three or more qubits, and it's like a quantum dance where all the qubits are entangled in a different complex pattern. It's named after the physicist who first proposed it, William Wootters. -->


