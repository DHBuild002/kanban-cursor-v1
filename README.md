# React Kanban App

This is a simple Kanban board application built with React. The app allows users to manage tasks across three different states: TODO, In Progress, and Done.

## Project Structure

The project is organized as follows:

```
react-kanban-app
├── public
│   ├── index.html        # Main HTML file for the React application
│   └── manifest.json     # Metadata about the application
├── src
│   ├── index.tsx         # Entry point of the React application
│   ├── App.tsx           # Main App component
│   ├── components         # Contains all React components
│   │   ├── Header        # Header component with avatar and sign-in button
│   │   │   ├── Header.tsx
│   │   │   ├── Avatar.tsx
│   │   │   └── SignInButton.tsx
│   │   ├── Main          # Main component with lists and command input
│   │   │   ├── Main.tsx
│   │   │   ├── CommandInput.tsx
│   │   │   └── lists
│   │   │       ├── TodoList.tsx
│   │   │       ├── InProgressList.tsx
│   │   │       └── DoneList.tsx
│   └── styles            # CSS styles for the application
│       └── App.css
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-kanban-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- User authentication with a sign-in button.
- Task management with three lists: TODO, In Progress, and Done.
- A prominent input field for user commands.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.