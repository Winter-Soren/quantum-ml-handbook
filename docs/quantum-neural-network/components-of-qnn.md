---
sidebar_position: 1
sidebar_label: 2. Components of QNN
---

# Components of Quantum Neural Networks

## Quantum Neurons

In classical counterparts, McCulloch-Pitts neurons are the building blocks of the neural network. These neurons take input, apply an activation function, and produce an output. 

Similarly, in quantum neural networks, quantum neurons are the building blocks. Neurons take quantum states as input, applies quantum circuits, and produces quantum states as output. We can observe that in classical counterpart we have activation functions, whereas in quantum counterpart we have quantum circuits, this is because the laws of  quantum mechanics require the operations on quantum states to be linear and unitary. Whereas in classical neural networks, the activation functions are non-linear. That's the reason why it's hard to design quantum neurons that are as expressive as classical neurons.

PS: what are `the laws` that requires the operations on quantum states to be linear and unitary? Well, it's the principle of superposition and the principle of no-cloning. The principle of superposition states that a quantum state can exist in multiple states at the same time, and the principle of no-cloning states that it is impossible to create an exact copy of an unknown quantum state. These principles are the foundation of quantum mechanics and are the reason why quantum operations must be linear and unitary.

**THE CHALLENGE**: The issue in QNN lies in the problem of incorporating non-linear,, dissipative dynamics of classical neural networks (means the system loses energy to its surroundings) into the linear, unitary framework of quantum mechanics.

The potential resolution attempted so far includes:

1. Repeat-until-success (RUS) circuits.
2. Creating a new type of quantum neuron. (hehe, that's a good one right?)

### Repeat-until-success (RUS) circuits

RUS circuits are a type of quantum circuit that can be used to implement non-linear operations on quantum states. The idea behind RUS circuits is to repeat a quantum circuit until a certain condition is met. This condition can be the measurement outcome of a qubit or the value of a classical register. The key point is that the quantum circuit is repeated until the condition is satisfied. This allows to implement non-linear operations on quantum states.

This is usually accomplished by two steps: the first is to select a universal gate set, and the second is a decomposition algorithm that can create a quantum circuit with a sequence of gates from the universal gate set. 

The Solovay-Kitaev theorem states that any unitary operation can be approximated to arbitrary precision by a sequence of gates from a universal gate set. This means that any non-linear operation can be implemented on a quantum computer by using a sequence of gates from a universal gate set. Using this theorem results that guarantees a single qubit unitary operations can be effciently approximated by a sequence of gates from a universal gate set. There's a catch though, the number of gates required to approximate a unitary operation grows exponentially with the precision of the approximation. Since then, many advances have been made but the circuits designed so far are all deterministic. 

A new approach is discovered, i.e., using non-deterministic quantum circuits. In this kind of circuits, a unitary operation is applied to a quantum state only if a certain expected measurement outcome is observed. Otherwise a cheap unitary operation can be utilized to reverse it. This process can then be repeated until the desired unitary operation is performed and therefore these circuits are called “Repeat-Until-Success” (RUS) circuits. A clear advantage of RUS circuits is their extremely low resource cost.

Let's consider an example of a RUS circuit that implements a non-linear operation on a quantum state. 

```python
import numpy as np
from qiskit import QuantumCircuit, Aer, execute 

# Create a quantum circuit with 2 qubit
qc = QuantumCircuit(2)

# Apply a Hadamard gate to the qubit
qc.h(0)
qc.h(1)

desired_state = np.array([1, 1, 0, 0])

# iterate until the desired state is achieved

while True:
    # Apply a CNOT gate to the qubits
    qc.cx(0, 1)
    
    # Apply a Hadamard gate to the qubit
    qc.h(0)
    qc.h(1)
    
    # Measure the qubits
    qc.measure_all()
    
    # Execute the circuit
    backend = Aer.get_backend('qasm_simulator')
    job = execute(qc, backend, shots=1)
    result = job.result()
    counts = result.get_counts(qc)
    
    # Check if the measurement outcome is the desired state
    if counts == desired_state:
        break
```

In this example, we create a quantum circuit with two qubits and apply a Hadamard gate to each qubit. We then apply a CNOT gate to the qubits and measure the qubits. If the measurement outcome is the desired state, we break out of the loop. Otherwise, we repeat the process until the desired state is achieved. This is an example of a RUS circuit that implements a non-linear operation on a quantum state.

This is how RUS circuit looks like. It's a simple example, but it gives you an idea of how RUS circuits can be used to implement non-linear operations on quantum states.

```
q0: ─── H ─── ● ─── H ─── M ───
              │
q1: ─── H ─── X ─── H ─── M ───
```

### Creating a new type of quantum neuron

to be continued...(I'm still working on this part, I will update it soon. Stay tuned!)

