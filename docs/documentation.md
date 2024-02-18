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
$$

Vector represented as bra 〈v|, `v` is represented as:

$$
\bar{v^T} = \begin{bmatrix}
\bar{v_0} & \bar{v_1} & \cdots & \bar{v_n}
\end{bmatrix} = \langle v|
$$

In component form

$$
|v\rangle = \begin{bmatrix}
v_0 \\
v_1 \\
\vdots \\
v_n \\
\end{bmatrix} = v_0|0\rangle + v_1|1\rangle + \cdots + v_n|n\rangle
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
$$

### 5. Cross Product
The cross product of two vectors |u〉 and |v〉 is denoted as |u×v〉. It is a vector. The cross product of two vectors is given by:

$$
|u\times v\rangle = \begin{bmatrix}
u_1v_2 - u_2v_1 \\
u_2v_0 - u_0v_2 \\
u_0v_1 - u_1v_0 \\
\end{bmatrix}
$$

### 6. Pauli Matrices
The Pauli matrices are a set of three 2x2 complex matrices that are fundamental in quantum mechanics. They are denoted by $\sigma_x$, $\sigma_y$, and $\sigma_z$. They are given by:

$$
\sigma_x = \begin{bmatrix}
0 & 1 \\
1 & 0 \\
\end{bmatrix}
$$

$$
\sigma_y = \begin{bmatrix}
0 & -i \\
i & 0 \\
\end{bmatrix}
$$

$$
\sigma_z = \begin{bmatrix}
1 & 0 \\
0 & -1 \\
\end{bmatrix}
$$

Pauli Matrix represents the spin of a particle in the x, y, and z directions. They are used in quantum computing to perform quantum gates.

PS: spin are defined as angular momentum of a particle. (we will study this in detail later)

### 7. Bell State
The Bell state is a maximally entangled state of two qubits. In layman terms it is a state in which the two qubits are in a superposition of 0 and 1. The four Bell states are:

$$
|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)
$$

$$
|\Phi^-\rangle = \frac{1}{\sqrt{2}}(|00\rangle - |11\rangle)
$$

$$
|\Psi^+\rangle = \frac{1}{\sqrt{2}}(|01\rangle + |10\rangle)
$$

$$
|\Psi^-\rangle = \frac{1}{\sqrt{2}}(|01\rangle - |10\rangle)
$$

PS: we will study about entanglement in detail later.

All the notations and representation end here!! Hang on tight, we are just getting started. Take your time to understand these notations and representations. They will be used throughout the course.







