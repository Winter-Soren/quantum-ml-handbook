---
sidebar_position: 4
sidebar_label: 4. Quantum Entanglement
---

# Quantum Entanglement

Buckle up, because now we're diving into entanglement, where things get even weirder and more wonderful. This spooky phenomenon, where qubits become mysteriously linked no matter the distance, is another cornerstone of quantum machine learning (QML). Let's unravel the magic behind this quantum entanglement, a concept that even Einstein called "spooky action at a distance."

**Imagine this**: You and your best friend are each holding a spinning coin. Normally, each coin can be heads or tails independently. But with entanglement, it's like your coins are magically connected. Even if you're miles apart, when you measure one coin, you instantly know the state of the other, regardless of distance! It's as if they share a single fate, defying classical logic.

Here, the state of a single coin is head or tail, but the state of the entangled pair is uncertain until you measure one.

**The Math Behind the Magic**: While entanglement seems like a magical connection, it's rooted in the math of quantum mechanics. We can represent entangled qubit using **joint key vector**, like a fancy equation that captures their connectedness. Imagine two qubits, A and B, being entangled:

$$
|\psi AB\rangle = \alpha|00\rangle + \beta|11\rangle
\tag{1}
$$

Here, $ |00\rangle $ and $ |11\rangle $ are basis states representing the qubits being in state 0 and 1, respectively. The complex numbers $ \alpha $ and $ \beta $ define the probabilities of each state and satisfy $ |\alpha|^2 + |\beta|^2 = 1 $. The qubits are entangled when they're in this joint state, and measuring one instantly determines the state of the other, no matter the distance.

Before diving more deeper into different types of entanglement, let's first understand the concept of "Bell State".

## Bell State

This is a special type of entangled state of two qubits. This is vanilla of entanglement. In reality, there are many qubits which are entangled in a more complex way, but Bell state is the simplest form of entanglement. It's like the "Hello World" of entanglement.

**The Mathematical Melody**: Each Bell state is represented by a mathematical equation, like a unique musical note in the quantum score. There are four main Bell states:

1. **$ |\Phi^+\rangle $**: This state is a superposition of both qubits being in state 0 and 1. It's like a quantum coin that's both heads and tails at the same time. The equation for this state is:

$$
|\Phi^+\rangle = \frac{1}{\sqrt{2}}|00\rangle + \frac{1}{\sqrt{2}}|11\rangle
\tag{2}
$$

2. **$ |\Phi^-\rangle $**: This state is a superposition of both qubits being in state 0 and 1, but with a negative sign. It's like a quantum coin that's both heads and tails at the same time, but with a twist. The equation for this state is:

$$
|\Phi^-\rangle = \frac{1}{\sqrt{2}}|00\rangle - \frac{1}{\sqrt{2}}|11\rangle
\tag{3}
$$

3. **$ |\Psi^+\rangle $**: This state is a superposition of one qubit being in state 0 and the other being in state 1. It's like a quantum coin that's either heads or tails, but you don't know which. The equation for this state is:

$$
|\Psi^+\rangle = \frac{1}{\sqrt{2}}|01\rangle + \frac{1}{\sqrt{2}}|10\rangle
\tag{4}
$$

4. **$ |\Psi^-\rangle $**: This state is a superposition of one qubit being in state 0 and the other being in state 1, but with a negative sign. It's like a quantum coin that's either heads or tails, but with a twist. The equation for this state is:

$$
|\Psi^-\rangle = \frac{1}{\sqrt{2}}|01\rangle - \frac{1}{\sqrt{2}}|10\rangle
\tag{5}
$$

These Bell states are the foundation of quantum entanglement, and they're the building blocks for more complex entangled states. They're like the "saa-ree-ga" (or "do-re-mi") of the quantum world, setting the stage for the entangled symphony. In simple, you can imagine as two dancers, always moving in harmony, no matter how far apart they are.

## Types of Entanglement

Now that you've grasped the essence of Bell states, let's take a deeper dive into the diverse world of entanglement! We'll explore three prominent types: Bell State (Vanilla), GHZ, and W states, unveiling their unique properties and applications.

### 1. Bell States

-   **Nature**: Simplest form of entanglement, like the "Hello World" of quantum. It shows non-local correlations between two qubits. Non-local means that the qubits are connected regardless of distance.
-   **Number of qubits involved**: 2
-   **Key features**:
    -   Easy to create and manipulate. (here manipulation refers to the operations that can be performed on the qubits)
    -   Forms the foundation for more complex entangled states.
    -   Building blocks for quantum teleportation and superdense coding.
-   **Example**: $\Phi^+$, $\Phi^-$, $\Psi^+$, $\Psi^-$
-   **Analogy**: Imagine two coins, each with a special property: when flipped simultaneously, they always land heads-heads or tails-tails ($\Phi^+$) or opposite ($\Phi^-$), or one heads and one tails but their combination is random ($\Psi^{+,-}$). This defies classical expectations where coin flips are independent.

### 2. GHZ States

GHZ stands for Greenberger-Horne-Zeilinger, the physicists who first proposed this complex form of entanglement.

-   **Nature**: Multi-qubit entanglement offering stronger correlations and unique properties like "all or nothing" behavior. The "all of nothing" behavior refers to the fact that if one qubit is measured, the state of all the qubits can be determined.
-   **Number of qubits involved**: 3 or more
-   **Key features**:
    -   Exhibits non-local correlations among multiple qubits.
    -   Enables quantum error correction and fault-tolerant quantum computing.
    -   Foundation for quantum secret sharing and secure multi-party computation.
    -   Robust against local noise. (here refers to the noise that affects the qubits locally and not globally)
-   **Example**:

$$
|\text{GHZ+}\rangle = \frac{1}{\sqrt{2}}(|000\rangle + |111\rangle)
\tag{6}
$$

$$
|\text{GHZ-}\rangle = \frac{1}{\sqrt{2}}(|000\rangle - |111\rangle)
\tag{7}
$$

Here, GHZ+ and GHZ- are the two types of GHZ states. The GHZ+ state is a superposition of all qubits being in state 0 and all qubits being in state 1. The GHZ- state is a superposition of all qubits being in state 0 and all qubits being in state 1, but with a negative sign.

-   **Analogy**: Think of three friends making a pact. They each write down a random "0" or "1" without communicating. When they reveal their choices, all three have the same answer (GHZ+) or all different (GHZ-). It's like they mysteriously coordinated their choices, even without any signal.

### 3. W States

W stands for William Wootters, the physicist who first proposed this complex form of entanglement.

-   **Nature**: Multi-qubit entanglement with a unique pattern of correlations, distinct from GHZ states. It's like a quantum dance where all the qubits are entangled in a different complex pattern. The pattern can be different for different number of qubits.

-   **Number of qubits involved**: 3

-   **Key features**:

    -   Resilient to errors in one qubit, preserving information in the remaining two.
    -   Crucial for building reliable quantum computation architectures.
    -   Used in protocols like teleportation and error correction.

-   **Example**:

$$
|\text{W}\rangle = \frac{1}{\sqrt{3}}(|001\rangle + |010\rangle + |100\rangle)
\tag{8}
$$

Here, 001, 010 and 100 are the different combinations of the qubits being in state 0 and 1. And the W state is a superposition of these combinations. We write $\sqrt{3}$ because the there are 3 terms in the superposition.

-   **Analogy**: Imagine three friends sharing a secret message encoded in three coins. If one friend loses their coin, the remaining two can still reconstruct the message due to the special way they were prepared (entangled). This unique property allows for error correction in quantum systems.

## Examples ignite the imagination

Entanglement is not just a theoretical concept. It has real-world applications that can revolutionize technology and science. Here are a few examples to ignite your imagination:

1. **Quantum Teleportation**: Entanglement enables the transfer of quantum states between qubits, even if they're far apart. This could revolutionize secure communication and quantum computing.

2. **Quantum Cryptography**: Entanglement allows for secure communication channels that are immune to eavesdropping. This could transform data security and privacy.

3. **Quantum Error Correction**: Entanglement can protect quantum information from errors and noise, a crucial requirement for building reliable quantum computers.

## Limitations

All the above application will be reality only when we have a large number of qubits and we can maintain the entanglement for a longer period of time. As of now, we are able to maintain the entanglement for a very short period of time and with a very small number of qubits. This is one of the biggest challenges in the field of quantum computing.

Let's dive a little deeper into understanding why maintaining and controlling entanglement is so difficult. To better understand it, let's use an analogy.

Imagine building a castle out of smoke. Entanglement, the spooky connection that fuels quantum computing, holds immense promise, but like a smoke castle, it's incredibly fragile. Maintaining its delicate state is like holding your breath – any external noise, a bump, even the act of observing it, can cause the entire structure to crumble. This fragility is the first hurdle.

Scaling up the castle is even harder. Imagine adding more smoke rings, intricately interlinking them. The more qubits you entangle, the exponentially harder it becomes to keep them connected and error-free. This "scalability bottleneck" is a major challenge for building large-scale quantum computers.

Beyond the technical aspects, practical limitations loom. Imagine trying to integrate your smoke castle into a brick-and-mortar world.
