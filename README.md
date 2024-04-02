# TypeScript Web Framework

This project is a client-side web framework built with TypeScript. It demonstrates how to build a complex application that fetches data, renders content to the screen, and handles user events. This framework allows for the creation of web applications by defining models, views, and collections, facilitating interactions with a backend server for persistent data storage.

## Features

- Custom web framework inspired by React and Angular.
- Models for handling data and business logic.
- Views for rendering user interfaces and binding events.
- Collections for managing lists of models.
- Integration with a JSON server for backend data persistence.
- Examples of CRUD operations in a web application context.

## Getting Started

To run this project locally, follow the steps below. These instructions assume you have Node.js and npm installed on your machine.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://your-repository-url-here.git
cd web-framework
```

2. Install the dependencies:

```bash
npm install
```

3. Start the JSON server (this will serve as your backend):

```bash
npm run start:db
```

4. In a new terminal, start the application:

```bash
npm run start:parcel
```

This will compile the TypeScript files and serve your application on `http://localhost:1234`. The JSON server will be running on `http://localhost:3000`.

### Structure

The project is structured as follows:

- `src/index.ts`: Entry point of the application.
- `src/models/`: Contains models like `User` and utility classes like `Model`, `Attributes`, `Eventing`, and `ApiSync`.
- `src/views/`: Contains views like `UserForm`, `UserList`, and `UserShow` along with a base `View` class.
- `src/`: Other directories and files include helpers and configurations for the framework.

## Usage

The application demonstrates a simple user management system where you can:

- Display a list of users fetched from the backend.
- Update user details (name and age).
- Persist changes to the backend.

Explore the `src/index.ts` file to see how the application initializes and renders the user list.