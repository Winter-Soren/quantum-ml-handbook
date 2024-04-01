---
sidebar_position: 8
sidebar_label: 9. Taffoli Gate
---

# Taffoli Gate

## Definition
The Taffoli gate is a three-qubit gate that flips the state of the third qubit if the first two qubits are in the state $|11\rangle$. This gate is also known as the Controlled-Controlled-Not (CCX) gate or CCNOT gate. This gate was invented by Tommaso Toffoli in 1980. He invented this gate as a reversible version of the classical AND gate. The Toffoli gate is a universal gate, which means that any classical or quantum computation can be performed using only Toffoli gates. This is because the Toffoli gate is a universal gate for classical reversible computation. 

PS: reversible computation is a computation that can be undone, which means that the input can be recovered from the output when the computation is reversed.

## Effect on qubit
The Toffoli gate flips the state of the third qubit if the first two qubits are in the state $|11\rangle$. If the first two qubits are not in the state $|11\rangle$, the Toffoli gate does not change the state of the third qubit. This gate has no effect on the first two qubits. First two qubits are control qubits and the third qubit is the target qubit. 

## Types
The Toffoli gate has only one type.

## Representation

### Matrix representation
The matrix representation of the Toffoli gate is:

$$
CCX = \begin{bmatrix} 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \end{bmatrix}
\tag{1}
$$

### Circuit representation

The Toffoli gate is represented as

    ```plaintext
    ───●───
       │
    ───●───
       │
    ───X───
    ```

Where the first two qubits are control qubits (represented by `●`) and the third qubit is the target qubit (represented by `X`).


### Symbolic Representation

$$
CCX(|\psi_1\rangle \otimes |\psi_2\rangle \otimes |\psi_3\rangle) = |\psi_1\rangle \otimes |\psi_2\rangle \otimes |\psi_3 \oplus (\psi_1 \cdot \psi_2)\rangle
\tag{2}
$$

The dot in the equation represents the classical AND operation. Which is dot product of the two qubits.

## Properties
1. The Toffoli gate is a reversible gate.
2. The Toffoli gate is a universal gate for classical reversible computation.
3. The Toffoli gate is a three-qubit gate.

## Conjugate Transpose
The conjugate transpose of the Toffoli gate is the same as the Toffoli gate itself. The Toffoli gate is a real matrix, so the conjugate transpose of the Toffoli gate is the same as the Toffoli gate. It is a self-adjoint matrix represented as: $CCX = CCX^\dagger$.

## Inverse
The inverse of the Toffoli gate is the same as the Toffoli gate itself. The Toffoli gate is its own inverse. The Toffoli gate is a self-inverse gate. The Toffoli gate is represented as: $CCX = CCX^{-1}$.

## Dagger 
dagger of the Toffoli gate is the same as the Toffoli gate. The Toffoli gate is a self-dagger gate which is represented as: $CCX = CCX^\dagger$.







