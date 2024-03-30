---
sidebar_position: 7
sidebar_label: 8. SWAP Gate
---

# SWAP Gate

## Definition
The SWAP gate is a two-qubit gate that swaps the states of two qubits. The SWAP gate is a fundamental gate in quantum computing and is used to exchange the states of two qubits. 

## Effect on qubit
The SWAP gate swaps the states of two qubits. If the first qubit is in the state $|a\rangle$ and the second qubit is in the state $|b\rangle$, the SWAP gate changes the state of the first qubit to $|b\rangle$ and the state of the second qubit to $|a\rangle$. Swapping the states of two qubits does not mean exchanging the qubits themselves. The SWAP gate is a conditional gate that acts on two qubits. It just swaps the states and not the properties of the qubits. 

PS: Unlike the CNOT gate, the SWAP gate does not require a qubit to be in a state of $|1\rangle$ to perform the swap operation. The SWAP gate swaps the states of the qubits regardless of their initial states.


## Types
The SWAP gate has only one type.

## Representation
The matrix representation of the SWAP gate is:

### Matrix representation

$$
SWAP = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}
\tag{1}
$$

PS: By carefully observing the matrix, you can see that the SWAP gate is a symmetric gate. And its somewhat similar to the CNOT gate.

### Symbolic Representation

$$
SWAP(|\psi_1\rangle \otimes |\psi_2\rangle) = |\psi_2\rangle \otimes |\psi_1\rangle
\tag{2}
$$

### Circuit representation
The SWAP gate is represented as

```plaintext
───X───
   │
───X───
```

Where the first qubit is represented by the first `X` and the second qubit is represented by the second `X`.

## Example

Let's take an example to demonstrate the SWAP gate.

*   SWAP Gate

Suppose we have two qubits initially in the state $|01\rangle$, represented as:

$$
|q_0\rangle = |0\rangle
\tag{3}
$$

$$
|q_1\rangle = |1\rangle
\tag{4}
$$

The SWAP gate is represented by the following matrix:

$$
SWAP = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}
\tag{5}
$$

To apply the SWAP gate to the qubits $|q_0\rangle = |0\rangle$ and $|q_1\rangle = |1\rangle$, we perform a matrix multiplication of the SWAP gate matrix with the state vector representing $|01\rangle$.

$$
SWAP|q_0q_1\rangle = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \\ 0 \\ 0 \end{bmatrix}
\tag{6}
$$

Performing the matrix multiplication:

$$
SWAP|q_0q_1\rangle = \begin{bmatrix} 1*0 + 0*1 + 0*0 + 0*0 \\ 0*0 + 0*1 + 1*0 + 0*0 \\ 0*0 + 1*1 + 0*0 + 0*0 \\ 0*0 + 0*1 + 0*0 + 1*0 \end{bmatrix}
\tag{7}
$$

Simplifying:

$$
SWAP|q_0q_1\rangle = \begin{bmatrix} 0 \\ 0 \\ 1 \\ 0 \end{bmatrix}
\tag{8}
$$

Thus, the SWAP gate changes the state of the qubits $|01\rangle$ to $|10\rangle$.

Hence, we can say that:

$$
SWAP(|01\rangle) = |10\rangle
\tag{9}
$$

$$
SWAP(|10\rangle) = |01\rangle
\tag{10}
$$

$$
SWAP(|11\rangle) = |11\rangle
\tag{11}
$$

$$
SWAP(|00\rangle) = |00\rangle
\tag{12}
$$

We can conclude that the SWAP gate swaps the states of the qubits. The SWAP gate is a symmetric gate that swaps the states of two qubits without changing the properties of the qubits. 

## Properties
The SWAP gate has the following properties:

*   The SWAP gate is a symmetric gate.
*   The SWAP gate swaps the states of two qubits.
*   The SWAP gate does not change the properties of the qubits.

## Conjugate Transpose
The conjugate transpose of the SWAP gate is the same as the SWAP gate itself. The conjugate transpose of the SWAP gate is:

$$
SWAP^{\dagger} = SWAP
\tag{13}
$$

## Inverse
The inverse of the SWAP gate is the same as the SWAP gate itself. The inverse of the SWAP gate is:

$$
SWAP^2 = I
\tag{14}
$$

Where $I$ is the identity matrix.

## Dagger 
The dagger of the SWAP gate is the same as the SWAP gate itself. The dagger of the SWAP gate is:

$$
SWAP^{\dagger} = SWAP
\tag{15}
$$




