---
sidebar_position: 1
sidebar_label: 1. Overview
---

# Overview

In fundamentals, we learned about qubits and their states. Now, in order to change the state of qubits at our will, we need to perform some operations on them. These operations are performed by quantum gates. When we combine these gates together, we get a quantum circuit.

Quantum gates are the building blocks of quantum circuits. They are the operators that act on qubits to perform operations on them. These operations can be anything from changing the state of qubits to entangling them. The quantum gates are represented by matrices. These matrices are unitary, i.e., the inverse of the matrix is equal to the conjugate transpose of the matrix. This property ensures that the probability of the qubit being in a particular state is conserved.

Classical gates are represented by truth tables, but quantum gates are represented by matrices. The reason behind this is that quantum gates are reversible, and the truth tables of reversible gates are not unique. But the matrices of quantum gates are unique.

Just like there are various types of classical gates (universal gates and derived gates) there are quantum gates like:

1. `Single qubit gates`
2. `Multi qubit gates`
3. `Universal gates`

## Single qubit gates

Single qubit gates are the gates that act on a single qubit. These gates are used to change the state of a single qubit. The single qubit gates are:

1. `Pauli gates`
2. `Hadamard gate`
3. `Phase gate`
4. `T gate`
5. `S gate`
6. `U gate`

## Multi qubit gates

Multi qubit gates are the gates that act on multiple qubits. These gates are used to entangle qubits. The multi qubit gates are:

1. `CNOT gate`
2. `Toffoli gate`
3. `SWAP gate`

## Universal gates

Universal gates are the gates that can be used to construct any other gate. The universal gates are:

1. `Hadamard gate`
2. `T gate`
3. `CNOT gate`
