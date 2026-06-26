# Effect chains — how to add or edit one

This folder holds the **hand-authored effect chains** (Wirkketten) shown on the
storytelling page. Each chain is one plain `.json` file. You do **not** need to
touch any program code to add, edit, or remove a chain.

## The two kinds of file

| File | What it is |
|------|------------|
| `index.json` | The list of all chains. Every chain must be registered here. |
| `<chain-id>.json` | One chain: its headline texts, its cards, and the threads between them. |
| `chain.schema.json` | The rulebook for a chain file. You do not edit this — it just gives your editor auto-complete and red underlines when something is wrong. |

## Add a new chain in two steps

1. **Copy an existing chain file** (e.g. `kk-zaehlerschrank.json`) to a new
   name, e.g. `kk-hygiene.json`, and edit the texts inside.
2. **Register it in `index.json`** by adding an entry:

   ```json
   { "id": "kk-hygiene", "title": "Hygiene vs. Wärmepumpe", "file": "kk-hygiene.json" }
   ```

The new chain then appears as a button in the selector at the top of the page.

## What the fields mean

Inside a chain file:

- `meta` — the headline texts (`kicker`, `title`, `intro`) above the chain and
  the closing texts (`outroTitle`, `outro`) below it.
- `nodes` — the cards, top to bottom. For each card:
  - `id` — a short unique name (no spaces). The threads refer to it.
  - `kind` — the colour/category: `goal` (green), `law` (amber), `tech` (blue),
    `blockade` (red).
  - `row` — vertical order; `1` is the first card, higher numbers come later.
  - `col` — **`left` = path A, `right` = path B, `center` = a shared step.**
    On a desktop this places the card left/right/centre. On a phone it decides
    whether the card sits on the left or right like a chat bubble.
  - `tag`, `title`, `ref` — the small label, the bold headline, and the
    law/norm reference shown on the card.
  - `modal` — what opens when the card is clicked: `paragraph` (the draft legal
    text), `postit` (the plain-language note), `source` (the verify reminder).
- `edges` — the threads between cards, each as `["fromId", "toId"]`.

## Keep the `$schema` line

Every chain file starts with:

```json
"$schema": "./chain.schema.json",
```

Keep it. It makes VS Code (and most editors) auto-complete the field names and
warn you about typos before the page is even built.

## All legal texts are drafts

Every `paragraph` and `ref` on this page is a **placeholder** until the exact
paragraph has been verified. That is the whole point of the page: making one
single case correct end-to-end. Replace the drafts with the verified wording.
