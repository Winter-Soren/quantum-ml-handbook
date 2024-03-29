---
sidebar_position: 3
sidebar_label: 3. Quantum Superposition
---

# Quantum Superposition

Remember flipping a coin? Heads or tails, a clear answer. Now imagine flipping a **quantum coin**, a **qubit**, that lands on **both heads and tails simultaneously**. That's the mind-bending concept of **quantum superposition**, the foundation of quantum machine learning (QML). Let's delve into the science and math behind this phenomenon, exciting any curious college student like yourself!

**The Bits and Beyond:** Classical computers rely on **bits**, the 0s and 1s that hold information. Qubits, their quantum counterparts, can be 0, 1, or in a **superposition** of both states. Think of it as a blurred picture where heads and tails coexist, encoded as **complex numbers (α and β)** representing their **probabilities**. The closer $ |\alpha|^2 + |\beta|^2 $ is to 1, the more certain the state is of being a specific combination of $ |0\rangle $ and $ |1\rangle $.

**Math Unveils the Magic:** Quantum mechanics describes superposition using the **ket vector** notation. A qubit in superposition is represented as:

$$
|\psi\rangle = \alpha|0\rangle + \beta|1\
\tag{1}
$$

where:

-   $ |0\rangle $ and $ |1\rangle $ are basis states representing 0 and 1 with probability 1.
-   $ \alpha $ and $ \beta $ are complex numbers defining the probabilities of each state and satisfying $ |\alpha|^2 + |\beta|^2 = 1 $.

Think of this equation as a recipe for the qubit's "blurriness," with $\alpha$ and $\beta$ determining the blend of 0 and 1.

**Unleashing the Power:** Superposition allows qubits to explore multiple possibilities simultaneously. Consider searching a maze:

-   **Classical bit:** Checks each path one by one, slow and methodical.
-   **Superposition:** Explores all paths at once, finding the solution much faster!

This "parallel processing" empowers QML to tackle complex problems beyond classical reach.

**Application Ignite the Imagination:**

-   **Drug Discovery:** Simulating complex molecules is time-consuming classically. Superposition allows QML to analyze diverse configurations simultaneously, accelerating drug development.
-   **AI for Everyone:** Quantum-powered AI algorithms could break barriers, solving problems like NP-hard and NP.

**Beyond the Basics:** Remember, measuring a qubit "collapses" its superposition, forcing it into a definite 0 or 1 state. Additionally, superposition is fragile and easily disrupted, requiring extremely cool environments (near 0 Kelvin temperatures) for quantum computers.

## Example

Consider we have a qubit $\alpha$ which has a probability of 50% of being in state $|0\rangle$ and 50% of being in state $|1\rangle$ (it will only 0 and 1 as either of the possiblity and nothing else). This can be represented as:

$$
|\psi\rangle = \frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle
\tag{2}
% \label{eq:15}
$$

This can be rewritten as:

$$
|\psi\rangle = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{1}{\sqrt{2}}\begin{bmatrix} 0 \\ 1 \end{bmatrix}
\tag{3}
$$

Expanding and simplifying this expression, we get:

$$
|\psi\rangle = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ 0 \end{bmatrix} + \begin{bmatrix} 0 \\ \frac{1}{\sqrt{2}} \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix}
\tag{4}
$$

In equation (3) the $ \frac{1}{\sqrt{2}} $ represents the value of $ \alpha $ and $ \beta $. The probability of the qubit being in state $ |0\rangle $ is $ |\alpha|^2 = \frac{1}{2} $ and the probability of the qubit being in state $ |1\rangle $ is $ |\beta|^2 = \frac{1}{2} $. The sum of the probabilities is 1, which is a requirement for a qubit to be in a valid superposition state.

## Limitations

Superposition is a powerful concept, but it has its limitations. The biggest limitation is that the superposition is very fragile. Any interaction with heat, light or any other form of energy which is not at ~0 kelvin temperature will cause the qubit to collapse into a definite state. Now you must be wondering that we cannot measure or observe the qubit when it expresses superposition, but that's not true. We can measure the qubit when it is in superposition, but the act of measuring will cause the qubit to collapse into a definite state. This is called the "collapse of the wave function" or "quantum decoherence". We will study about this in detail later.
