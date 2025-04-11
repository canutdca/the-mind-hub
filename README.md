# The Mind Hub - Technical Test

## Description
This project is a web application developed with Next.js that implements different functionalities as part of a technical test. The application includes:

- Todo List
- User Profile
- Product list with filtering

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) - For managing Node.js versions
- Else, you can use any other method to install Node.js 22.11.0 or higher

## Quick Start
Get up and running in minutes with these simple steps:

1. **Install Node.js version** (optional)
   ```bash
   nvm use
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## Technologies Used
- Next.js 14
- TypeScript
- SCSS Modules
- Jest and React Testing Library for testing
- Clean Architecture

## Project Structure
```
src/
├── app/                    # Application pages and components
│   ├── _core/             # Core application components
│   ├── _shared/           # Shared components
│   ├── home/              # Home page and Todo List components
│   ├── profile/           # Profile page and components
│   └── products/          # Products page and components
├── contexts/              # Business logic and services
│   ├── products/          # Products context
│   │   ├── application/   # Use cases
│   │   ├── domain/       # Domain models
│   │   └── repository/   # Repositories
│   └── user/             # User context
└── styles/               # Global styles
```

## Implemented Features

### Todo List
- Task creation and deletion
- Local data persistence

### User Profile
- User information display
- Profile picture
- Asynchronous data loading
- Loading state management

### Product List
- Product display
- Real-time filtering
- Asynchronous data loading
- Loading state management

## Installation and Execution

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run in development mode:
```bash
npm run dev
```

4. Run tests:
```bash
npm test
```

## Architecture and Design Patterns

### Clean Architecture
The project follows Clean Architecture principles, separating logic into layers:
- **Domain**: Business models and entities
- **Application**: Use cases and business logic
- **Repository**: Data access and external services

### Components
- Functional components with TypeScript
- Custom hooks for business logic
- SCSS Modules for encapsulated styles

### Testing
- Unit tests for components
- Tests for custom hooks
- Tests for use cases

## Future Improvements
- Implement a theme system
- Unify styles
- Better use of CSS variables
- Add internationalization
- Use faker for tests
