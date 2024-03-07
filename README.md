# Quantum Machine Learning Documentation

This repository contains comprehensive documentation on Quantum Machine Learning (QML), aimed at beginners and practitioners interested in exploring the intersection of quantum computing and machine learning.

## Table of Contents
1. [How to get started with the documentation](#how-to-get-started-with-the-documentation)
2. [Contribution Guidelines](./CONTRIBUTING.md)
3. [Status of the Project](#status-of-the-project)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [License](#license)

## How to get started with the documentation
When you go to the [live website](https://qml-documentation.netlify.app/) or local server [after installation](#installation), you will see the following tabs in the navigation bar:

![Navigation Tabs image](./docs/assets/navigation-tabs.png)
ie: the overview, documentation, references, and the search bar.

* The [`Overview`](https://qml-documentation.netlify.app/) tab contains the introduction to the documentation. 
* The [`Documentation`](https://qml-documentation.netlify.app/documentation/) tab contains the main content of the documentation. 
* The [`References`](https://qml-documentation.netlify.app/references/) tab contains the references used in the documentation. 


The `Documentation` tab contains the following sub-tabs:

![Documentation subtabs](./docs/assets/documentation-subtabs.png)

* The [`Documentation`](https://qml-documentation.netlify.app/documentation/) sub-tab contains a very brief about what is quantum machine learning. 
* The [`Notations`](https://qml-documentation.netlify.app/documentation/notations/) sub-tab contains all the notations used in the documentation. 
* The [`Fundamentals`](https://qml-documentation.netlify.app/documentation/fundamentals/) sub-tab contains the in-depth introduction to concepts of quantum mechanics to understand fundamentals of quantum machine learning. 
* The [`Quantum Gates and Circuits`](https://qml-documentation.netlify.app/documentation/gates-and-circuits/) sub-tab contains the in-depth introduction and walkthrough of quantum gates and circuits.

If you are beginner, then you should start with the `Notations` sub-tab, then move to the `Fundamentals` sub-tab, and then to the `Quantum Gates and Circuits` sub-tab.


## Status of the Project
- [x] The framework of the documentation is ready.
- [x] Overview.
- [x] General issues in QC.
- [x] Notations and representations.
- [X] Fundamentals of Quantum Mechanics.
    - [x] Qubits.
    - [x] Superposition.
    - [x] Entanglement.
    - [x] Bloch Sphere.
- [ ] Understanding Quantum gates (analogy with classical gates).
    - [ ] Single qubit gates.
        - [x] Pauli gates.
        - [ ] Hadamard gate.
        - [ ] Phase gate.
        - [ ] T gate.
        - [ ] S gate.
        - [ ] U gate.
    - [ ] Multi qubit gates.
        - [ ] CNOT gate.
        - [ ] SWAP gate.
        - [ ] Toffoli gate.
        - [ ] Fredkin gate.
        - [ ] Controlled U gate.
        - [ ] Controlled phase gate.
    - [ ] Universal gates.
        - [ ] X, Y, Z gates.
        - [ ] Hadamard gate.
        - [ ] CNOT gate.
        - [ ] Toffoli gate.
        - [ ] SWAP gate.
        - [ ] Fredkin gate.
- [ ] Quantum circuits.
    - [ ] How to construct any circuit.
- [ ] Quantum ML algorithms (algos like SVM, KNN etc).
- [ ] Quantum Neural Networks.
- [ ] Quantum Convolutional Neural Networks.
- [ ] Quantum Generative Adversarial Networks.
- [ ] Quantum Reinforcement Learning.
- [ ] Quantum Transfer Learning.
- [ ] Quantum Autoencoders.


## Installation
before you start, make sure you have the following installed:
- Python 3.6 or later

install virtualenv using pip:
```bash
pip install virtualenv
```

create a virtual environment `for windows` using the following command:
```bash
python -m virtualenv venv
```

create a virtual environment `for linux` using the following command:
```bash
virtualenv venv
```

activate the virtual environment `for windows` using the following command:
```bash
venv\Scripts\activate
```

activate the virtual environment `for linux` using the following command:
```bash
source venv/bin/activate
```

install the required packages using the following command:
```bash
pip install -r requirements.txt
```

starting the mkdocs server
```bash
mkdocs serve
```

now you can access the documentation at `http://localhost:8000/` in your browser.

## Project Structure
The project structure is as follows:
```
├───.github
│   ├───ISSUE_TEMPLATE
│   └───workflows
├───docs
│   ├───assets
│   ├───documentation
│   |   ├───index.md
│   |   ├───concepts.md
│   |   ├───notations.md
│   ├───javascripts
|   |   |───katex.js
|   |   |───mathjax.js
│   ├───overview
│   |   ├───index.md
│   ├───references
│   └───stylesheets
│       └───extra.css
└───mkdocs.yml
```

`mkdocs.yml` is the configuration file for the documentation, it contains the site name, the pages, and the theme.

`docs` is the folder that contains the documentation pages, it contains the `index.md` file which is the home page of the documentation, and the `stylesheets` folder which contains the `extra.css` file that contains the custom styles for the documentation.

To create a new page (ie the tab), go to `docs` folder and create a new markdown file with the name of the page you want to create. Automatically, the new page will be added to the navigation bar.

If you want to add any new pulgins, then refer to this website for reference [mkdocs plugins](https://squidfunk.github.io/mkdocs-material/plugins/)

If you want to change the setup of the documentation, then refer to this website for reference [mkdocs setup](https://squidfunk.github.io/mkdocs-material/setup/)





## License
MIT License

