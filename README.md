# Quantum Machine Learning Documentation

This repository contains comprehensive documentation on Quantum Machine Learning (QML), aimed at beginners and practitioners interested in exploring the intersection of quantum computing and machine learning.

## Table of Contents
1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Status of the Project](#status-of-the-project)
4. [Contributing](#contributing)
5. [License](#license)

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
|    |-index.md
|    └───stylesheets
|        ├───extra.css
|-mkdocs.yml           
```

`mkdocs.yml` is the configuration file for the documentation, it contains the site name, the pages, and the theme.

`docs` is the folder that contains the documentation pages, it contains the `index.md` file which is the home page of the documentation, and the `stylesheets` folder which contains the `extra.css` file that contains the custom styles for the documentation.

To create a new page (ie the tab), go to `docs` folder and create a new markdown file with the name of the page you want to create. Automatically, the new page will be added to the navigation bar.

If you want to add any new pulgins, then refer to this website for reference [mkdocs plugins](https://squidfunk.github.io/mkdocs-material/plugins/)

If you want to change the setup of the documentation, then refer to this website for reference [mkdocs setup](https://squidfunk.github.io/mkdocs-material/setup/)


## Status of the Project
- [x] The framework of the documentation is ready.
- [x] Overview.
- [x] General issues in QC.
- [x] Notations and representations.
- [ ] Concepts (indepth intro to entanglement, superposition, block sphere, etc).
    - [x] Qubits.
    - [x] Superposition.
    - [ ] Entanglement.
    - [ ] Bloch Sphere.
- [ ] Playing with qubits using concepts.
- [ ] Understanding Quantum gates (analogy with classical gates).
- [ ] Quantum circuits.
- [ ] How to construct any circuit.
- [ ] Quantum ML algorithms (algos like SVM, KNN etc).



## Contribution
Contributions to this documentation are welcome! Feel free to submit pull requests, report issues, or suggest improvements to help make this resource even better for the community.

## License
MIT License

