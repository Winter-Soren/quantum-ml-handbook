# Quantum Gates and Circuits

In fundamentals, we learned about qubits and their states. Now, in order to change the state of qubits at our will, we need to perform some operations on them. These operations are performed by quantum gates. When we combine these gates together, we get a quantum circuit.

PS: Brace yourself, as our journey into quantum gates and circuits is going to be a bit (or more) bumpy. Psssst...!! Don't scroll down faster, you may have anxiety issues. Just kidding, scroll down as fast as you want.

## Quantum Gates
Quantum gates are the building blocks of quantum circuits. They are the operators that act on qubits to perform operations on them. These operations can be anything from changing the state of qubits to entangling them. The quantum gates are represented by matrices. These matrices are unitary, i.e., the inverse of the matrix is equal to the conjugate transpose of the matrix. This property ensures that the probability of the qubit being in a particular state is conserved.

Classical gates are represented by truth tables, but quantum gates are represented by matrices. The reason behind this is that quantum gates are reversible, and the truth tables of reversible gates are not unique. But the matrices of quantum gates are unique.

Just like there are various types of classical gates (universal gates and derived gates) there are quantum gates like:

1. `Single qubit gates`
2. `Multi qubit gates`
3. `Universal gates`

### Single qubit gates
Single qubit gates are the gates that act on a single qubit. These gates are used to change the state of a single qubit. The single qubit gates are:

1. `Pauli gates`
2. `Hadamard gate`
3. `Phase gate`
4. `T gate`
5. `S gate`
6. `U gate`


###  Pauli Gate
1. **Definition**: The Pauli gates are a set of three single qubit gates that are used to change the state of a qubit. The Pauli gates are:
    * `Pauli-X gate`
    * `Pauli-Y gate`
    * `Pauli-Z gate`

2. **Effect on qubit**: The Pauli gates are named after the physicist Wolfgang Pauli. The Pauli-X gate is also known as the NOT gate. The Pauli-Y gate and Pauli-Z gate are the generalizations of the Pauli-X gate. These gates are used to change the state in terms of the \(X\), \(Y\), and \(Z\) axes of the Bloch sphere. The Pauli gates are used to perform the bit-flip, phase-flip, and bit-phase-flip operations. The Pauli gates are the most commonly used gates in quantum computing. 


    - Bit Flip Operation: This operation changes the state of the qubit in terms of the \(X\) axis of the Bloch sphere. It is performed by the Pauli-X gate. The Pauli-X gate changes the state of the qubit from \(|0\rangle\) to \(|1\rangle\) and vice versa.

    - Phase Flip Operation: This operation changes the state of the qubit in terms of the \(Z\) axis of the Bloch sphere. It is performed by the Pauli-Z gate. The Pauli-Z gate changes the phase of the qubit from \(+1\) to \(-1\) and vice versa.

    - Bit-Phase Flip Operation: This operation changes the state of the qubit in terms of the \(Y\) axis of the Bloch sphere. It is performed by the Pauli-Y gate. The Pauli-Y gate changes the state of the qubit from \(|0\rangle\) to \(|1\rangle\) and vice versa, and also changes the phase of the qubit from \(+1\) to \(-1\) and vice versa.

    PS: you may be confused between the notation like \(|0\rangle\) and \(+1\). \(|0\rangle\) represents the state of the qubit, and \(+1\) represents the phase of the qubit. 

3. **Types**: The Pauli gates are:
    * `Pauli-X gate`: The Pauli-X gate is also known as the NOT gate. It is used to perform the bit-flip operation.
    * `Pauli-Y gate`: The Pauli-Y gate is used to perform the bit-phase-flip operation.
    * `Pauli-Z gate`: The Pauli-Z gate is used to perform the phase-flip operation.

4. **Matrix representation**: The matrix representation of the Pauli gates are:
    * `Pauli-X gate`: \(\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}\)
    * `Pauli-Y gate`: \(\begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}\)
    * `Pauli-Z gate`: \(\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}\)


5. **Circuit representation**: 
    * `Pauli-X gate`: is represented as ` ───X─── ` in the circuit.
    * `Pauli-Y gate`: is represented as ` ───Y─── ` in the circuit.
    * `Pauli-Z gate`: is represented as ` ───Z─── ` in the circuit.

6. **Example**: Let's take an example to demonstrate the Pauli gates. We will take example with each of the Pauli gates. 

Certainly! Let's explore examples demonstrating the working of the Pauli-X, Pauli-Y, and Pauli-Z gates in excruciating detail.

*   **Pauli-X Gate (σx)**

Suppose we have a qubit initially in the state \( |0\rangle \), represented as:

$$ 
|q_0\rangle = |0\rangle 
\tag{1}
$$

Applying the Pauli-X gate (σx) to this qubit results in flipping its state. Mathematically, the action of the Pauli-X gate on a qubit is represented as:

$$ 
\sigma_x |0\rangle = |1\rangle 
\tag{2}
$$


So, after applying the Pauli-X gate, the qubit transitions from the \( |0\rangle \) state to the \( |1\rangle \) state.

The circuit representation of this operation is as follows:

Initial state: |0⟩

   ───X───

Final state: |1⟩

*   **Pauli-Y Gate (σy)**

Now, let's consider another qubit initially in the state \( |0\rangle \), represented as:

$$ 
|q_0\rangle = |0\rangle 
\tag{3}
$$

Applying the Pauli-Y gate (σy) to this qubit results in applying a phase shift along the Y-axis of the Bloch sphere. Mathematically, the action of the Pauli-Y gate on a qubit is represented as:

$$ 
\sigma_y |0\rangle = i|1\rangle 
\tag{4}
$$

So, after applying the Pauli-Y gate, the qubit transitions from the \( |0\rangle \) state to the \( i|1\rangle \) state.

The circuit representation of this operation is as follows:

Initial state: |0⟩

   ───Y───

Final state: i|1⟩


*   **Pauli-Z Gate (σz)**

For the Pauli-Z gate (σz), let's consider a qubit initially in the state \( |+\rangle \), represented as:

$$ 
|q_0\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)
\tag{5} 
$$

Applying the Pauli-Z gate to this qubit results in flipping the phase of the \( |1\rangle \) component, while leaving the \( |0\rangle \) component unchanged. Mathematically, the action of the Pauli-Z gate on a qubit is represented as:

$$ 
\sigma_z |+\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)
\tag{6} 
$$

So, after applying the Pauli-Z gate, the qubit transitions from the \( |+\rangle \) state to the \( \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle) \) state.

The circuit representation of this operation is as follows:

Initial state: |+⟩

   ───Z───

Final state: \(\frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)\)

7. **Properties**: The properties of the Pauli gates are:
    * The Pauli gates are Hermitian, i.e., the conjugate transpose of the gate is equal to the gate itself (i.e., \(P^\dagger = P\)).
    * The Pauli gates are involutory, i.e., applying the gate twice results in the identity gate.
    * The Pauli gates are unitary gates, i.e., the inverse of the gate is equal to the conjugate transpose of the gate (i.e., \(P^{-1} = P^\dagger\)).

8. **Conjugate transpose**: The conjugate transpose of the Pauli gates are:

    PS: conjugate transpose means taking the transpose of the matrix and then taking the complex conjugate of each element of the matrix. Complex conjugate of a complex number \(a + bi\) is \(a - bi\).

    * `Pauli-X gate`: \(\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}\)
    * `Pauli-Y gate`: \(\begin{bmatrix} 0 & i \\ -i & 0 \end{bmatrix}\)
    * `Pauli-Z gate`: \(\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}\)

9. **Inverse**: The inverse of the Pauli gates are:

    PS: The inverse of a matrix \(A\) is denoted by \(A^{-1}\). The inverse of a matrix \(A\) is the matrix which when multiplied by \(A\) results in the identity matrix.

    * `Pauli-X gate`: \(\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}\)
    * `Pauli-Y gate`: \(\begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}\)
    * `Pauli-Z gate`: \(\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}\)

10. **Dagger**: The dagger of the Pauli gates are:

    PS: The dagger of a matrix \(A\) is denoted by \(A^\dagger\). The dagger of a matrix \(A\) is the conjugate transpose of the matrix.

    * `Pauli-X gate`: \(X^\dagger = X\)
    * `Pauli-Y gate`: \(Y^\dagger = Y\)
    * `Pauli-Z gate`: \(Z^\dagger = Z\)

Major spoilers: you might be thinking that why we need to learn so much about the gate's conjugate transpose, inverse, and dagger! Well, here are the reasons: 

1. **Conjugate Transpose**: The conjugate transpose of a gate is necessary for preserving the information encoded in quantum states during operations. In quantum computing, operations are often represented by unitary matrices, which must preserve the inner product between quantum states. The conjugate transpose ensures that the unitary properties of the gate are maintained, allowing for reversible transformations of quantum states.

2. **Inverse**: The inverse of a gate enables the reversal of operations, which is essential for error correction and fault tolerance in quantum algorithms. By applying the inverse gate, it's possible to undo previous operations, effectively "rewinding" the quantum computation to a previous state. This capability is crucial for error detection and correction mechanisms, ensuring the reliability of quantum computations.

3. **Dagger**: The dagger of a gate, also known as the adjoint or Hermitian conjugate, is indispensable for implementing complex quantum algorithms efficiently. It enables the representation of complex quantum operations in a concise and systematic manner. The dagger operation facilitates the manipulation and analysis of quantum circuits, allowing for the design and optimization of quantum algorithms with improved performance and scalability.




### Hadamard Gate
1. **Definition**: The Hadamard gate is a single qubit gate that is used to create superposition. The Hadamard gate is named after the mathematician Jacques Hadamard. The Hadamard gate is used to change the state of the qubit in terms of the \(X\) and \(Z\) axes of the Bloch sphere. The Hadamard gate is used to perform the bit-flip and phase-flip operations. The Hadamard gate is the most commonly used gate in quantum computing after the Pauli gates.

2. **Effect on qubit**: The Hadamard gate changes the state of the qubit from \(|0\rangle\) to \(\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)\) and vice versa. The Hadamard gate changes the phase of the qubit from \(+1\) to \(-1\) and vice versa. 

PS: you must be thinking that the operations performed by the Hadamard gate are similar to the Pauli gates. Well, you are right! The Hadamard gate is a combination of the Pauli-X and Pauli-Z gates. The Hadamard gate is the most versatile gate in quantum computing, as it can be used to create superposition, entanglement, and perform phase-flip and bit-flip operations. 

3. **Types**: The Hadamard gate has only one type.

4. **Matrix representation**: The matrix representation of the Hadamard gate is:
    * `Hadamard gate`: \(\frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}\)

5. **Circuit representation**: The Hadamard gate is represented as ` ───H─── ` in the circuit.

6. **Example**: Let's take an example to demonstrate the Hadamard gate.

Certainly! Let's explore an example demonstrating the working of the Hadamard gate in excruciating detail.

*   **Hadamard Gate (H)**
Suppose we have a qubit initially in the state \( |0\rangle \), represented as:

$$  
|q_0\rangle = |0\rangle
\tag{7}
$$

The Hadamard gate is represented by the following matrix:

$$
H = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
\tag{8}
$$

To apply the Hadamard gate to the qubit \( |q_0\rangle = |0\rangle \), we perform a matrix multiplication of the Hadamard gate matrix with the state vector representing \( |0\rangle \). 

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

Therefore, after applying the Hadamard gate, the state of the qubit \( |q_0\rangle \) transforms to:

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

Final state: \(\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle\)

7. **Properties**: The properties of the Hadamard gate are:
    * The Hadamard gate is Hermitian, i.e., the conjugate transpose of the gate is equal to the gate itself (i.e., \(H^\dagger = H\)).
    * The Hadamard gate is involutory, i.e., applying the gate twice results in the identity gate.
    * The Hadamard gate is a unitary gate, i.e., the inverse of the gate is equal to the conjugate transpose of the gate (i.e., \(H^{-1} = H^\dagger\)).

8. **Conjugate transpose**: The conjugate transpose of the Hadamard gate is:
    * `Hadamard gate`: \(\frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}\)

9. **Inverse**: The inverse of the Hadamard gate is:
    * `Hadamard gate`: \(\frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}\)

10. **Dagger**: The dagger of the Hadamard gate is:
    * `Hadamard gate`: \(H^\dagger = H\)


### Phase Gate
1. **Definition**: The phase gate is a single qubit gate that is used to change the phase of the qubit. The phase gate is also known as the \(R_\phi\) gate. The phase gate is used to change the phase of the qubit in terms of the \(Z\) axis of the Bloch sphere. The phase gate is used to perform the phase-flip operation. The phase gate is the most commonly used gate in quantum computing after the Pauli gates and the Hadamard gate.

2. **Effect on qubit**: The phase gate changes the phase of the qubit from \(+1\) to \(-1\) and vice versa.

PS: wait wait wait! You are probably thinking that this particular operation is performed by Pauli-Z gate as well. I mean exact same operation right. Okay, this Phase gate is a generalization of the Pauli-Z gate. What do I mean by generalization, well both of these gates perform the same operation, but Pauli-Z gate introduces the phase change of \(\pi\) (\(180\) Degrees) to the \(1\rangle\), while the Phase gate introduces a phase change of \(\pi/2\) (\(90\) Degrees) to the \(1\rangle\). Thats the difference between the two gates.

3. **Types**: The phase gate has only one type.

4. **Matrix representation**: The matrix representation of the phase gate is:
    * `Phase gate`: \(\begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix}\)

5. **Circuit representation**: The phase gate is represented as ` ───Rz─── ` in the circuit.

6. **Example**: Let's take an example to demonstrate the phase gate.

Certainly! Let's explore an example demonstrating the working of the phase gate in excruciating detail.

*   **Phase Gate (Rz)**
Suppose we have a qubit initially in the state \( |0\rangle \), represented as:

$$
|q_0\rangle = |0\rangle
\tag{14}
$$

The phase gate is represented by the following matrix:

$$
Rz = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix}
\tag{15}
$$

To apply the phase gate to the qubit \( |q_0\rangle = |0\rangle \), we perform a matrix multiplication of the phase gate matrix with the state vector representing \( |0\rangle \).

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

Therefore, after applying the phase gate, the state of the qubit \( |q_0\rangle \) remains unchanged. Which means the phase gate does not change the state of the qubit, it only changes the phase of the qubit.

Lets take the phase of the qubit to be \(\phi = \pi/2\), then the matrix representation of the phase gate is:

$$
Rz = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/2} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}
\tag{19}
$$

So, after applying the phase gate, the state of the qubit \( |q_0\rangle \) transforms to:

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

7. **Properties**: The properties of the phase gate are:
    * The phase gate is Hermitian, i.e., the conjugate transpose of the gate is equal to the gate itself (i.e., \(Rz^\dagger = Rz\)).
    * The phase gate is involutory, i.e., applying the gate twice results in the identity gate.
    * The phase gate is a unitary gate, i.e., the inverse of the gate is equal to the conjugate transpose of the gate (i.e., \(Rz^{-1} = Rz^\dagger\)).

8. **Conjugate transpose**: The conjugate transpose of the phase gate is:
    * `Phase gate`: \(\begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix}\)

9. **Inverse**: The inverse of the phase gate is:
    * `Phase gate`: \(\begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix}\)

10. **Dagger**: The dagger of the phase gate is:
    * `Phase gate`: \(Rz^\dagger = Rz\)




