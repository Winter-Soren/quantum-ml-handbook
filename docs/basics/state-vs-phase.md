---
sidebar_position: 6
sidebar_label: 6. State vs Phase of Qubit
---

# 5. State vs Phase of the Qubit
State of the qubit and phase of the qubit are two different concepts. Let's understand them one by one.

## State of the Qubit
The state of a qubit is represented by a point on the Bloch sphere. As in the previous studies, we have seen that the state of a qubit can be represented by a vector. This vector can be represented by a point on the Bloch sphere. The state of the qubit can be in any of the following states:

1. **$ |0\rangle $ state**: This state is represented by the north pole of the Bloch sphere. This is the state where the qubit is definitely in the state 0. The probability of the qubit being in state 0 is 1 and the probability of the qubit being in state 1 is 0.

2. **$ |1\rangle $ state**: This state is represented by the south pole of the Bloch sphere. This is the state where the qubit is definitely in the state 1. The probability of the qubit being in state 0 is 0 and the probability of the qubit being in state 1 is 1.

3. **Superposition state**: This state is represented by a point on the equator of the Bloch sphere. This is the state where the qubit is in a combination of both states 0 and 1. The probability of the qubit being in state 0 is $ |\alpha|^2 $ and the probability of the qubit being in state 1 is $ |\beta|^2 $. The sum of the probabilities is 1, which is a requirement for a qubit to be in a valid superposition state.

## Phase of the Qubit
The phase of a qubit represents the angle of the state vector on the Bloch sphere. The phase of the qubit is represented by the angle $ \phi $ in the state vector. 

Matheatically, the phase of the qubit is represented as the argument of the complex number $ \alpha $ and $ \beta $. The argument of a complex number is the angle between the positive real axis and the line joining the point to the origin. The argument of a complex number is represented by the angle $ \phi $ in the state vector. The phase of the qubit is a complex number that represents the probability amplitudes of the qubit being in state 0 and state 1.

$$
\phi = \arg(\beta) - \arg(\alpha) 
\tag{1}
$$

The phase of a qubit is significant because it influences the interference of the qubit. This interference affects the probability of the qubit being in state 0 or state 1. The phase of a qubit is crucial because it impacts the interference patterns observed when multiple qubits are combined in quantum algorithms. While the magnitudes of $ \alpha $ and $ \beta $ determine the probabilities of measurement outcomes, their relative phase can lead to constructive or destructive interference, influencing the overall behavior of quantum systems.