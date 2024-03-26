---
sidebar_position: 3
sidebar_label: 3. Hadamard Gate
---

# Hadamard Gate

## Definition

The Hadamard gate is a single qubit gate that is used to create superposition. The Hadamard gate is named after the mathematician Jacques Hadamard. The Hadamard gate is used to change the state of the qubit in terms of the $X$ and $Z$ axes of the Bloch sphere. The Hadamard gate is used to perform the bit-flip and phase-flip operations. The Hadamard gate is the most commonly used gate in quantum computing after the Pauli gates.

## Effect on qubit

The Hadamard gate changes the state of the qubit from $|0\rangle$ to $\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ and vice versa. The Hadamard gate changes the phase of the qubit from $+1$ to $-1$ and vice versa.

PS: you must be thinking that the operations performed by the Hadamard gate are similar to the Pauli gates. Well, you are right! The Hadamard gate is a combination of the Pauli-X and Pauli-Z gates. The Hadamard gate is the most versatile gate in quantum computing, as it can be used to create superposition, entanglement, and perform phase-flip and bit-flip operations.

## Property

Psst... only hadamard has it!!

When a qubit is in the state |0⟩, it means that it is definitely in the state |0⟩ with probability amplitude 1 and in the state |1⟩ with probability amplitude 0.

This means that Hadamard gate transforms this |0⟩ state into an equal superposition of |0⟩ and |1⟩. This means that after applying the Hadamard gate to the |0⟩ state, the qubit is in a state where it has a 50% chance of being measured as |0⟩ and a 50% chance of being measured as |1⟩. Mathematically, this transformation can be represented as:

$ H|0\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle) $

Similarly, when a qubit is in the state |1⟩, it is definitely in the state |1⟩ with probability amplitude 1 and in the state |0⟩ with probability amplitude 0.

The Hadamard gate also transforms this |1⟩ state into an equal superposition of |0⟩ and |1⟩. So, after applying the Hadamard gate to the |1⟩ state, the qubit is in a state where it has a 50% chance of being measured as |0⟩ and a 50% chance of being measured as |1⟩. This transformation can be represented as:

$ H|1\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle) $

## Types

The Hadamard gate has only one type.

## Matrix representation

The matrix representation of the Hadamard gate is: \* `Hadamard gate`: $\frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

## Circuit representation

The Hadamard gate is represented as `───H───` in the circuit.

## Example

Let's take an example to demonstrate the Hadamard gate.


Suppose we have a qubit initially in the state $ |0\rangle $, represented as:

$$
|q_0\rangle = |0\rangle
\tag{7}
$$

The Hadamard gate is represented by the following matrix:

$$
H = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
\tag{8}
$$

To apply the Hadamard gate to the qubit $ |q_0\rangle = |0\rangle $, we perform a matrix multiplication of the Hadamard gate matrix with the state vector representing $ |0\rangle $.

$$
H|q_0\rangle = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{9}
$$

Performing the matrix multiplication:

$$
H|q_0\rangle = \frac{1}{\sqrt{2}} \begin{bmatrix} 1*1 + 1*0 \\ 1*1 - 1*0 \end{bmatrix}
\tag{10}
$$

Simplifying:

$$
H|q_0\rangle = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ 1 \end{bmatrix}
\tag{11}
$$

Therefore, after applying the Hadamard gate, the state of the qubit $ |q_0\rangle $ transforms to:

$$
|q_1\rangle = H|q_0\rangle = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ 1 \end{bmatrix}
\tag{12}
$$

The ket representation of the final state is:

$$
|q_1\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)
\tag{13}
$$

The circuit representation of this operation is as follows:

Initial state: |0⟩

───H───

Final state: $\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle$

## Properties

The properties of the Hadamard gate are:
_ The Hadamard gate is Hermitian, i.e., the conjugate transpose of the gate is equal to the gate itself (i.e., $H^\dagger = H$).
_ The Hadamard gate is involutory, i.e., applying the gate twice results in the identity gate. \* The Hadamard gate is a unitary gate, i.e., the inverse of the gate is equal to the conjugate transpose of the gate (i.e., $H^{-1} = H^\dagger$).

## Conjugate transpose

The conjugate transpose of the Hadamard gate is: \* `Hadamard gate`: $\frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

## Inverse

The inverse of the Hadamard gate is: \* `Hadamard gate`: $\frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

## Dagger

The dagger of the Hadamard gate is: \* `Hadamard gate`: $H^\dagger = H$
