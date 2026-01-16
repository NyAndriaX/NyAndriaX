# Coding Standards

This document outlines the coding standards and best practices for this project.

## Language Requirements

### English Only for Code

**All code-related elements must be written in English:**

- ✅ **Comments**: All code comments must be in English
- ✅ **Variable names**: All variable names must be in English
- ✅ **Function names**: All function names must be in English
- ✅ **Component names**: All React component names must be in English
- ✅ **File names**: All file names must be in English (except configuration files)
- ✅ **Documentation**: All JSDoc comments and documentation strings must be in English
- ✅ **Error messages**: All error messages and console logs should be in English
- ✅ **Type definitions**: All TypeScript type names and interfaces must be in English

### User-Facing Content

- ✅ **UI text**: User-facing text (labels, buttons, messages) can be in any language as needed
- ✅ **Content**: Page content and descriptions can be in any language

## Code Style Guidelines

### Naming Conventions

- Use descriptive, meaningful names
- Use camelCase for variables and functions: `userName`, `handleClick`
- Use PascalCase for components: `UserProfile`, `NavigationBar`
- Use UPPER_SNAKE_CASE for constants: `MAX_RETRIES`, `API_BASE_URL`
- Use kebab-case for file names: `user-profile.tsx`, `api-client.ts`

### Comments

- Write comments that explain **why**, not **what**
- Use JSDoc for function and component documentation
- Keep comments concise and relevant
- Update comments when code changes

### Example

```typescript
// ❌ Bad: Comment explains what is obvious
// Set the user name
const userName = "John";

// ✅ Good: Comment explains why
// Use lowercase for consistency with backend API
const userName = "John";

// ✅ Good: JSDoc comment
/**
 * Calculates the total price including tax
 * @param price - Base price before tax
 * @param taxRate - Tax rate as decimal (e.g., 0.1 for 10%)
 * @returns Total price including tax
 */
function calculateTotalPrice(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}
```

## React/Next.js Best Practices

### Components

- Use functional components with hooks
- Keep components small and focused on a single responsibility
- Extract reusable logic into custom hooks
- Use TypeScript for all props

### Example

```typescript
// ✅ Good: Functional component with TypeScript
interface UserCardProps {
  name: string;
  email: string;
  avatar?: string;
}

export function UserCard({ name, email, avatar }: UserCardProps) {
  return (
    <div className="user-card">
      <img src={avatar} alt={`${name}'s avatar`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
```

### State Management

- Use `useState` for local component state
- Use `useContext` for shared state across components
- Consider state management libraries (Redux, Zustand) for complex state

### Styling

- Use Tailwind CSS utility classes for styling
- Use Ant Design components when appropriate
- Keep custom CSS to a minimum
- Use CSS modules or styled-components for component-specific styles if needed

## TypeScript Guidelines

- Always use TypeScript types
- Avoid `any` type - use `unknown` if type is truly unknown
- Use interfaces for object shapes
- Use type aliases for unions and intersections

### Example

```typescript
// ✅ Good: Proper TypeScript usage
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserRole = "admin" | "user" | "guest";

function fetchUser(id: string): Promise<ApiResponse<User>> {
  // Implementation
}
```

## File Organization

```
app/
├── components/          # Reusable components
│   ├── ui/             # UI components
│   └── layout/         # Layout components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles
```

## Git Commit Messages

- Use clear, descriptive commit messages
- Use present tense: "Add user authentication" not "Added user authentication"
- Reference issues when applicable: "Fix login bug (#123)"

## Code Review Checklist

- [ ] All code is in English
- [ ] All comments are in English
- [ ] TypeScript types are properly defined
- [ ] Components are properly typed
- [ ] No console.log statements in production code
- [ ] Error handling is implemented
- [ ] Code follows project structure
- [ ] Tests are written (if applicable)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)

