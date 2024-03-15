---
sidebar_position: 4
sidebar_label: 4. Phase Gate
---

# Phase Gate

## Definition
The phase gate is a single qubit gate that is used to change the phase of the qubit. The phase gate is also known as the $R_\phi$ gate. The phase gate is used to change the phase of the qubit in terms of the $Z$ axis of the Bloch sphere. The phase gate is used to perform the phase-flip operation. The phase gate is the most commonly used gate in quantum computing after the Pauli gates and the Hadamard gate.

## Effect on qubit
The phase gate changes the phase of the qubit from $+1$ to $-1$ and vice versa.

PS: wait wait wait! You are probably thinking that this particular operation is performed by Pauli-Z gate as well. I mean exact same operation right. Okay, this Phase gate is a generalization of the Pauli-Z gate. What do I mean by generalization, well both of these gates perform the same operation, but Pauli-Z gate introduces the phase change of $\pi$ ($180$ Degrees) to the $1\rangle$, while the Phase gate introduces a phase change of $\pi/2$ ($90$ Degrees) to the $1\rangle$. Thats the difference between the two gates.

3. Types: The phase gate has only one type.

4. Matrix representation: The matrix representation of the phase gate is:
    * `Phase gate`: $\begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix}$

5. Circuit representation: The phase gate is represented as ` ───Rz─── ` in the circuit.

6. Example: Let's take an example to demonstrate the phase gate.

Certainly! Let's explore an example demonstrating the working of the phase gate in excruciating detail.

*   Phase Gate (Rz)
Suppose we have a qubit initially in the state $ |0\rangle $, represented as:

$$
|q_0\rangle = |0\rangle
\tag{14}
$$

The phase gate is represented by the following matrix:

$$
Rz = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix}
\tag{15}
$$

To apply the phase gate to the qubit $ |q_0\rangle = |0\rangle $, we perform a matrix multiplication of the phase gate matrix with the state vector representing $ |0\rangle $.

$$
Rz|q_0\rangle = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{16}
$$

Performing the matrix multiplication:

$$
Rz|q_0\rangle = \begin{bmatrix} 1*1 + 0*0 \\ 0*1 + e^{i\phi}*0 \end{bmatrix}
\tag{17}
$$

Simplifying:

$$
Rz|q_0\rangle = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\tag{18}
$$

Therefore, after applying the phase gate, the state of the qubit $ |q_0\rangle $ remains unchanged. Which means the phase gate does not change the state of the qubit, it only changes the phase of the qubit.

Lets take the phase of the qubit to be $\phi = \pi/2$, then the matrix representation of the phase gate is:

$$
Rz = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/2} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}
\tag{19}
$$

So, after applying the phase gate, the state of the qubit $ |q_0\rangle $ transforms to:

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

Initial state: |0⟩

   ───Rz───

Final state: |0⟩

## Properties
The properties of the phase gate are:
    * The phase gate is Hermitian, i.e., the conjugate transpose of the gate is equal to the gate itself (i.e., $Rz^\dagger = Rz$).
    * The phase gate is involutory, i.e., applying the gate twice results in the identity gate.
    * The phase gate is a unitary gate, i.e., the inverse of the gate is equal to the conjugate transpose of the gate (i.e., $Rz^{-1} = Rz^\dagger$).

## Conjugate 
ranspose: The conjugate transpose of the phase gate is:
    * `Phase gate`: $\begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix}$

## Inverse
The inverse of the phase gate is:
    * `Phase gate`: $\begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix}$

## Dagger

The dagger of the phase gate is:
    * `Phase gate`: $Rz^\dagger = Rz$