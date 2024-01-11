import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

import { BaseHtml } from "./components/BaseHTML";

const app = new Elysia()
    .use(html())
    .get("/", () => <BaseHtml />)
    .post("/post/:id", ({ params }) => <p>Welcome HTMX {params.id}!</p>, {
        params: t.Object({
            id: t.Numeric(),
        }),
    })
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
