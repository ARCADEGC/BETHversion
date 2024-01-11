# BETH

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

This project was created using `bun init` in bun v1.0.22. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## **STACK** installation guide

### [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

```bat
wsl --install -d <Distribution Name>
```

---

### [BUN](https://bun.sh/docs/cli/init)

```bash
curl -fsSL https://bun.sh/install | bash
```

```bash
bun init
```

Make sure you set the index file to be **_src/index.tsx_**

---

### [Elysia](https://elysiajs.com/quick-start.html#manual-installation)

```bash
bun add elysia
```

```json
// package.json
{
    "scripts": {
        "dev": "bun --watch src/index.tsx",
        "build": "bun build src/index.tsx",
        "start": "NODE_ENV=production bun src/index.tsx",
        "test": "bun test"
    }
}
```

```json
// tsconfig.json
{
    "compilerOptions": {
        "strict": true
    }
}
```

---

### [Prettier](https://prettier.io/docs/en/install)

```bash
bun install --save-dev --save-exact prettier
```

```json
// .prettierrc
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "semi": true,
    "experimentalTernaries": true,
    "singleQuote": false,
    "jsxSingleQuote": false,
    "quoteProps": "as-needed",
    "trailingComma": "all",
    "singleAttributePerLine": false,
    "htmlWhitespaceSensitivity": "css",
    "vueIndentScriptAndStyle": false,
    "proseWrap": "preserve",
    "insertPragma": false,
    "printWidth": 80,
    "requirePragma": false,
    "tabWidth": 4,
    "useTabs": false,
    "embeddedLanguageFormatting": "auto"
}
```

Use the [**prettier playground**](https://prettier.io/playground/) to set your own prefferences.

---

### [Elysia HTML](https://elysiajs.com/plugins/html.html)

```bash
bun add @elysiajs/html
```

```json
// tsconfig.json
{
    "compilerOptions": {
        "jsx": "react",
        "jsxFactory": "Html.createElement",
        "jsxFragmentFactory": "Html.Fragment"
    }
}
```

---

### [Typed-Html](https://github.com/nicojs/typed-html)

```bash
bun install --save typed-html
```

```json
// tsconfig.json
{
    "compilerOptions": {
        "jsx": "react",
        "jsxFactory": "elements.createElement"
    }
}
```

```tsx
// example.tsx
import * as elements from "typed-html";
```

---

### [concurrently](https://github.com/open-cli-tools/concurrently)

```bash
bun install concurrently
```

```json
// package.json
"scripts": {
  "dev": "concurrently \"bun --watch src/index.tsx\" \"bunx tailwindcss -i ./src/assets/css/input.css -o ./src/assets/css/output.css --watch\""
},
```

---

### [TailwindCSS](https://tailwindcss.com/docs/installation)

```bash
bun install -D tailwindcss
```

```bash
bunx tailwindcss init
```

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

```css
/* src/assets/css/input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
bunx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

```tsx
// index.tsx
.get("styles.css", () => Bun.file("src/assets/css/output.css")
```

```tsx
// baseHTML.tsx
<link rel="stylesheet" href="styles.css">
```

---

### [Tailwind Plugin for Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

```bash
bun install -D prettier prettier-plugin-tailwindcss
```

```json
// .prettierrc
"plugins": ["prettier-plugin-tailwindcss"]
```

---

### [HTMX](https://htmx.org/docs/)

```html
<!-- BaseHTML.tsx -->
<script src="https://unpkg.com/htmx.org@1.9.10"></script>
```

---

### [Tailwindcss Typography](https://tailwindcss.com/docs/typography-plugin)

```bash
install -D @tailwindcss/typography
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [require("@tailwindcss/typography")],
};
```

---
