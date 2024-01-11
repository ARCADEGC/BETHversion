import * as elements from "typed-html";

export const BaseHtml = () => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>title</title>
  <link rel="stylesheet" href="styles.css">
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
</head>
${(
    <body class="prose flex w-full max-w-[1400px] flex-col items-center gap-2 bg-slate-950">
        <section>
            <h1 class="text-slate-100">Hello</h1>
            <button
                hx-post="/post/1"
                hx-swap="afterend"
                class="rounded-lg bg-white px-8 py-2 font-semibold uppercase tracking-wide text-black transition-colors duration-300 hover:bg-white/25 hover:text-white"
            >
                post
            </button>
        </section>
    </body>
)}
`;
