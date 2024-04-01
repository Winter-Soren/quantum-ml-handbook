---
sidebar_position: 9
sidebar_label: 10. Fredkin Gate
---

# Fredkin Gate

## Definition
The Fredkin gate, also known as the Controlled-Swap (CSWAP) gate, is a three-qubit gate. It swaps the second and third qubits if the first qubit is in the state $|1\rangle$. Invented by Edward Fredkin in 1980, it serves as a reversible version of the classical XOR gate. Being a universal gate, it can perform any classical or quantum computation.

## Effect on Qubits
The Fredkin gate swaps the second and third qubits only if the first qubit is in the state $|1\rangle$. Otherwise, it leaves the state of the second and third qubits unchanged. The gate has no effect on the first qubit, which serves as the control qubit, while the second and third qubits are the target qubits.

## Types
The Fredkin gate has only one type.

## Representation

### Matrix Representation
The matrix representation of the Fredkin gate is:

$$
CSWAP = \begin{bmatrix} 
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\ 
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\ 
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\ 
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\ 
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\ 
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 
\end{bmatrix}
\tag{1}
$$

PS: Upon close inspection, it becomes evident that the Fredkin gate is identical to the Toffoli gate; the difference lies only in the naming convention.

### Symbolic Representation

$$
CSWAP(|\psi_1\rangle \otimes |\psi_2\rangle \otimes |\psi_3\rangle) = |\psi_1\rangle \otimes |\psi_2 \oplus \psi_1 \cdot \psi_3\rangle \otimes |\psi_3\rangle
\tag{2}
$$

Breaking down the equation:
- The first qubit is the control qubit:

$$
|\psi_1\rangle
$$

- The second qubit is the target qubit, and it is XORed with the product of the first and third qubits:

$$
|\psi_2 \oplus \psi_1 \cdot \psi_3\rangle
$$

This implies that the second qubit is swapped with the third qubit if the first qubit is in the state $|1\rangle$.

- The third qubit remains unchanged:

$$
|\psi_3\rangle
$$

### Circuit Representation

The Fredkin gate is represented as:

```plaintext
───●───
   │
───X───
   │
───X───
```

Where the first qubit is the control qubit (represented by `●`), and the second and third qubits are the target qubits (represented by `X`). The second and third qubits are swapped if the first qubit is in the state $|1\rangle$.


## Example

Coming up...

