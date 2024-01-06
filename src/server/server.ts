import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const app = new Elysia()
  .use(
    staticPlugin({
      prefix: "/",
    })
  )
  .get("/", () => Bun.file("index.html"))
  .all("*", () => {})
  .listen(8080, (server) =>
    console.log(
      `🦊 Elysia is running at http://${server.hostname}:${server.port}`
    )
  );

export default app;
