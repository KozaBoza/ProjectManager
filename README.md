#           ₊✩‧₊˚౨ৎ˚₊✩‧₊     Automated Project Manager     ₊✩‧₊˚౨ৎ˚₊✩‧₊
## Table of Contents

- [About](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Interface](#interface)

---

## About

The **Project Automation Hub** is a comprehensive solution designed to streamline project and task management for managers. It provides a user-friendly React frontend where managers can define project goals, set deadlines, and assign tasks to employees based on their roles and experience. The collected data is then processed by a Flask backend and seamlessly integrated with n8n workflows to automatically create backlogs and sprints in Jira, assigning tasks to the relevant team members with detailed descriptions.

This project aims to automate the tedious initial setup of project tasks in Jira, allowing managers to focus more on strategic planning and less on administrative overhead.

## Features

* **Employee Management:** Easily add and view employee profiles including position, experience, first name, and last name.
* **Project Goal Definition:** Define project names, add specific notes, and set deadlines.
* **Dynamic Task Assignment:** Associate project goals and tasks with specific employees from the managed list.
* **Jira Integration via n8n:**
    * Automatically create Jira backlogs and sprints.
    * Assign tasks to predefined employees in Jira.
    * Include detailed task descriptions derived from project notes.
* **Intuitive User Interface:** A modern and responsive React frontend for a smooth user experience.
* **Robust Backend:** A Flask-powered API handling data processing and communication with n8n.

## Technologies Used

* **Frontend:**
    * [React](https://reactjs.org/) (with TypeScript)
    * HTML5, CSS3
* **Backend:**
    * [Flask](https://flask.palletsprojects.com/) (Python)
    * [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/)
    * [Requests](https://requests.readthedocs.io/en/latest/)
    * [python-dotenv](https://pypi.org/project/python-dotenv/)
* **Workflow Automation:**
    * [n8n](https://n8n.io/)
* **Project Management:**
    * [Jira Software](https://www.atlassian.com/software/jira)
* **Containerization:**
    * [Docker](https://www.docker.com/)
    * [Docker Compose](https://docs.docker.com/compose/)

## Project Structure
<img width="772" height="215" alt="image" src="https://github.com/user-attachments/assets/4c5b3541-e149-4578-bc88-f67d4db3154e" />

## Interface
<img width="1200" height="832" alt="image" src="https://github.com/user-attachments/assets/e919a63b-a360-4163-b96e-05a7cbb58abd" />
<img width="1176" height="695" alt="image" src="https://github.com/user-attachments/assets/54393ab0-2cc7-43d4-ba19-c39e56668719" />
<img width="1176" height="811" alt="image" src="https://github.com/user-attachments/assets/3104623d-4a80-4f4f-832d-327ed8bb6b6d" />
