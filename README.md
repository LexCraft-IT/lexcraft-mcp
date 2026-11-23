# lexcraft-mcp

The MCP server of LexCraft (Streamable HTTP, `/mcp`): the dossier and card tools for an application
a user connected (Claude Code, LibreLex). It holds no database and talks only to the LexCraft server
(lexcraft-core's `apps/server`), with the OAuth tokens that server issues. `CLAUDE.md` describes it.

lexcraft-core pins this repository as the submodule `apps/mcp` at one of its tags, and builds its
container from it. `conventions/` is the submodule lexcraft-contracts.

```bash
npm ci && npm run build && npm test   # against stub servers: no database
```

Licence: MPL-2.0 (`LICENSE`).
