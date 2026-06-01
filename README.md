# Browser UserStyles

A collection of custom CSS stylesheets (user styles) for popular websites. These styles enhance the visual design and user experience of various sites, including cleaner layouts, font customization, and spoiler handling.

## 📦 Features

### Style Collections

- Display Spoiler - Enhanced spoiler display for Booklog.jp and Bookmeter.com
- Minimal Layout - Cleaner, minimalist interface redesign for Pixiv
- Replace Fonts - Custom font replacements across supported websites

## 🛠️ Project Structure

```plaintext
src/
├── Display Spoiler for booklog.jp.user.css
├── Display Spoiler for bookmeter.com.user.css
├── Minimal Layout for Pixiv.user.css
└── Replace Fonts.user.css
```

## 🚀 Installation

### Prerequisites

- Browser with Stylus extension (or similar user style manager)
- Stylus browser extension installed ([Firefox](https://addons.mozilla.org/firefox/addon/styl-us/) | [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobg4wdtgibc))

### Installation Methods

1. Direct installation - Copy the CSS content and paste into Stylus
2. File-based - Download the `.user.css` files and import into Stylus
3. Repository installation - Use Stylus's "Find styles for this site" feature

## 📝 User CSS Format

All styles follow the Stylus user CSS metadata format:

```css
/* ==UserStyle==
@name           Style Name
@namespace      https://github.com/takumi-kasahara
@version        1.0.0
@description    Brief description of what this style does
@author         takumi-kasahara
@match          https://example.com/*
==/UserStyle== */
```

## ⚙️ Compatibility

- Target Environment: Latest Firefox with Stylus extension
- CSS Support: Modern CSS (CSS Grid, Flexbox, CSS Variables, etc.)
- Browser APIs: Standards-compliant CSS only
- Target Sites: Booklog, Bookmeter, Pixiv, and general web applications

## 📄 License

See [LICENSE](LICENSE)
