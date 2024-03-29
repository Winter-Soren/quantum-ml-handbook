---
sidebar_position: 5
sidebar_label: 6. S Gate
---

# S Gate

## Definition
The S gate is a single-qubit gate that rotates the qubit state by 90 degrees around the $Z$ of the Bloch sphere. The relationship between the S gate and the Pauli-Z gate is similar to the relationship between the T gate and the $\sqrt{Pauli-Z}$ gate. The S gate is also known as the $\sqrt{Z}$ gate. It is also called as Clifford gate or $\frac{\pi}{2}$-gate. 


## Effect on qubit
The S gate changes the phase of the qubit by 90 degrees. The S gate changes the phase of the qubit from $+1$ to $i$ and vice versa, where $i$ is the imaginary unit. (Note that $i = e^{i\pi/2}$) [An exact behaviour of T gate, just the difference in the phase change]

## Types
The S gate has only one type.

## Matrix representation
The matrix representation of the S gate is:
    * `S gate`: $\begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}$ 

The matrix can also be represented as $\begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/2} \end{bmatrix}$

where $i$ is equal to $e^{i\pi/2}$.

## Circuit representation
The S gate is represented as ` ───S─── ` in the circuit.

## Example

Let's take an example to demonstrate the S gate.


*   S Gate
Suppose we have a qubit initially in the state $|0\rangle$, represented as:

$$
|q_0\rangle = |0\rangle
\tag{22}
$$

The S gate is represented by the following matrix:

$$
S = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}
\tag{23}
$$

To apply the S gate to the qubit $|q_0\rangle = |0\rangle$, we perform a matrix multiplication of the S gate matrix with the state vector representing $|0\rangle$.

$$
S|q_0\rangle = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{24}
$$

Performing the matrix multiplication:

$$
S|q_0\rangle = \begin{bmatrix} 1*1 + 0*0 \\ 0*1 + i*0 \end{bmatrix}
\tag{25}
$$

Simplifying:

$$
S|q_0\rangle = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{26}
$$

Thus, the S gate does not change the state of the qubit $|0\rangle$.

It does not affect the state of the qubit $|0\rangle$ as the phase of the qubit is already $+1$. So, the S gate does not introduce any phase change to the qubit $|0\rangle$. Instead, it introduces a phase of $90$ degrees to the qubit $|1\rangle$.

Therefore, after applying the S gate, the state of the qubit $|q_0\rangle$ remains unchanged, indicating that the S gate only changes the phase of the qubit.

Now, let's see the effect of the S gate on the qubit $|1\rangle$.

Suppose we have a qubit initially in the state $|1\rangle$, represented as:

$$
|q_1\rangle = |1\rangle
\tag{27}
$$

To apply the S gate to the qubit $|q_1\rangle = |1\rangle$, we perform a matrix multiplication of the S gate matrix with the state vector representing $|1\rangle$.

$$
S|q_1\rangle = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}
\tag{28}
$$

Performing the matrix multiplication:

$$
S|q_1\rangle = \begin{bmatrix} 1*0 + 0*1 \\ 0*0 + i*1 \end{bmatrix}
\tag{29}
$$

Simplifying:

$$
S|q_1\rangle = \begin{bmatrix} 0 \\ i \end{bmatrix}

\tag{30}
$$

Thus, the S gate changes the state of the qubit $|1\rangle$ to $i|1\rangle$.

Therefore, the S gate introduces a phase of $90$ degrees to the qubit $|1\rangle$.

Hence, the S gate changes the phase of the qubit by 90 degrees.

The S gate is used in various quantum algorithms and quantum circuits to introduce phase changes to the qubits.

## Properties
This gate has exact same properties as the T gate ie. $S^2 = Z$ and $S|0\rangle = |0\rangle$ and $S|1\rangle = i|1\rangle$.

## Conjugate Transpose
The conjugate transpose of the S gate is:
    * $S^{\dagger} = \begin{bmatrix} 1 & 0 \\ 0 & -i \end{bmatrix}$

## Inverse
The inverse of the S gate is:
    * $S^{-1} = \begin{bmatrix} 1 & 0 \\ 0 & -i \end{bmatrix}$

## Dagger
The dagger of the S gate is:
    * $S^{\dagger} = \begin{bmatrix} 1 & 0 \\ 0 & -i \end{bmatrix}$

    



