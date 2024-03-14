---
sidebar_position: 5
sidebar_label: 5. Bloch Sphere
---

# Bloch Sphere

Imagine a globe representing the Earth. On this globe, any point you choose can represent a specific location. Similarly, the Bloch sphere is a 3D unit sphere used to visualize the state of a single qubit in quantum mechanics. Just like points on the globe, points on the Bloch sphere represent different possibilities for the qubit's state, but instead of locations, they represent the probabilities of being 0 or 1.

## Classical Analogy

In classical computers, bits can be either 0 or 1. We can think of this as two points on a line, with 0 at one end and 1 at the other. But in quantum computing, qubits can exist in a superposition of 0 and 1, so we need a more complex representation. The Bloch sphere provides a visual way to understand this complex state.

## Mathematical Representation

The state of a qubit can be represented by a point on the Bloch sphere. The north pole represents the state $ |0\rangle $, the south pole represents the state $ |1\rangle $, and the equator represents superposition states. The point on the sphere represents the probability amplitudes $ \alpha $ and $ \beta $ of the qubit being in state $ |0\rangle $ and $ |1\rangle $, respectively.

We try to express qubit's state using complex numbers. Each point on the sphere is defined by two angles $ \theta $ (as latitude) and $ \phi $ (as longitude) and radius $\rho $. These values correspond to the probability of the qubit being 0, the probability of being 1, and the overall "mixedness" of the state, respectively.

<figure markdown="span" align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bloch_sphere.svg/1024px-Bloch_sphere.svg.png" alt="Bloch Sphere" width="300"/>
    <figcaption>Fig 1. Bloch Sphere</figcaption> 
</figure>

For the purpose of understanding, we will divide the Bloch sphere into the northern hemisphere and the southern hemisphere. Then, we will further divide the northern hemisphere into two parts: one part will be the eastern hemisphere, and the other part will be the western hemisphere. Similarly, we will divide the southern hemisphere into two parts: one part will be the eastern hemisphere, and the other part will be the western hemisphere.

1. **Eastern hemisphere of Northern hemisphere**: Superposition states where the qubit is mostly in the $|0\rangle$ state. Mathematically, these states are represented as:

$$
|\psi\rangle = \cos\left(\frac{\theta}{2}\right)|0\rangle + e^{i\phi}\sin\left(\frac{\theta}{2}\right)|1\rangle
\tag{1}
$$

2. **Western hemisphere of Northern hemisphere**: Superposition states where the qubit is mostly in the $|1\rangle$ state. Mathematically, these states are represented as:

$$
|\psi\rangle = \sin\left(\frac{\theta}{2}\right)|0\rangle + e^{i\phi}\cos\left(\frac{\theta}{2}\right)|1\rangle
\tag{2}
$$

3. **Eastern hemisphere of Southern hemisphere**: Superposition states where the qubit is mostly in the $|1\rangle$ state. Mathematically, these states are represented as:

$$
|\psi\rangle = \cos\left(\frac{\theta}{2}\right)|0\rangle - e^{i\phi}\sin\left(\frac{\theta}{2}\right)|1\rangle
\tag{3}
$$

4. **Western hemisphere of Southern hemisphere**: Superposition states where the qubit is mostly in the $|0\rangle$ state. Mathematically, these states are represented as:

$$
|\psi\rangle = -\sin\left(\frac{\theta}{2}\right)|0\rangle - e^{i\phi}\cos\left(\frac{\theta}{2}\right)|1\rangle
\tag{4}
$$

Further diving a little deeper into the vector representation. This is a unit vector (magnitude of 1) that points to a specific location on the sphere. The vector's components (x, y, and z) correspond to the expectation values of the Pauli spin matrices, which are fundamental operators in quantum mechanics.

Here are the equations that relate the Bloch vector $x, y, z$ to the angles ($\theta, \phi$) and the state vector ($\psi$):

$$
\begin{align*}
x &= \sin(\theta) \cos(\phi) \\
y &= \sin(\theta) \sin(\phi) \\
z &= \cos(\theta)
\end{align*}
$$

PS: Pauli spin matrices are a set of three 2x2 complex matrices that are fundamental in quantum mechanics. They are denoted by σx, σy, and σz. They are used to represent the spin of a particle in a magnetic field.

The 2x2 Pauli spin matrices are:

$$
\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad
\sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad
\sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

These matrices are used to represent the spin of a particle in a magnetic field.
Which can be represented in the ket notation as:

$$
\begin{align*}
\sigma_x &= |0\rangle\langle1| + |1\rangle\langle0| \\
\sigma_y &= -i|0\rangle\langle1| + i|1\rangle\langle0| \\
\sigma_z &= |0\rangle\langle0| - |1\rangle\langle1|
\end{align*}
$$

<!-- Okay, now let's try to take an example and will try to plot the state of the qubit on the Bloch sphere.

### Example
Consider a qubit in the state:

$$
|\psi\rangle = \frac{1}{\sqrt{2}}|0\rangle + \frac{i}{\sqrt{2}}|1\rangle
\tag{30}
$$

PS: the $i$ in the equation is the imaginary unit. We are adding here and not in the previous equations because the imaginary unit is a part of the state vector and not the probability amplitudes. Adding i in the probability amplitudes will make the state vector invalid. So, thats why we are adding i in the state vector and not in the probability amplitudes.

We can represent this state on the Bloch sphere using the following steps:

1. **Calculate the angles**: We can calculate the angles $ \theta $ and $ \phi $ using the following equations:

$$
\begin{align*}
\theta &= 2\cos^{-1}\left(\frac{\langle\psi|\sigma_z|\psi\rangle}{||\psi||}\right) \\
\phi &= 2\tan^{-1}\left(\frac{\langle\psi|\sigma_y|\psi\rangle}{\langle\psi|\sigma_x|\psi\rangle}\right)
\end{align*}
$$

Further calculating the values of $ \theta $ and $ \phi $, we get:

$$
\begin{align*}
\langle\psi|\sigma_z|\psi\rangle &= \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{i}{\sqrt{2}} \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}\begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{-i}{\sqrt{2}} \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{i}{\sqrt{2}} \end{bmatrix}\begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{-i}{\sqrt{2}} \end{bmatrix} = \frac{1}{2} + \frac{1}{2} = 1 \\
\langle\psi|\sigma_x|\psi\rangle &= \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{i}{\sqrt{2}} \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}\begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{-i}{\sqrt{2}} \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{i}{\sqrt{2}} \end{bmatrix}\begin{bmatrix} \frac{-i}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix} = 0 \\
\langle\psi|\sigma_y|\psi\rangle &= \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{i}{\sqrt{2}} \end{bmatrix}\begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}\begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{-i}{\sqrt{2}} \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{i}{\sqrt{2}} \end{bmatrix}\begin{bmatrix} \frac{-1}{\sqrt{2}} \\ \frac{-1}{\sqrt{2}} \end{bmatrix} = -1
\end{align*}
$$

After, putting the values of the state vector in the above equations, we get:


 -->

Visualizing the bloch sphere in your mind can be tricky, you can explore the simulation of bloch sphere by exploring the websites below:

1. [Grokking the Bloch Sphere](https://javafxpert.github.io/grok-bloch/)
2. [Bloch Sphere Simulation](https://bits-and-electrons.github.io/bloch-sphere-simulator/)
3. [Bloch Sphere Simulation 2](https://attilakun.net/bloch/)

Feel free to randomly select the state of the qubit and try to plot it on the Bloch sphere. This will help you to understand the concept better. You will also be able to see some quantum gates and their effect on the state of the qubit. We will study about quantum gates in the next section.
