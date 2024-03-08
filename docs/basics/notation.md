---
sidebar_position: 1
sidebar_label: 1. Notations
---

# Notations
Let's begin from the very scratch. We will start by understanding the notations and conventions used in quantum computing. This will help us in understanding the rest of the concepts easily.

## 1. Bra-Ket Notation aka Dirac Notation
The most common notation used in quantum mechanics is the `bra-ket` notation, also known as the `Dirac` notation. You must know about this because because you will come across it when you read research papers involving quantum computing.

The notation uses angle brackets, `〈 〉`, and a vertical bar,` | `, to construct “bras” and “kets”. A “ket” looks like this: ` |v〉`. Mathematically it denotes a vector, v, in a complex vector space V. Physically, it represents the state of a quantum system.

A “bra” looks like this:`〈f| `. Mathematically, it denotes a linear function f: V → C, i.e. a linear map that maps each vector in V to a number in the complex plane C.

Letting a linear function〈f| act on a vector |v〉is written as: `〈f|v〉⍷  C`. This is called the inner product of the two vectors.


## 2. Vectors
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

## 3. Inner Product aka Dot Product
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


## 4. Outer Product aka Tensor Product
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

## 5. Cross Product
The cross product of two vectors |u〉 and |v〉 is denoted as |u×v〉. It is a vector. The cross product of two vectors is given by:

$$
|u\times v\rangle = \begin{bmatrix}
u_1v_2 - u_2v_1 \\
u_2v_0 - u_0v_2 \\
u_0v_1 - u_1v_0 \\
\end{bmatrix}
\tag{6}
$$

## 6. Pauli Matrices
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

PS: spin are defined as angular momentum of a particle. (we will study about pauli gates in detail later)

## 7. Bell State
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
