# Documentation

## What exactly is quantum machine learning?

What exactly is Quantum Machine Learning (QML)?
Imagine taking the power of your favorite AI/ML models – their ability to learn, adapt, and solve complex problems – and amplifying them a thousandfold. That's the essence of Quantum Machine Learning (QML).

But instead of relying on the traditional bits and bytes of classical computers, QML harnesses the bizarre and powerful laws of quantum mechanics. Think qubits instead of bits, superposition instead of binary states, and entanglement – a spooky connection between qubits that allows them to share information instantly, no matter the distance.

By leveraging these quantum superpowers, QML can tackle problems that would bring even the mightiest supercomputers to their knees. It can:

- **Unravel the mysteries of complex molecules**: Imagine designing new drugs or materials with unprecedented accuracy and speed.
- **Optimize financial markets**: Uncover hidden patterns and make predictions that would leave Wall Street quants gasping.
- **Crack unbreakable codes**: Develop next-generation cryptography that's immune to even the most sophisticated hacking attempts.

...and much more.

## What are we lagging behind in quantum computing?

You might think that even though you have read several blogs and news articles about the ongoing development of quantum computers by companies like Google and IBM, we haven't yet seen any real-world applications. Why is that?

The answer lies in two key areas: quantum hardware and software. On the hardware side, the main challenges are `quantum error correction` and `quantum noise`. These issues create instability in the qubits, which limits the computations they can perform effectively. As for software, the primary hurdles are `controlled entanglement` and `efficient quantum gates`. While we have theoretical solutions for these problems, creating practical implementations that work reliably on large-scale quantum computers remains a significant challenge.

## Notations and Representations
Let's begin from the very scratch. We will start by understanding the notations and conventions used in quantum computing. This will help us in understanding the rest of the concepts easily.

### 1. Bra-Ket Notation aka Dirac Notation
The most common notation used in quantum mechanics is the `bra-ket` notation, also known as the `Dirac` notation. You must know about this because because you will come across it when you read research papers involving quantum computing.

The notation uses angle brackets, `〈 〉`, and a vertical bar,` | `, to construct “bras” and “kets”. A “ket” looks like this: ` |v〉`. Mathematically it denotes a vector, v, in a complex vector space V. Physically, it represents the state of a quantum system.

A “bra” looks like this:`〈f| `. Mathematically, it denotes a linear function f: V → C, i.e. a linear map that maps each vector in V to a number in the complex plane C.

Letting a linear function〈f| act on a vector |v〉is written as: `〈f|v〉⍷  C`. This is called the inner product of the two vectors.


### 2. Vectors
Vector expressed as ket |v〉, `v` is represented as:

$$
v = \begin{bmatrix}
v_0 \\
v_1 \\
\vdots \\
v_n \\
\end{bmatrix} = |v\rangle 
\tag{1}
$$

Vector represented as bra 〈v|, `v` is represented as:

$$
\bar{v^T} = \begin{bmatrix}
\bar{v_0} & \bar{v_1} & \cdots & \bar{v_n}
\end{bmatrix} = \langle v|
\tag{2}
$$

In component form

$$
|v\rangle = \begin{bmatrix}
v_0 \\
v_1 \\
\vdots \\
v_n \\
\end{bmatrix} = v_0|0\rangle + v_1|1\rangle + \cdots + v_n|n\rangle
\tag{3}
$$

### 3. Inner Product aka Dot Product
The inner product of two vectors |u〉 and |v〉 is denoted as 〈u|v〉. It is a complex number and scalar. The inner product of two vectors is given by:

$$
\langle u|v\rangle = \bar{u^T}v =  \begin{bmatrix}
v_0 \\
v_1 \\
\vdots \\
v_n \\
\end{bmatrix}
\begin{bmatrix}
\bar{v_0} & \bar{v_1} & \cdots & \bar{v_n}
\end{bmatrix} = \bar{u_0}^*v_0 + \bar{u_1}^*v_1 + \cdots + \bar{u_n}^*v_n
\tag{4}
$$


### 4. Outer Product aka Tensor Product
The outer product of two vectors |u〉 and |v〉 is denoted as |u〉〈v|. It is a matrix. The outer product of two vectors is given by:

$$
|u\rangle\langle v| = \begin{bmatrix}
u_0 \\
u_1 \\
\vdots \\
u_n \\
\end{bmatrix}
\begin{bmatrix}
\bar{v_0} & \bar{v_1} & \cdots & \bar{v_n}
\end{bmatrix} = \begin{bmatrix}
u_0\bar{v_0} & u_0\bar{v_1} & \cdots & u_0\bar{v_n} \\
u_1\bar{v_0} & u_1\bar{v_1} & \cdots & u_1\bar{v_n} \\
\vdots & \vdots & \ddots & \vdots \\
u_n\bar{v_0} & u_n\bar{v_1} & \cdots & u_n\bar{v_n} \\
\end{bmatrix}
\tag{5}
$$

### 5. Cross Product
The cross product of two vectors |u〉 and |v〉 is denoted as |u×v〉. It is a vector. The cross product of two vectors is given by:

$$
|u\times v\rangle = \begin{bmatrix}
u_1v_2 - u_2v_1 \\
u_2v_0 - u_0v_2 \\
u_0v_1 - u_1v_0 \\
\end{bmatrix}
\tag{6}
$$

### 6. Pauli Matrices
The Pauli matrices are a set of three 2x2 complex matrices that are fundamental in quantum mechanics. They are denoted by $\sigma_x$, $\sigma_y$, and $\sigma_z$. They are given by:

$$
\sigma_x = \begin{bmatrix}
0 & 1 \\
1 & 0 \\
\end{bmatrix}
\tag{7}
$$

$$
\sigma_y = \begin{bmatrix}
0 & -i \\
i & 0 \\
\end{bmatrix}
\tag{8}
$$

$$
\sigma_z = \begin{bmatrix}
1 & 0 \\
0 & -1 \\
\end{bmatrix}
\tag{9}
$$

Pauli Matrix represents the spin of a particle in the x, y, and z directions. They are used in quantum computing to perform quantum gates.

PS: spin are defined as angular momentum of a particle. (we will study this in detail later)

### 7. Bell State
The Bell state is a maximally entangled state of two qubits. In layman terms it is a state in which the two qubits are in a superposition of 0 and 1. The four Bell states are:

$$
|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)
\tag{10}
$$

$$
|\Phi^-\rangle = \frac{1}{\sqrt{2}}(|00\rangle - |11\rangle)
\tag{11}
$$

$$
|\Psi^+\rangle = \frac{1}{\sqrt{2}}(|01\rangle + |10\rangle)
\tag{12}
$$

$$
|\Psi^-\rangle = \frac{1}{\sqrt{2}}(|01\rangle - |10\rangle)
\tag{13}
$$

PS: we will study about entanglement in detail later.

All the notations and representation end here!! Hang on tight, we are just getting started. Take your time to understand these notations and representations. They will be used throughout the course.


## Quantum Computing Concepts
Before exploring AI/ML algorithms in the context of quantum, it's important to distinguish between "quantum computers" and "quantum machine learning." While often used interchangeably, the latter is a subset of the former. Remember, quantum computing encompasses a vast field, and quantum machine learning represents just one specific area within it.

### 1. Qubit aka Quantum Bit (The Quantum Bits that Think Outside the Binary Box)
Forget the 0s and 1s you know from regular computers. In the strange world of quantum, information comes in a whole new flavor called qubits. Think of them as the essential building blocks of quantum machine learning (QML), the superpowered cousin of AI.

But what makes these qubits so special? Buckle up, because we're diving into the quantum weirdness:

**Beyond the Binary**: Unlike their classical counterparts, qubits aren't limited to just being 0 or 1. They can exist in a state called superposition (we will study this concept later), where they're both 0 and 1 at the same time! Imagine a light switch that's not just on or off, but somehow dimmed to both states simultaneously. That's the mind-bending power of superposition.

**Probabilities Play the Game**: While a regular bit gives you a definitive answer (0 or 1 only), a qubit's state is described by probabilities. Think of it like a spinning coin – the longer it spins, the closer it gets to landing on heads or tails, but until it stops, both possibilities exist with certain probabilities.

**Entangled and Unstoppable**: Qubits can also be entangled, a phenomenon where the state of one qubit instantly influences the state of another, no matter how far apart they are. It's like having a pair of magic coins that always land on the same side, no matter how far you separate them. Or think of it as a pair of best friends who always finish each other's sentences, no matter where they are.

### What are qubits made of?
Just like classical bits are made by turning on or off the electrical current, qubits are made by manipulating the state of subatomic particles (particles like electrons, photons, or ions). Generally Gold/Iron ions are used to create qubits. These particles have a property called "spin," which can be used to represent the 0 and 1 states of a qubit.



### 2. Quantum Superposition
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

#### Example
Consider we have a qubit \(\alpha\) which has a probability of 50% of being in state \(|0\rangle\) and 50% of being in state \(|1\rangle\) (it will only 0 and 1 as either of the possiblity and nothing else). This can be represented as:

$$
|\psi\rangle = \frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle
\tag{15}
\label{eq:15}
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

In equation \(\ref{eq:15}\) the *\( \frac{1}{\sqrt{2}} \)* represents the value of *\( \alpha \)* and *\( \beta \)*. The probability of the qubit being in state *\( |0\rangle \)* is *\( |\alpha|^2 = \frac{1}{2} \)* and the probability of the qubit being in state *\( |1\rangle \)* is *\( |\beta|^2 = \frac{1}{2} \)*. The sum of the probabilities is 1, which is a requirement for a qubit to be in a valid superposition state.


#### Limitations
Superposition is a powerful concept, but it has its limitations. The biggest limitation is that the superposition is very fragile. Any interaction with heat, light or any other form of energy which is not at ~0 kelvin temperature will cause the qubit to collapse into a definite state. Now you must be wondering that we cannot measure or observe the qubit when it expresses superposition, but that's not true. We can measure the qubit when it is in superposition, but the act of measuring will cause the qubit to collapse into a definite state. This is called the "collapse of the wave function" or "quantum decoherence". We will study about this in detail later.
