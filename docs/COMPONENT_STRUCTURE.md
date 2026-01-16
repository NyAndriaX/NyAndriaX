# Component Structure Guide

This guide provides a quick reference for all components in the portfolio project.

## 📋 Component Index

### Layout Components

#### Header (`components/layout/Header.tsx`)
- **Purpose**: Main header containing logo and navigation
- **Props**: None
- **Dependencies**: Logo, Navigation
- **Usage**: `<Header />`

#### Navigation (`components/layout/Navigation.tsx`)
- **Purpose**: Navigation menu with "//" prefix styling
- **Props**: None
- **Dependencies**: NAVIGATION_ITEMS constant, scrollToSection utility
- **Usage**: `<Navigation />`

### Section Components

#### Hero (`components/sections/Hero.tsx`)
- **Purpose**: Main landing section with name and professional title
- **Props**: None
- **Dependencies**: HERO_CONTENT constant
- **Usage**: `<Hero />`
- **ID**: `#home` (for navigation)

#### FeaturedIn (`components/sections/FeaturedIn.tsx`)
- **Purpose**: Displays company logos section
- **Props**: None
- **Dependencies**: COMPANY_LOGOS constant, Next.js Image
- **Usage**: `<FeaturedIn />`

### UI Components

#### Logo (`components/ui/Logo.tsx`)
- **Purpose**: Portfolio logo with blinking cursor effect
- **Props**: None
- **Dependencies**: LOGO_TEXT constant
- **Usage**: `<Logo />`
- **Features**: Animated blinking underscore

#### Background3D (`components/ui/Background3D.tsx`)
- **Purpose**: 3D geometric background elements
- **Props**: None
- **Dependencies**: None
- **Usage**: `<Background3D />`
- **Features**: Floating cubes, glowing orb, animations

#### ScrollIndicator (`components/ui/ScrollIndicator.tsx`)
- **Purpose**: Scroll down indicator button
- **Props**: None
- **Dependencies**: scrollToSection utility
- **Usage**: `<ScrollIndicator />`
- **Features**: Bounce animation, smooth scroll

## 🔗 Component Dependencies

```
page.tsx
├── Header
│   ├── Logo
│   └── Navigation
├── Hero
├── FeaturedIn
├── Background3D
└── ScrollIndicator
```

## 📦 Data Flow

```
constants.ts (Data)
    ↓
Components (Display)
    ↓
page.tsx (Composition)
```

## 🎨 Styling

All components use:
- **Tailwind CSS** for utility classes
- **Custom animations** from `globals.css`
- **Responsive design** with Tailwind breakpoints

## 🔧 Utilities Used

- `cn()`: Class name combiner (from `lib/utils.ts`)
- `scrollToSection()`: Smooth scroll helper (from `lib/utils.ts`)

## 📝 Constants Used

- `NAVIGATION_ITEMS`: Navigation menu items
- `COMPANY_LOGOS`: Company logo data
- `HERO_CONTENT`: Hero section text
- `LOGO_TEXT`: Logo text

## 🚀 Adding a New Component

1. Create component file in appropriate directory
2. Add TypeScript types if needed
3. Export from `components/index.ts`
4. Import and use in `page.tsx`
5. Add constants if component needs data

## 📱 Component Best Practices

1. **Single Responsibility**: Each component has one clear purpose
2. **Reusability**: UI components are designed to be reusable
3. **Type Safety**: All props are typed with TypeScript
4. **Client Components**: Use "use client" only when needed
5. **Accessibility**: Include ARIA labels and semantic HTML

