---
sidebar_position: 2
sidebar_label: 2. Pauli Gate
---

# Pauli Gate

## Definition

The Pauli gates are a set of three single qubit gates that are used to change the state of a qubit. The Pauli gates are:

-   `Pauli-X gate`
-   `Pauli-Y gate`
-   `Pauli-Z gate`

## Effect on qubit

The Pauli gates are named after the physicist Wolfgang Pauli. The Pauli-X gate is also known as the NOT gate. The Pauli-Y gate and Pauli-Z gate are the generalizations of the Pauli-X gate. These gates are used to change the state in terms of the $X$, $Y$, and $Z$ axes of the Bloch sphere. The Pauli gates are used to perform the bit-flip, phase-flip, and bit-phase-flip operations. The Pauli gates are the most commonly used gates in quantum computing.

    - Bit Flip Operation: This operation changes the state of the qubit in terms of the $X$ axis of the Bloch sphere. It is performed by the Pauli-X gate. The Pauli-X gate changes the state of the qubit from $|0\rangle$ to $|1\rangle$ and vice versa.

    - Phase Flip Operation: This operation changes the state of the qubit in terms of the $Z$ axis of the Bloch sphere. It is performed by the Pauli-Z gate. The Pauli-Z gate changes the phase of the qubit from $+1$ to $-1$ and vice versa.

    - Bit-Phase Flip Operation: This operation changes the state of the qubit in terms of the $Y$ axis of the Bloch sphere. It is performed by the Pauli-Y gate. The Pauli-Y gate changes the state of the qubit from $|0\rangle$ to $|1\rangle$ and vice versa, and also changes the phase of the qubit from $+1$ to $-1$ and vice versa.

    PS: you may be confused between the notation like $|0\rangle$ and $+1$. $|0\rangle$ represents the state of the qubit, and $+1$ represents the phase of the qubit.

## Types

The Pauli gates are:
_ `Pauli-X gate`: The Pauli-X gate is also known as the NOT gate. It is used to perform the bit-flip operation.
_ `Pauli-Y gate`: The Pauli-Y gate is used to perform the bit-phase-flip operation. \* `Pauli-Z gate`: The Pauli-Z gate is used to perform the phase-flip operation.

## Matrix representation

The matrix representation of the Pauli gates are:
_ `Pauli-X gate`: $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$
_ `Pauli-Y gate`: $\begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}$ \* `Pauli-Z gate`: $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$

## Circuit representation

    * `Pauli-X gate`: is represented as ` ───X─── ` in the circuit.
    * `Pauli-Y gate`: is represented as ` ───Y─── ` in the circuit.
    * `Pauli-Z gate`: is represented as ` ───Z─── ` in the circuit.

## Example

Let's take an example to demonstrate the Pauli gates. We will take example with each of the Pauli gates.


### Pauli-X Gate (σx)

Suppose we have a qubit initially in the state $ |0\rangle $, represented as:

$$
|q_0\rangle = |0\rangle
\tag{1}
$$

Applying the Pauli-X gate (σx) to this qubit results in flipping its state. Mathematically, the action of the Pauli-X gate on a qubit is represented as:

$$
\sigma_x |0\rangle = |1\rangle
\tag{2}
$$

So, after applying the Pauli-X gate, the qubit transitions from the $ |0\rangle $ state to the $ |1\rangle $ state.

The circuit representation of this operation is as follows:

Initial state: |0⟩

───X───

Final state: |1⟩

### Pauli-Y Gate (σy)

Now, let's consider another qubit initially in the state $ |0\rangle $, represented as:

$$
|q_0\rangle = |0\rangle
\tag{3}
$$

Applying the Pauli-Y gate (σy) to this qubit results in applying a phase shift along the Y-axis of the Bloch sphere. Mathematically, the action of the Pauli-Y gate on a qubit is represented as:

$$
\sigma_y |0\rangle = i|1\rangle
\tag{4}
$$

So, after applying the Pauli-Y gate, the qubit transitions from the $ |0\rangle $ state to the $ i|1\rangle $ state.

The circuit representation of this operation is as follows:

Initial state: |0⟩

───Y───

Final state: i|1⟩

### Pauli-Z Gate (σz)

For the Pauli-Z gate (σz), let's consider a qubit initially in the state $ |+\rangle $, represented as:

$$
|q_0\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)
\tag{5}
$$

Applying the Pauli-Z gate to this qubit results in flipping the phase of the $ |1\rangle $ component, while leaving the $ |0\rangle $ component unchanged. Mathematically, the action of the Pauli-Z gate on a qubit is represented as:

$$
\sigma_z |+\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)
\tag{6}
$$

So, after applying the Pauli-Z gate, the qubit transitions from the $ |+\rangle $ state to the $ \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle) $ state.

The circuit representation of this operation is as follows:

Initial state: |+⟩

───Z───

Final state: $\frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$

## Properties

The properties of the Pauli gates are:
_ The Pauli gates are Hermitian, i.e., the conjugate transpose of the gate is equal to the gate itself (i.e., $P^\dagger = P$).
_ The Pauli gates are involutory, i.e., applying the gate twice results in the identity gate. \* The Pauli gates are unitary gates, i.e., the inverse of the gate is equal to the conjugate transpose of the gate (i.e., $P^{-1} = P^\dagger$).

## Conjugate transpose

The conjugate transpose of the Pauli gates are:

    PS: conjugate transpose means taking the transpose of the matrix and then taking the complex conjugate of each element of the matrix. Complex conjugate of a complex number $a + bi$ is $a - bi$.

    * `Pauli-X gate`: $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$
    * `Pauli-Y gate`: $\begin{bmatrix} 0 & i \\ -i & 0 \end{bmatrix}$
    * `Pauli-Z gate`: $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$

## Inverse

The inverse of the Pauli gates are:

    PS: The inverse of a matrix $A$ is denoted by $A^{-1}$. The inverse of a matrix $A$ is the matrix which when multiplied by $A$ results in the identity matrix.

    * `Pauli-X gate`: $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$
    * `Pauli-Y gate`: $\begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}$
    * `Pauli-Z gate`: $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$

## Dagger

The dagger of the Pauli gates are:

    PS: The dagger of a matrix $A$ is denoted by $A^\dagger$. The dagger of a matrix $A$ is the conjugate transpose of the matrix.

    * `Pauli-X gate`: $X^\dagger = X$
    * `Pauli-Y gate`: $Y^\dagger = Y$
    * `Pauli-Z gate`: $Z^\dagger = Z$

:::info

_Major spoilers: you might be thinking that why we need to learn so much about the gate's conjugate transpose, inverse, and dagger! Well, here are the reasons:_

1. **Conjugate Transpose**: The conjugate transpose of a gate is necessary for preserving the information encoded in quantum states during operations. In quantum computing, operations are often represented by unitary matrices, which must preserve the inner product between quantum states. The conjugate transpose ensures that the unitary properties of the gate are maintained, allowing for reversible transformations of quantum states.

2. **Inverse**: The inverse of a gate enables the reversal of operations, which is essential for error correction and fault tolerance in quantum algorithms. By applying the inverse gate, it's possible to undo previous operations, effectively "rewinding" the quantum computation to a previous state. This capability is crucial for error detection and correction mechanisms, ensuring the reliability of quantum computations.

3. **Dagger**: The dagger of a gate, also known as the adjoint or Hermitian conjugate, is indispensable for implementing complex quantum algorithms efficiently. It enables the representation of complex quantum operations in a concise and systematic manner. The dagger operation facilitates the manipulation and analysis of quantum circuits, allowing for the design and optimization of quantum algorithms with improved performance and scalability.

:::
