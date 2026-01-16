# Portfolio Architecture Documentation

This document describes the architecture and structure of the portfolio project.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/           # React components
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx    # Main header with logo and nav
│   │   │   └── Navigation.tsx # Navigation menu component
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.tsx      # Hero section with name/title
│   │   │   └── FeaturedIn.tsx # Featured companies section
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Logo.tsx      # Logo with blinking cursor
│   │   │   ├── Background3D.tsx # 3D background elements
│   │   │   └── ScrollIndicator.tsx # Scroll down indicator
│   │   └── index.ts          # Barrel exports
│   ├── lib/                  # Utility functions and constants
│   │   ├── constants.ts     # Application constants
│   │   └── utils.ts         # Helper functions
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts         # Type exports
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── public/
│   └── logos/                # Company logo images
├── docs/                     # Documentation
│   ├── ARCHITECTURE.md      # This file
│   ├── CODING_STANDARDS.md  # Coding standards
│   └── SETUP.md             # Setup guide
└── .cursorrules              # Cursor IDE rules
```

## 🏗️ Architecture Overview

### Component Structure

The project follows a modular, component-based architecture:

1. **Layout Components** (`components/layout/`)
   - High-level structural components
   - Header, Navigation, Footer (future)

2. **Section Components** (`components/sections/`)
   - Full-page sections
   - Hero, FeaturedIn, Work, Experience (future)

3. **UI Components** (`components/ui/`)
   - Reusable, presentational components
   - Logo, Buttons, Cards, etc.

### Separation of Concerns

- **Components**: UI and presentation logic
- **Lib**: Business logic, constants, utilities
- **Types**: TypeScript type definitions
- **Styles**: Global styles and Tailwind configuration

## 📦 Component Details

### Header Component
- **Location**: `app/components/layout/Header.tsx`
- **Purpose**: Contains logo and navigation
- **Dependencies**: Logo, Navigation components

### Navigation Component
- **Location**: `app/components/layout/Navigation.tsx`
- **Purpose**: Displays menu items with "//" prefix
- **Data**: Uses NAVIGATION_ITEMS from constants

### Hero Component
- **Location**: `app/components/sections/Hero.tsx`
- **Purpose**: Main landing section with name and title
- **Data**: Uses HERO_CONTENT from constants

### FeaturedIn Component
- **Location**: `app/components/sections/FeaturedIn.tsx`
- **Purpose**: Displays company logos
- **Data**: Uses COMPANY_LOGOS from constants

### Background3D Component
- **Location**: `app/components/ui/Background3D.tsx`
- **Purpose**: Creates 3D geometric background elements
- **Features**: Animated cubes and glowing orb

### ScrollIndicator Component
- **Location**: `app/components/ui/ScrollIndicator.tsx`
- **Purpose**: Indicates scrollable content
- **Functionality**: Smooth scroll to next section

## 🔧 Utilities and Constants

### Constants (`lib/constants.ts`)
- Navigation items configuration
- Company logos data
- Hero content text
- Logo text

### Utils (`lib/utils.ts`)
- `cn()`: Class name combiner
- `scrollToSection()`: Smooth scroll helper

## 🎨 Styling Architecture

### Tailwind CSS
- Utility-first CSS framework
- Custom theme configuration in `globals.css`
- Responsive design with breakpoints

### Custom Animations
- Float animations for 3D elements
- Pulse animations for cursor
- Bounce animation for scroll indicator

### Color Palette
- Dark blue background: `#0a0f1e`
- Cyan accent: `#00d9ff`
- Purple accent: `#a855f7`
- Orange accent: `#ff6b35`

## 📝 Type Definitions

All TypeScript types are centralized in `app/types/index.ts`:

- `NavigationItem`: Navigation menu item structure
- `CompanyLogo`: Company logo data structure
- `HeroContent`: Hero section content structure

## 🚀 Adding New Components

### Step 1: Create Component File
Create the component in the appropriate directory:
- Layout: `components/layout/`
- Section: `components/sections/`
- UI: `components/ui/`

### Step 2: Export from Index
Add export to `components/index.ts`:
```typescript
export { default as NewComponent } from "./path/NewComponent";
```

### Step 3: Use in Page
Import and use in `page.tsx`:
```typescript
import { NewComponent } from "./components";
```

## 🔄 Data Flow

1. **Constants** → Define data in `lib/constants.ts`
2. **Types** → Define types in `types/index.ts`
3. **Components** → Import constants and types
4. **Page** → Compose components together

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible layouts with Tailwind grid and flexbox

## 🎯 Best Practices

1. **Component Isolation**: Each component is self-contained
2. **Reusability**: UI components are reusable across sections
3. **Type Safety**: All components use TypeScript types
4. **Performance**: Client components only when needed ("use client")
5. **Accessibility**: Semantic HTML and ARIA labels

## 🔮 Future Enhancements

- [ ] Add more sections (Work, Experience, Contact)
- [ ] Implement dark/light theme toggle
- [ ] Add animations on scroll
- [ ] Add loading states
- [ ] Implement contact form
- [ ] Add project showcase section

