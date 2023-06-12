# ToDo

[![GitHub Actions](https://github.com/NadyKamenskaya/ToDo/actions/workflows/github-actions.yml/badge.svg)](https://github.com/NadyKamenskaya/ToDo/actions/workflows/github-actions.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/8564f828fa549b0b570c/maintainability)](https://codeclimate.com/github/NadyKamenskaya/ToDo/maintainability)

## Description

ToDo is an app to create your task lists.

## Features

* Add a new task 
* Delete an entire list of tasks or a single task
* View the list of added tasks
* Change the status of a task by clicking on its name
* Filtering by task status
* Viewing the counter of completed and uncompleted tasks

[_**Link to the Test Assignment**_](https://drive.google.com/file/d/17i3HWkCW8OdvmczEcE2p3q-ljU-2sAWz/view)

## Minimum requirements

_Make sure you have Node.js version 20.1 or higher installed_

## Get started

### Clone repository

```bash
git clone git@github.com:NadyKamenskaya/ToDo.git
```

### Install dependencies

```bash
make install
```

### App builder

```bash
make run-build
```

### Running the application

```bash
make start
```

### Lintering

```bash
make lint
```

## Docker

_Make sure you have Docker installed and running_

### Create an image

```bash
sudo docker build -t "[IMAGE NAME]"
```

### Run the container

```bash
sudo docker run -d --rm -p 3000:3000 [IMAGE NAME]
```

## Demo

https://github.com/NadyKamenskaya/ToDo/assets/106657729/55d5c342-b7ef-417e-b1e1-4f1fcf258cc4

_You can try UX/UI-friendly react app by clicking on the link below!_ 👇🏻

[_**Click me**_](https://nady-to-do.vercel.app/)
