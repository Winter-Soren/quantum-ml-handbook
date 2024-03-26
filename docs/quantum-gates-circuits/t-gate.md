---
sidebar_position: 4
sidebar_label: 5. T Gate
---

# T Gate

## Definition
Similar to the Phase gate, the T gate is a single-qubit gate that introduces a phase of 45 degrees. The T gate is also known as the $\sqrt{Pauli-Z}$ gate. The T gate is used to change the phase of the qubit in terms of the $Z$ axis of the Bloch sphere. 
The T gate is the most commonly used gate in quantum computing after the Pauli gates, Hadamard gate, and the Phase gate.

## Effect on qubit
The T gate changes the phase of the qubit by 45 degrees. The T gate changes the phase of the qubit from $+1$ to $e^{i\pi/4}$ and vice versa, where $i$ is the imaginary unit. 

## Types
The T gate has only one type.

## Matrix representation
The matrix representation of the T gate is:
    * `T gate`: $\begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{bmatrix}$

## Circuit representation
The T gate is represented as ` ───T─── ` in the circuit.

## Example

Let's take an example to demonstrate the T gate.

Certainly! Let's explore an example demonstrating the working of the T gate in excruciating detail.

*   T Gate
Suppose we have a qubit initially in the state $|0\rangle$, represented as:

$$
|q_0\rangle = |0\rangle
\tag{18}
$$

The T gate is represented by the following matrix:

$$
T = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{bmatrix}
\tag{19}
$$

To apply the T gate to the qubit $|q_0\rangle = |0\rangle$, we perform a matrix multiplication of the T gate matrix with the state vector representing $|0\rangle$.

$$
T|q_0\rangle = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{20}
$$

Performing the matrix multiplication:

$$
T|q_0\rangle = \begin{bmatrix} 1*1 + 0*0 \\ 0*1 + e^{i\pi/4}*0 \end{bmatrix}
\tag{21}
$$

Simplifying:

$$
T|q_0\rangle = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{22}
$$

Thus, the T gate does not change the state of the qubit $|0\rangle$.

It does not affect the state of the qubit $|0\rangle$ as the phase of the qubit is already $+1$. So, the T gate does not introduce any phase change to the qubit $|0\rangle$. Instead, it introduces a phase of $45$ degrees to the qubit $|1\rangle$.

Therefore, after applying the T gate, the state of the qubit $|q_0\rangle$ remains unchanged, indicating that the T gate only changes the phase of the qubit.

## Properties
The T gate is self-adjoint, i.e., $T^{\dagger} = T$. The T gate is also its own inverse, i.e., $T^2 = I$, where $I$ is the identity matrix.

## Conjugate Transpose
The conjugate transpose of the T gate is:
    * $T^{\dagger} = \begin{bmatrix} 1 & 0 \\ 0 & e^{-i\pi/4} \end{bmatrix}$

## Inverse
The inverse of the T gate is:
    * $T^{-1} = \begin{bmatrix} 1 & 0 \\ 0 & e^{-i\pi/4} \end{bmatrix}$

## Dagger
The dagger of the T gate is:
    * $T^{\dagger} = \begin{bmatrix} 1 & 0 \\ 0 & e^{-i\pi/4} \end{bmatrix}$
