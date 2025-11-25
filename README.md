# Smart Spare - Waste Reduction Mobile App

A full-stack mobile application designed to help users reduce food waste by tracking their pantry inventory and getting personalized recipe suggestions.

## Project Structure

```
Smart-Spare/
├── backend/          # NestJS backend API
│   ├── prisma/       # Database schema and migrations
│   └── src/          # Source code
│       ├── auth/     # Authentication module
│       └── ...
└── frontend/         # React Native (Expo) mobile app
    └── src/
        ├── screens/  # App screens
        └── navigation/ # Navigation setup
```

## Features

### Backend
- **NestJS Framework** with TypeScript
- **PostgreSQL Database** with Prisma ORM
- **Authentication System** with JWT tokens
- **User Management** with email/password signup
- **RESTful API** with validation
- **UUID Primary Keys** for scalability

### Frontend
- **React Native** with Expo for cross-platform development
- **Tab Navigation** with three main screens:
  - **Pantry**: Track your food inventory
  - **Suggestions**: Get recipe ideas to reduce waste
  - **Settings**: Configure your preferences
- **TypeScript** for type safety
- **React Navigation** for seamless navigation

## Getting Started

### Prerequisites

- Node.js v20.x or higher
- npm v10.x or higher
- PostgreSQL database (local or cloud)
- Expo Go app (for mobile testing)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your database credentials:
```
DATABASE_URL="postgresql://username:password@localhost:5432/smart_spare?schema=public"
JWT_SECRET="your-super-secret-jwt-key"
```

4. Run Prisma migrations (when database is available):
```bash
npx prisma migrate dev --name init
```

5. Generate Prisma client:
```bash
npx prisma generate
```

6. Start the development server:
```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the Expo development server:
```bash
npm start
```

4. Run on your device:
   - Scan the QR code with Expo Go app (Android)
   - Scan the QR code with Camera app (iOS)
   - Press `w` to run on web browser
   - Press `a` to run on Android emulator
   - Press `i` to run on iOS simulator

## API Endpoints

### Authentication

- `POST /auth/signup` - Create a new user account
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword",
    "firstName": "John",
    "lastName": "Doe"
  }
  ```

- `POST /auth/login` - Login with email and password
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```

- `GET /auth/profile` - Get current user profile (requires JWT token)

## Database Schema

### User Model
- `id` (UUID, Primary Key)
- `email` (String, Unique)
- `password` (String, Hashed)
- `firstName` (String, Optional)
- `lastName` (String, Optional)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

### Category Model
- `id` (UUID, Primary Key)
- `name` (String, Unique)
- `description` (String, Optional)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

## Development Commands

### Backend
```bash
npm run start          # Start production server
npm run start:dev      # Start development server with hot reload
npm run build          # Build for production
npm run test           # Run tests
npm run lint           # Run linter
```

### Frontend
```bash
npm start              # Start Expo development server
npm run android        # Run on Android
npm run ios            # Run on iOS
npm run web            # Run on web
npx tsc --noEmit       # Type check without emitting files
```

## Running Commands for Specific Environments

To run the backend for specific environments (e.g., `dev`, `prod`, `sophie`, `iftemum`, `josh`), you can use the following commands. These commands rely on the `.env` files located in the `backend` directory.

### Example Commands:

- **Development Environment**:
  ```bash
  npm run start:dev
  ```

- **Production Environment**:
  ```bash
  npm run start:prod
  ```

- **Sophie’s Environment**:
  ```bash
  npm run start:sophie
  ```

- **Iftemum’s Environment**:
  ```bash
  npm run start:iftemum
  ```

- **Josh’s Environment**:
  ```bash
  npm run start:josh
  ```

### Adding or Modifying Environments

1. Create a new `.env` file in the `backend` directory (e.g., `.env.newenv`).
2. Add the necessary environment variables (e.g., `DATABASE_URL`, `JWT_SECRET`).
3. Add a new script in the `package.json` file:
   ```json
   "start:newenv": "dotenv -e .env.newenv -- nest start --watch"
   ```
4. Run the new environment:
   ```bash
   npm run start:newenv
   ```

## Technologies Used

### Backend
- NestJS - Progressive Node.js framework
- Prisma - Next-generation ORM
- PostgreSQL - Relational database
- Passport.js - Authentication middleware
- JWT - JSON Web Tokens for auth
- bcrypt - Password hashing
- class-validator - Validation decorators

### Frontend
- React Native - Mobile framework
- Expo - Development platform
- React Navigation - Navigation library
- TypeScript - Type-safe JavaScript

## License

This project is licensed under the MIT License - see the LICENSE file for details.