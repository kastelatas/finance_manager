## Financial Manager

Financial Manager is a web application developed for managing finances and keeping track of expenses and income. The application is built using React.js and provides a convenient interface for entering and monitoring financial transactions.

### Features of the application

- User registration and authentication.
- Input and tracking of expenses and income.
- Categorization of financial transactions.
- Generation of reports and statistics on expenses and income.
- Setting a budget and tracking its progress.
- User-friendly interface for financial management.

### Installation and Setup

1. Clone the repository:

```
git clone https://github.com/My-finance-org/finance_manager.git
```

2. Navigate to the project directory:

```
cd finance_manager
```

3. Install the dependencies:
```
npm install
```

4. Start the application:

```
npm start
```

The application will be running at [http://localhost:3000](http://localhost:3000).

### Структура проекта

```
├── src
│   ├── components         # Application components
│   ├── pages              # Application pages
│   ├── services           # Services for API interaction
│   ├── redux              # Redux configuration
│   ├── helpers            # Helper utilities
│   ├── constants          # Constants and helper utilities
│   ├── styles             # Styles and CSS modules
│   ├── apiConfig.js       # API configuration
│   ├── authConfig.js      # Authentication configuration
│   ├── index.js           # Application entry point
│   └── App.js             # Root component of the application
└── public
    ├── index.html         # HTML template file
    └── ...
```

### Dependencies

- React.js - the main library for building user interfaces.
- React Router - for managing application routing.
- Redux - for state management in the application.
- Axios - for making HTTP requests to the API.
- Prop-types - for prop type checking in components.
- CSS Modules - for local styling of components.
