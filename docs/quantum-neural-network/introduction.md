---
sidebar_position: 0
sidebar_label: 1. Introduction
---

# Introduction

Our classical neural network is a mathematical model that is inspired by the human brain. It is composed of layers of neurons that are connected to each other. Each neuron is a mathematical function that takes an input and produces an output. The output of one neuron is the input to the next neuron. The network is trained by adjusting the weights of the connections between neurons to minimize the error between the predicted output and the actual output. This is what we have learned.

In quantum neural networks, we replace the classical neurons with quantum neurons. A quantum neuron is a quantum circuit that takes a quantum state as input and produces a quantum state as output. The quantum state is represented by a vector of complex numbers called amplitudes. The amplitudes are the probabilities of measuring the quantum state in different states. The quantum circuit is composed of quantum gates that perform operations on the quantum state. The quantum gates are the building blocks of the quantum circuit. They are the equivalent of the mathematical functions in classical neural networks.

Ouch..! That went bouncing over my head. No worries, lets break it down.

QNN consist of entirely different learning schemes than its counter classical part. QNN apply this principle by combining classical neural network and parameterized quantum circuits.

Let's consider two views of QNN:

1. From a **machine learning perspective**, QNNs are algorithmic models that can be trained to find hidden patterns in data in a similar manner to their classical counterparts. These models can load classical data (inputs) into a quantum state, and later process it with quantum gates parametrized by trainable weights. The output of the quantum circuit is then measured and used to compute the loss function, which is minimized during training. 

2. From a **quantum computing perspective**, QNNs are quantum algorithms based on parametrized quantum circuits that can be trained in a variational manner using classical optimizers. These circuits contain a feature map (with input parameters) and an ansatz (with trainable weights).

PS: variational manner means that the quantum circuit is trained by adjusting the parameters of the quantum gates to minimize the error between the predicted output and the actual output. And ansatz is a guess for the form of the quantum state that is used to initialize the quantum circuit (guess as in the initial state of the quantum circuit).

Another PS: As you can see, these two perspectives are complementary, and do not necessarily rely on strict definitions of concepts such as “quantum neuron” or what constitutes a QNN’s “layer”. The key point is that QNNs are hybrid models that combine classical and quantum components to perform machine learning tasks.


## Types of Quantum Neural Networks

Just like the types of classical neural networks, quantum neural networks can be categorized into different types based on their architecture and the way they are trained. Some of the common types of quantum neural networks are:

1. Quantum Circuit Learning
2. Quantum Boltzmann Machine
3. Quantum Convolutional Neural Network
4. Quantum Recurrent Neural Network
5. Quantum Generative Adversarial Network
6. Quantum Hopfield Network
7. Quantum Associative Memory
8. Quantum Restricted Boltzmann Machine
9. Quantum Autoencoder


We will slowly dive into each of these types in the upcoming chapters. But before that, let's understand the basic components of a quantum neural network, forward and backward propagation, and how to train a quantum neural network.

Pissst...! This ride is going to be really bumpy and interesting, not because it's very similar to classical part, but because it involves really complex quantum circuits. If you are not familiar with quantum circuits, I would recommend you to go through the basics of quantum computing and quantum gates/circuits before diving into this part.

Let's get started..!

