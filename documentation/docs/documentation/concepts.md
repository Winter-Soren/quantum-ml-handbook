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

### Types of Entanglement
Now that you've grasped the essence of Bell states, let's take a deeper dive into the diverse world of entanglement! We'll explore three prominent types: Bell State (Vanilla), GHZ, and W states, unveiling their unique properties and applications.

#### 1. Bell States
- **Nature**: Simplest form of entanglement, like the "Hello World" of quantum. It shows non-local correlations between two qubits. Non-local means that the qubits are connected regardless of distance.
- **Number of qubits involved**: 2
- **Key features**:
    - Easy to create and manipulate. (here manipulation refers to the operations that can be performed on the qubits)
    - Forms the foundation for more complex entangled states.
    - Building blocks for quantum teleportation and superdense coding.
- **Example**: \(\Phi^+\), \(\Phi^-\), \(\Psi^+\), \(\Psi^-\)
- **Analogy**: Imagine two coins, each with a special property: when flipped simultaneously, they always land heads-heads or tails-tails (\(\Phi^+\)) or opposite (\(\Phi^-\)), or one heads and one tails but their combination is random (\(\Psi^{+,-}\)). This defies classical expectations where coin flips are independent.



#### 2. GHZ States
GHZ stands for Greenberger-Horne-Zeilinger, the physicists who first proposed this complex form of entanglement.

- **Nature**:  Multi-qubit entanglement offering stronger correlations and unique properties like "all or nothing" behavior. The "all of nothing" behavior refers to the fact that if one qubit is measured, the state of all the qubits can be determined. 
- **Number of qubits involved**: 3 or more
- **Key features**:
    - Exhibits non-local correlations among multiple qubits.
    - Enables quantum error correction and fault-tolerant quantum computing.
    - Foundation for quantum secret sharing and secure multi-party computation.
    - Robust against local noise. (here refers to the noise that affects the qubits locally and not globally)
- **Example**: 

$$
|\text{GHZ+}\rangle = \frac{1}{\sqrt{2}}(|000\rangle + |111\rangle)
\tag{23}
$$

$$
|\text{GHZ-}\rangle = \frac{1}{\sqrt{2}}(|000\rangle - |111\rangle)
\tag{24}
$$

Here, GHZ+ and GHZ- are the two types of GHZ states. The GHZ+ state is a superposition of all qubits being in state 0 and all qubits being in state 1. The GHZ- state is a superposition of all qubits being in state 0 and all qubits being in state 1, but with a negative sign.

- **Analogy**: Think of three friends making a pact. They each write down a random "0" or "1" without communicating. When they reveal their choices, all three have the same answer (GHZ+) or all different (GHZ-). It's like they mysteriously coordinated their choices, even without any signal.

#### 3. W States
W stands for William Wootters, the physicist who first proposed this complex form of entanglement.
- **Nature**:  Multi-qubit entanglement with a unique pattern of correlations, distinct from GHZ states. It's like a quantum dance where all the qubits are entangled in a different complex pattern. The pattern can be different for different number of qubits.
- **Number of qubits involved**: 3
- **Key features**:
    - Resilient to errors in one qubit, preserving information in the remaining two.
    - Crucial for building reliable quantum computation architectures.
    - Used in protocols like teleportation and error correction.

- **Example**:

$$
|\text{W}\rangle = \frac{1}{\sqrt{3}}(|001\rangle + |010\rangle + |100\rangle)
\tag{25}
$$

Here, 001, 010 and 100 are the different combinations of the qubits being in state 0 and 1. And the W state is a superposition of these combinations. We write \(\sqrt{3}\) because the there are 3 terms in the superposition.

- **Analogy**: Imagine three friends sharing a secret message encoded in three coins. If one friend loses their coin, the remaining two can still reconstruct the message due to the special way they were prepared (entangled). This unique property allows for error correction in quantum systems.

### Examples ignite the imagination
Entanglement is not just a theoretical concept. It has real-world applications that can revolutionize technology and science. Here are a few examples to ignite your imagination:

1. **Quantum Teleportation**: Entanglement enables the transfer of quantum states between qubits, even if they're far apart. This could revolutionize secure communication and quantum computing.

2. **Quantum Cryptography**: Entanglement allows for secure communication channels that are immune to eavesdropping. This could transform data security and privacy.

3. **Quantum Error Correction**: Entanglement can protect quantum information from errors and noise, a crucial requirement for building reliable quantum computers.

### Limitations
All the above application will be reality only when we have a large number of qubits and we can maintain the entanglement for a longer period of time. As of now, we are able to maintain the entanglement for a very short period of time and with a very small number of qubits. This is one of the biggest challenges in the field of quantum computing. 

Let's dive a little deeper into understanding why maintaining and controlling entanglement is so difficult. To better understand it, let's use an analogy.

Imagine building a castle out of smoke. Entanglement, the spooky connection that fuels quantum computing, holds immense promise, but like a smoke castle, it's incredibly fragile. Maintaining its delicate state is like holding your breath – any external noise, a bump, even the act of observing it, can cause the entire structure to crumble. This fragility is the first hurdle.

Scaling up the castle is even harder. Imagine adding more smoke rings, intricately interlinking them. The more qubits you entangle, the exponentially harder it becomes to keep them connected and error-free. This "scalability bottleneck" is a major challenge for building large-scale quantum computers.

Beyond the technical aspects, practical limitations loom. Imagine trying to integrate your smoke castle into a brick-and-mortar world.

