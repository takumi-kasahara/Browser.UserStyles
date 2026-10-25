# Project Guidelines

This project is a collection of Stylus-compatible user styles (CSS) that customize the appearance and user experience of popular websites.
The project uses modern CSS with user style metadata headers.

## Overview

1. `src/` directory: Contains all user style source files

## Coding Conventions

Project-specific coding rules are maintained in:

- [.agents/skills/userstyles/skill.md](.agents/skills/userstyles/skill.md)

## File Naming Conventions

- User scripts must end with `.user.css`
- Names should be descriptive and indicate the site or functionality
- Use Title Case for readability

## When Adding New User Styles

1. Create the file in `src/` with `.user.css` extension
2. Add Stylus metadata with proper @match patterns
3. Run `npm run lint` to format css
