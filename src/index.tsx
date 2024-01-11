import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

import { BaseHtml, plugin } from "./components/BaseHTML";

const app = new Elysia()
    .use(html())
    .use(plugin)
    .get("/", () => <BaseHtml />)
    .get("styles.css", () => Bun.file("src/assets/css/output.css"))
    .listen(
        {
            hostname: "127.0.0.1",
            port: 7000,
        },
        ({ hostname, port }) => {
            console.log(`🦊 Elysia is running at http://${hostname}:${port}`);
        },
    );
