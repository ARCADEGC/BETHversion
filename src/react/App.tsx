import { Elysia, t } from "elysia";
import React, { useState } from "react";
import { renderToString } from "react-dom/server";

import { Button } from "@/components/ui/button";

export const plugin = new Elysia({
    name: "buttonpostplugin",
}).post(
    "/post/:id",
    ({ params, set }) => {
        set.headers["Content-Type"] = "text/html";
        return renderToString(
            <Button hx-post="/post/1" hx-swap="afterend">
                params.id: {params.id}
            </Button>,
        );
    },
    {
        params: t.Object({
            id: t.Numeric(),
        }),
    },
);

export function App() {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <title>Bun, Elysia & React</title>
                <meta name="description" content="Bun, Elysia & React" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="stylesheet" href="styles.css" />
                <script src="https://unpkg.com/htmx.org@1.9.10"></script>
            </head>
            <body>
                <Button hx-post="/post/1" hx-swap="afterend">
                    Increment
                </Button>
            </body>
        </html>
    );
}
