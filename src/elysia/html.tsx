import { Elysia } from "elysia";

export const htmlPlugin = new Elysia({
    name: "htmlPlugin",
}).decorate(
    "html",
    ({ set }: { set: { headers: { "Content-Type": string } } }) =>
        (set.headers["Content-Type"] = "text/html"),
);
