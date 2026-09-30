# Project Guidelines

This project is a collection of Stylus-compatible user styles (CSS) that customize the appearance and user experience of popular websites.
The project uses modern CSS with user style metadata headers.

## Overview

1. `src/` directory: contains all user style source files
   - all `.user.css` files are stylus-compatible stylesheets
   - each file is self-contained and can be installed independently

- [.agents/skills/userstyles/skill.md](.agents/skills/userstyles/skill.md)

## File Naming Conventions

- User style filenames should be descriptive and use Title Case
  - Example: `display spoiler for booklog.jp.user.css`
  - Format: `[Purpose] for [SiteName].user.css` or `[Purpose].user.css`
- Always use `.user.css` extension

## When Adding New User Styles

1. Create the file in `src/` with `.user.css` extension
2. Add Stylus metadata with proper @match patterns
3. Follow naming conventions - Descriptive, Title Case filenames
4. Organize CSS - Group related properties, use clear comments
5. Use modern CSS - Leverage CSS Grid, Flexbox, CSS Variables, etc.
6. Test thoroughly - Verify style works in Stylus before committing
7. Document - Explain complex rules with comments

## Project Configuration Files

- `stylelint.config.mjs` - CSS linting rules (enforce consistency)
- `eslint.config.mjs` - Linting configuration

## References

- [Stylus Wiki](https://github.com/openstyles/stylus/wiki)
- [Writing UserCSS](https://github.com/openstyles/stylus/wiki/Writing-UserCSS)
