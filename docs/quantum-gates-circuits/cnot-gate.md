---
sidebar_position: 7
sidebar_label: 8. CNOT Gate
---

# CNOT Gate

## Definition
The CNOT (Controlled-NOT) gate is a two-qubit gate that performs an X gate on the second qubit (target qubit) if the state of the first qubit (control qubit) is $|1\rangle$. The CNOT gate is also known as the Controlled-X gate. The CNOT gate is used to entangle two qubits and is a fundamental gate in quantum computing. The CNOT gate is a conditional gate that acts on two qubits. The CNOT gate is represented as `CX` in the circuit. 

## Effect on qubit
In CNOT gate if the control qubit is in the state $|0\rangle$, the target qubit remains unchanged. If the control qubit is in the state $|1\rangle$, the target qubit is flipped. 

## Types
The CNOT gate has only one type.

## Matrix representation
The matrix representation of the CNOT gate is:

$$
CX = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{bmatrix}
\tag{1}
$$

## Circuit representation
The CNOT gate is represented as
    
    ```plaintext
    ───●───
       │
    ───X───
    ```

Where the control qubit is represented by `●` and the target qubit is represented by `X`. 

## Example

Let's take an example to demonstrate the CNOT gate.

### Main Method

*   CNOT Gate
Suppose we have two qubits initially in the state $|00\rangle$, represented as:

$$
|q_0\rangle = |0\rangle
\tag{2}
$$

$$
|q_1\rangle = |0\rangle
\tag{3}
$$

The CNOT gate is represented by the following matrix:

$$
CX = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{bmatrix}
\tag{4}
$$

To apply the CNOT gate to the qubits $|q_0\rangle = |0\rangle$ and $|q_1\rangle = |0\rangle$, we perform a matrix multiplication of the CNOT gate matrix with the state vector representing $|00\rangle$.

$$
CX|q_0q_1\rangle = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}
\tag{5}
$$

Performing the matrix multiplication:

$$
CX|q_0q_1\rangle = \begin{bmatrix} 1*1 + 0*0 + 0*0 + 0*0 \\ 0*1 + 1*0 + 0*0 + 0*0 \\ 0*1 + 0*0 + 0*0 + 1*0 \\ 0*1 + 0*0 + 1*0 + 0*0 \end{bmatrix}
\tag{6}
$$

Simplifying:

$$
CX|q_0q_1\rangle = \begin{bmatrix} 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}
\tag{7}
$$

Thus, the CNOT gate does not change the state of the qubits $|00\rangle$.

It does not affect the state of the qubits $|00\rangle$ as the control qubit is in the state $|0\rangle$. So, the CNOT gate does not introduce any change to the qubits $|00\rangle$. Instead, it flips the state of the target qubit if the control qubit is in the state $|1\rangle$.

Now, let's take another example where the control qubit is in the state $|1\rangle$ and the target qubit is in the state $|1\rangle$.

Suppose we have two qubits initially in the state $|10\rangle$, represented as:

$$
|q_0\rangle = |1\rangle
\tag{8}
$$

$$
|q_1\rangle = |1\rangle
\tag{9}
$$

To apply the CNOT gate to the qubits $|q_0\rangle = |1\rangle$ and $|q_1\rangle = |1\rangle$, we perform a matrix multiplication of the CNOT gate matrix with the state vector representing $|11\rangle$.

$$
CX|q_0q_1\rangle = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}
\tag{10}
$$

Performing the matrix multiplication:

$$
CX|q_0q_1\rangle = \begin{bmatrix} 1*0 + 0*0 + 0*0 + 0*1 \\ 0*0 + 1*0 + 0*0 + 0*1 \\ 0*0 + 0*0 + 0*0 + 1*1 \\ 0*0 + 0*0 + 1*0 + 0*1 \end{bmatrix}
\tag{11}
$$

Simplifying:

$$
CX|q_0q_1\rangle = \begin{bmatrix} 0 \\ 0 \\ 1 \\ 0 \end{bmatrix} = |10\rangle
\tag{12}
$$

Thus, the CNOT gate flips the state of the target qubit if the control qubit is in the state $|1\rangle$.

### Shortcut Method
Well instead of performing the matrix multiplication, we can use the shortcut method to determine the output state of the qubits after applying the CNOT gate.

The shortcut method is as follows:

1. If the control qubit is in the state $|0\rangle$, the target qubit remains unchanged.
2. If the control qubit is in the state $|1\rangle$, the target qubit is flipped.

observe the below equations carefully:

$$
CX|00\rangle = |00\rangle
\tag{13}
$$

$$
CX|01\rangle = |01\rangle
\tag{14}
$$

$$
CX|10\rangle = |11\rangle
\tag{15}
$$

$$
CX|11\rangle = |10\rangle
\tag{16}
$$

PS: break the above state of qubits into two qubits, the first qubit represents the control qubit and the second qubit represents the target qubit. ie $|q_0q_1\rangle$ = $|q_0\rangle|q_1\rangle$ and apply the CNOT gate to the qubits.

## Properties
The CNOT gate is self-adjoint, i.e., $CX^{\dagger} = CX$. The CNOT gate is also its own inverse, i.e., $CX^2 = I$, where $I$ is the identity matrix.

## Conjugate Transpose
The conjugate transpose of the CNOT gate is:
    * $CX^{\dagger} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{bmatrix}$

## Inverse
The inverse of the CNOT gate is:
    * $CX^{-1} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{bmatrix}$

## Dagger
The dagger of the CNOT gate is:
    * $CX^{\dagger} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{bmatrix}$




