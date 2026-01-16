# Portfolio Project

A modern portfolio website built with Next.js, Tailwind CSS, and Ant Design.

## 🚀 Tech Stack

- **Framework**: [Next.js 16.1.2](https://nextjs.org/) with App Router
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Ant Design v6.2.0](https://ant.design/)
- **Package Manager**: Yarn
- **React**: 19.2.3

## 📋 Prerequisites

- Node.js >= 20.9.0 (recommended)
- Yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
yarn install
```

## 🏃 Development

Start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit files in the `app` directory.

## 📦 Build

Build the application for production:

```bash
yarn build
```

Start the production server:

```bash
yarn start
```

## 🧪 Testing

The project includes a test page that demonstrates:
- Tailwind CSS functionality (gradients, spacing, typography)
- Ant Design components (buttons, forms, cards, progress bars, etc.)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout with fonts and global styles
│   ├── page.tsx        # Home page with component demonstrations
│   └── globals.css    # Global CSS with Tailwind imports
├── public/             # Static assets
├── .cursorrules        # Cursor IDE rules for code standards
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── next.config.ts      # Next.js configuration
└── postcss.config.mjs  # PostCSS configuration for Tailwind
```

## 🎨 Styling

### Tailwind CSS

Tailwind CSS v4 is configured and ready to use. Import styles are in `app/globals.css`:

```css
@import "tailwindcss";
```

### Ant Design

Ant Design components are imported in `app/layout.tsx`:

```typescript
import "antd/dist/reset.css";
```

## 📝 Code Standards

This project follows strict coding standards:

- **All code must be in English**: comments, variables, functions, components
- **User-facing text**: Can be in any language as needed
- **Documentation**: All JSDoc and documentation strings in English
- **File names**: In English (except configuration files)

See `.cursorrules` for complete coding standards.

## 🔧 Configuration Files

- `tsconfig.json`: TypeScript compiler options
- `next.config.ts`: Next.js configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS
- `eslint.config.mjs`: ESLint configuration

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [Ant Design Documentation](https://ant.design/docs/react/introduce) - Learn about Ant Design components
- [React Documentation](https://react.dev/) - Learn about React

## 🚢 Deployment

The easiest way to deploy this Next.js app is using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is private.

## 👤 Author

Portfolio project - 2026
