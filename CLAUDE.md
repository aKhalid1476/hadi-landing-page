# CLAUDE.md — Hadi AI Landing Page

## Project Overview

This project is a modern landing page for **Hadi AI**, a startup building AI-powered study tools for Islamic education.

The landing page serves three primary purposes:

- Communicate the vision and credibility of the product
- Explain the core value proposition clearly and simply
- Capture early user interest through a waitlist system

The design should feel **intentional, minimal, and premium**, emphasizing clarity, typography, and whitespace rather than heavy UI components.

The landing page should reflect trust, authenticity, and intellectual seriousness appropriate for an educational product grounded in religious scholarship.

---

# Core Principles

## Product Communication

The landing page should emphasize:

- Authentic knowledge
- Responsible use of AI
- Scholarly oversight and verification
- High-quality educational tooling

Avoid hype-driven language. The tone should be calm, confident, and credible.

---

## Engineering Philosophy

The project should follow modern frontend and backend engineering practices:

- Clean component architecture
- Strict typing
- Server-first rendering where possible
- Clear separation between UI, business logic, and data access
- Security-first backend handling
- Maintainable and readable code

---

# Tech Stack

## Frontend

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Component primitives (such as shadcn/ui)
- Framer Motion for minimal animations
- next/image for optimized images
- next/font for typography

## Backend

- Supabase Postgres database
- Next.js Route Handlers for API logic
- Zod validation for request inputs

## Infrastructure

- Vercel deployment
- Supabase hosted database
- Environment-based configuration

---

# Design System

## Visual Style

The design should prioritize:

- Strong typography
- Soft gradients
- Generous whitespace
- Rounded surfaces
- Minimal borders
- Subtle shadows
- Clean visual hierarchy

Animations should be subtle and limited to:

- Hover elevation
- Fade-in transitions
- Minor motion accents

Avoid large-scale animations or distracting motion.

---

# Layout System

## Page Structure

The landing page is a **single-page layout** composed of multiple sections.

Typical sections may include:

- Navigation
- Hero introduction
- Product visualization
- Trust or credibility indicators
- Team introduction
- Supporting information
- Footer

The structure should remain simple and easily scannable.

---

## Responsive Behavior

The layout must be responsive and optimized for:

- Desktop
- Tablet
- Mobile

Sections that appear side-by-side on larger screens should stack vertically on smaller devices.

Spacing and typography should scale appropriately across breakpoints.

---

# Navigation

The navigation bar should contain:

- Brand identity
- Navigation links to major sections of the page
- A primary call-to-action

The navigation should remain lightweight and avoid excessive UI complexity.

---

# Hero Section

The hero section communicates the core value of the product.

It should contain:

- A primary headline explaining the concept
- Supporting text that expands on the product's purpose
- A primary conversion action
- A visual representation of the product interface

The layout should typically follow a two-column structure on large screens.

---

# Product Visualization

A visual representation of the product interface should appear in the hero section.

This visualization should be a **static UI mock** demonstrating a core concept of the platform.

The goal is not functional accuracy but visual communication of the product’s idea.

The visual container should:

- Use soft gradients or background effects
- Contain a card-like UI mockup
- Demonstrate structured content or knowledge sources

---

# Credibility Section

The page should include a section that communicates credibility.

This may include:

- Institutional associations
- Scholarly guidance
- Organizational partnerships

The presentation should remain understated and professional.

---

# Team Section

The page should include a section introducing the team behind the product.

Each profile card should include:

- Profile image
- Name
- Role or affiliation
- Short descriptive biography

Cards should be visually consistent and use a clean, minimal layout.

---

# Waitlist System

The landing page must allow users to join a waitlist.

This functionality should be implemented through a **backend API route connected to Supabase**.

The frontend should not write directly to the database.

Instead, the flow should be:
Frontend form
↓
Next.js API route
↓
Supabase database

This ensures:

- Proper validation
- Rate limiting
- Security controls
- Controlled data access

---

# Supabase Database Design

A Supabase Postgres table should store waitlist entries.

Typical fields may include:

- Unique identifier
- Email address
- Optional user metadata
- Timestamp of submission

The email field should enforce uniqueness to prevent duplicates.

Indexes should be added where appropriate to improve query performance.

---

# Row Level Security

Row Level Security should be enabled on the table.

Policies should restrict:

- Public read access
- Direct client inserts

Database writes should occur through a secure server-side API.

This prevents misuse or abuse of the database.

---

# API Design

An API endpoint should handle waitlist submissions.

The endpoint should:

- Accept validated input data
- Normalize user input
- Insert records into the database
- Handle duplicate submissions gracefully

Responses should communicate success, duplication, validation errors, or system failures appropriately.

---

# Input Validation

All API inputs should be validated using a schema validation library.

Validation rules should include:

- Proper email formatting
- Reasonable length constraints
- Sanitization of input values

Validation should occur **before database interaction**.

---

# Security Practices

Backend code should follow basic security practices:

- Never expose database service keys to the client
- Normalize and validate user input
- Apply rate limiting to API endpoints
- Avoid logging sensitive user data
- Use environment variables for credentials

---

# Frontend Form Behavior

The waitlist form should provide a clean and responsive user experience.

Typical states include:

- Idle
- Submitting
- Success
- Duplicate entry
- Error

The UI should clearly communicate the result of the submission.

---

# Accessibility

The UI must follow accessibility best practices:

- Inputs must include labels
- Interactive elements must be keyboard accessible
- Modal dialogs must trap focus
- Semantic HTML should be used where possible

Accessibility should not be treated as an afterthought.

---

# Performance Guidelines

The landing page should load quickly and remain lightweight.

Key practices include:

- Prefer server-rendered components
- Minimize client-side JavaScript
- Optimize images
- Avoid large third-party dependencies
- Lazy load non-critical elements

---

# SEO Requirements

The page should include standard metadata for search engines and social previews.

Typical metadata includes:

- Title
- Description
- Open Graph tags
- Social sharing metadata
- Canonical URLs

---

# Repository Structure

A clean repository structure should be maintained.

Typical structure:
app/
page.tsx
layout.tsx
api/

components/

lib/

types/

public/

Responsibilities should be clearly separated:

- UI components
- Data logic
- API handlers
- Utility functions

---

# Supabase Integration

Server-side code should use the Supabase client to interact with the database.

A dedicated helper should initialize the Supabase client using environment variables.

Database credentials must never be exposed to the browser.

---

# Environment Variables

Environment configuration should include variables such as:

- Database connection details
- Application URLs
- Security tokens
- Optional monitoring integrations

A template `.env.example` file should be provided.

---

# Code Quality Standards

All code should follow modern quality standards:

- Strict TypeScript configuration
- ESLint rules
- Prettier formatting
- Avoid use of unsafe types
- Clear naming conventions

Components should remain small and composable.

---

# Deployment

The project should be deployable to modern hosting platforms.

Deployment configuration should ensure:

- Environment variables are configured
- Database connectivity works correctly
- API routes function in production
- Static assets load correctly

---

# Implementation Guidance

When generating code:

- Default to server components
- Use TailwindCSS for styling
- Prefer simple, readable abstractions
- Avoid unnecessary complexity
- Write maintainable code

The result should be a **clean, production-ready landing page architecture** suitable for a real startup launch.