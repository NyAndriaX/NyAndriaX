# Setup Guide

This guide will help you set up the development environment for this project.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.9.0 or higher (recommended)
- **Yarn**: Package manager (version 1.22.22 or higher)
- **Git**: Version control system

### Checking Your Versions

```bash
node --version  # Should be >= 20.9.0
yarn --version  # Should be >= 1.22.22
git --version
```

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd portfolio
```

### 2. Install Dependencies

```bash
yarn install
```

This will install all required dependencies including:
- Next.js 16.1.2
- React 19.2.3
- Tailwind CSS v4
- Ant Design v6.2.0
- TypeScript 5

### 3. Verify Installation

Check that all dependencies are installed correctly:

```bash
yarn list --depth=0
```

## Development

### Start Development Server

```bash
yarn dev
```

The development server will start on [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
yarn build
```

### Start Production Server

```bash
yarn start
```

### Run Linter

```bash
yarn lint
```

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind
├── docs/                   # Documentation files
│   ├── CODING_STANDARDS.md
│   └── SETUP.md
├── public/                 # Static assets
├── .cursorrules           # Cursor IDE rules
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
└── postcss.config.mjs     # PostCSS configuration
```

## Configuration Files

### TypeScript (`tsconfig.json`)

TypeScript configuration for type checking and compilation.

### Next.js (`next.config.ts`)

Next.js framework configuration.

### PostCSS (`postcss.config.mjs`)

PostCSS configuration for Tailwind CSS processing.

### ESLint (`eslint.config.mjs`)

ESLint configuration for code linting.

## Troubleshooting

### Node Version Issues

If you encounter Node.js version errors:

```bash
# Using nvm (Node Version Manager)
nvm install 20
nvm use 20

# Or update Node.js directly
```

### Dependency Installation Issues

If you encounter issues installing dependencies:

```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

### Port Already in Use

If port 3000 is already in use:

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 yarn dev
```

## IDE Setup

### Cursor IDE

This project includes `.cursorrules` file that configures Cursor IDE with:
- English-only code requirements
- Code style guidelines
- Project-specific rules

### VS Code

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## Next Steps

1. Read [CODING_STANDARDS.md](./CODING_STANDARDS.md) for coding guidelines
2. Review the [README.md](../README.md) for project overview
3. Start developing!

## Getting Help

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the documentation files
3. Check Next.js, Tailwind CSS, and Ant Design documentation

