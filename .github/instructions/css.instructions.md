---
description: 'CSS coding conventions for user-style files'
applyTo: 'src/**/*.css'
---

# CSS Coding Conventions

Apply these conventions when writing new user styles.

## Compatibility Requirements

1. Use modern CSS features targeting current browser standards.
2. Target latest Firefox.
3. Avoid deprecated CSS properties.
4. Use standards-compliant CSS.

## CSS Organization

1. Use descriptive lowercase selector names with hyphens.
2. Keep CSS specificity low to avoid conflicts.
3. Group properties by intent in this order:
	- Layout (display, position, flex/grid)
	- Box model (margin, padding, border)
	- Visual (color, background, typography)
	- Effects (transform, transition, filter)
4. Use modern color formats (`hex`, `rgb`, `hsl`) consistently.
5. Use clear comments for sections and non-obvious rules.

### Example

```css
/* Display Spoiler - Main Container */
.spoiler-container {
	/* Layout */
	display: flex;
	flex-direction: column;

	/* Box Model */
	margin: 1rem 0;
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;

	/* Appearance */
	background-color: #f5f5f5;
	color: #333;
}

.spoiler-container.expanded {
	background-color: #fff;
}
```

## User Style Metadata

All user styles must include a Stylus metadata header.

```css
/* ==UserStyle==
@name           Style Display Name
@namespace      https://github.com/takumi-kasahara
@version        1.0.0
@description    Clear description of what this style customizes
@author         takumi-kasahara
@match          https://example.com/*
@match          https://example.org/*
==/UserStyle== */
```

### Metadata Fields

- `@name`: Display name in Stylus manager
- `@namespace`: Unique identifier (use GitHub URL)
- `@version`: Semantic version (`major.minor.patch`)
- `@description`: What the style does and which sites it affects
- `@author`: Style author name
- `@match`: URL patterns where the style applies

## Formatting

1. Keep property organization consistent across files.
2. Use descriptive class and ID selectors.
