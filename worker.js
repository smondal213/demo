export default {
  async fetch(request, env, ctx) {
    // Serve test.html on root request
    if (new URL(request.url).pathname === "/" || new URL(request.url).pathname === "/test.html") {
      return new Response(await (await fetch("https://raw.githubusercontent.com/smondal213/demo/main/test.html")).text(), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    return new Response("Not found", { status: 404 });
  },
};
