---
sidebar_position: 4
sidebar_label: 4. Phase Gate
---

# Phase Gate

## Definition
The phase gate is a single-qubit gate used to change the phase of the qubit. Also known as the $R_\phi$ gate, it alters the phase of the qubit along the $Z$ axis of the Bloch sphere, performing a phase-flip operation. It is one of the most commonly used gates in quantum computing after the Pauli gates and the Hadamard gate.

## Effect on qubit
The phase gate changes the phase of the qubit from $+1$ to $-1$ and vice versa.

PS: You might be thinking that this operation is performed by the Pauli-Z gate as well. Indeed, both gates perform the same operation, but the Phase gate is a generalization of the Pauli-Z gate. The distinction lies in the phase change introduced: Pauli-Z gate introduces a phase change of $\pi$ ($180$ degrees) to the $|1\rangle$ state, while the Phase gate introduces a phase change of $\pi/2$ ($90$ degrees) to the $|1\rangle$ state.

## Types
The phase gate has only one type.

## Matrix representation
The matrix representation of the phase gate is:
    * `Phase gate`: $\begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/2} \end{bmatrix}$

## Circuit representation
The phase gate is represented as `───Rz───` in the circuit.

## Example
Let's demonstrate the phase gate with an example.

*   Phase Gate (Rz)
Suppose we have a qubit initially in the state $|0\rangle$, represented as:

$$
|q_0\rangle = |0\rangle
\tag{14}
$$

The phase gate is represented by the following matrix:

$$
Rz = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/2} \end{bmatrix}
\tag{15}
$$

To apply the phase gate to the qubit $|q_0\rangle = |0\rangle$, we perform a matrix multiplication of the phase gate matrix with the state vector representing $|0\rangle$.

$$
Rz|q_0\rangle = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/2} \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{16}
$$

Performing the matrix multiplication:

$$
Rz|q_0\rangle = \begin{bmatrix} 1*1 + 0*0 \\ 0*1 + e^{i\pi/2}*0 \end{bmatrix}
\tag{17}
$$

Simplifying:

$$
Rz|q_0\rangle = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{18}
$$

Therefore, after applying the phase gate, the state of the qubit $|q_0\rangle$ remains unchanged, indicating that the phase gate only changes the phase of the qubit.

Let's take the phase of the qubit to be $\phi = \pi/2$. Then, the matrix representation of the phase gate is:

$$
Rz = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/2} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}
\tag{19}
$$

After applying the phase gate, the state of the qubit $|q_0\rangle$ transforms to:

$$
|q_1\rangle = Rz|q_0\rangle = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1*1 + 0*0 \\ 0*1 + i*0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{20}
$$

The ket representation of the final state is:

$$
|q_1\rangle = \begin{bmatrix} 1 \\ 0 \end{bmatrix} = |0\rangle
\tag{21}
$$

The circuit representation of this operation is as follows:

Initial state: $|0\rangle$

   ───Rz───

Final state: $|0\rangle$

## Properties
The properties of the phase gate are:
    * The phase gate is Hermitian, i.e., the conjugate transpose of the gate is equal to the gate itself (i.e., $Rz^\dagger = Rz$).
    * The phase gate is involutory, i.e., applying the gate twice results in the identity gate.
    * The phase gate is a unitary gate, i.e., the inverse of the gate is equal to the conjugate transpose of the gate (i.e., $Rz^{-1} = Rz^\dagger$).

## Conjugate Transpose
The conjugate transpose of the phase gate is:
    * `Phase gate`: $\begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/2} \end{bmatrix}$

## Inverse
The inverse of the phase gate is:
    * `Phase gate`: $\begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/2} \end{bmatrix}$

## Dagger
The dagger of the phase gate is:
    * `Phase gate`: $Rz^\dagger = Rz$
