# How-To: Eine Wirkkette als JSON befüllen

> **Für wen:** Carl-Martin (und alle, die Inhalte für die Storytelling-Seite
> pflegen). Du brauchst **keine** Programmierkenntnisse — du änderst nur Texte
> in einer Datei.
>
> **Sprache:** Diese Anleitung ist bewusst auf Deutsch. Der Code und die
> technische `README.md` im Projekt sind auf Englisch.

---

## Was ist eine „Wirkkette"?

Eine Wirkkette ist **eine Geschichte**, die Schritt für Schritt zeigt, wie aus
einzelnen, je für sich korrekten Vorgaben (Gesetze, Normen, Technik) am Ende
eine **Blockade** wird — der „gordische Knoten".

Auf der Seite wird jede Wirkkette als Abfolge von **Karten** dargestellt, die
mit **Linien** (Pfaden) verbunden sind. Klickt man eine Karte an, öffnet sich
der Gesetzes-/Normtext im Klartext.

**Jede Wirkkette ist genau eine Datei.** Du kannst beliebig viele anlegen.

---

## Die Dateien im Überblick

Alle Wirkketten liegen im Ordner `storytelling/public/chains/`:

| Datei | Wofür |
|---|---|
| `index.json` | Die **Liste** aller Wirkketten. Jede Kette muss hier eingetragen sein, sonst erscheint sie nicht. |
| `kk-*.json` | **Je eine Wirkkette** (Überschriften, Karten, Verbindungen). |
| `chain.schema.json` | Das **Regelwerk** — bitte **nicht** ändern. Es sorgt nur dafür, dass dein Editor (z.B. VS Code) dir hilft und Tippfehler **rot unterstreicht**. |

---

## Aufbau einer Wirkketten-Datei (Vorlage)

Ändere nur die Texte **zwischen den Anführungszeichen** — **niemals** die
Feldnamen links davon.

```json
{
  "$schema": "./chain.schema.json",
  "meta": {
    "kicker":     "kleines Label ganz oben",
    "title":      "große Überschrift der Kette",
    "intro":      "Einleitungstext unter der Überschrift",
    "outroTitle": "Überschrift des Abschluss-Blocks",
    "outro":      "Abschlusstext ganz unten"
  },
  "nodes": [
    {
      "id":    "ziel",
      "kind":  "goal",
      "row":   1,
      "col":   "center",
      "tag":   "Politisches Ziel",
      "title": "Kurzer Karten-Titel",
      "ref":   "Gesetz · § __ (prüfen)",
      "modal": {
        "paragraph": "Der (Entwurfs-)Gesetzes- bzw. Normtext.",
        "postit":    "Klartext: was das praktisch/politisch bedeutet.",
        "source":    "Quelle bzw. Hinweis, was noch zu prüfen ist."
      }
    }
  ],
  "edges": [
    ["ziel", "id-der-naechsten-karte"]
  ]
}
```

---

## Was die Felder bedeuten

| Feld | Bedeutung |
|---|---|
| **`meta`** | Die Texte oben (Überschrift, Einleitung) und unten (Abschluss). |
| **`nodes`** | Die einzelnen **Karten** der Kette, von oben nach unten. |
| `id` | Kurzer, eindeutiger Name **ohne Leerzeichen** (z.B. `geg`). Die Verbindungen (`edges`) verweisen darauf. |
| `kind` | Farbe/Typ der Karte: `goal` (grün, Ziel), `law` (gelb, Gesetz/Norm), `tech` (blau, Technik/Folge), `blockade` (rot, KO-Kriterium). |
| `row` | Reihenfolge von oben nach unten. `1` = erste Karte, höhere Zahl = weiter unten. **Karten mit gleicher `row` stehen nebeneinander** (parallel). |
| `col` | Welche Spur: **`left` = Pfad A, `right` = Pfad B, `center` = gemeinsamer Schritt**. Siehe unten. |
| `tag` | Kleines Label oben auf der Karte. |
| `title` | Fette Überschrift der Karte. |
| `ref` | Die Gesetzes-/Norm-Quelle unter dem Titel. |
| `modal` | Was beim **Anklicken** der Karte aufgeht: `paragraph` (Gesetzestext), `postit` (Klartext-Notiz), `source` (Prüf-Hinweis). |
| **`edges`** | Die **Verbindungslinien**, je `["von-id", "zu-id"]`. So entsteht der Pfad-Verlauf. |

---

## Die zwei Pfade: `left`, `right`, `center`

Viele Wirkketten haben **zwei parallele Wege**, die sich am Ende zu einem
Knoten treffen. `col` steuert, auf welcher Spur eine Karte sitzt:

- **`left`** = Pfad A (linke Spur)
- **`right`** = Pfad B (rechte Spur)
- **`center`** = gemeinsamer Schritt (oben das Ziel, unten der Knoten) — spannt
  über beide Spuren

Mit `row` legst du fest, was auf **gleicher Höhe** nebeneinander steht. So
sieht das aus (Beispiel „Zählerschrank"):

```
                 [ Ziel ]            row 1   (center)
                ↙        ↘
        [ GEG ]            [ EnWG ]  row 2   (left / right)
           │                  │
   [ Wärmepumpe ]          [ MsbG ]  row 3   (left / right)
           │                  │
           │           [ Smart-Meter ] row 4 (nur right)
            ↘              ↙
                 [ VDE ]             row 5   (center, Zusammenführung)
                   │
            [ Platz & Brandschutz ]  row 6   (center)
                   │
               [ Blockade ]          row 7   (center)
```

> Auf dem Smartphone werden daraus zwei Spuren wie ein Chat-Verlauf
> (links/rechts), auf dem Desktop die breite Knoten-Ansicht — denselben
> Datensatz musst du nur **einmal** pflegen.

---

## Eine neue Wirkkette anlegen (2 Schritte)

1. **Kopiere** eine vorhandene Datei (z.B. `kk-zaehlerschrank.json`), gib ihr
   einen neuen Namen (z.B. `kk-hygiene.json`) und passe die Texte an.
2. **Trag sie in `index.json` ein**, indem du eine Zeile ergänzt:

   ```json
   { "id": "kk-hygiene", "title": "Hygiene vs. Wärmepumpe", "file": "kk-hygiene.json" }
   ```

Danach erscheint die neue Kette automatisch als Knopf im Umschalter oben auf
der Seite.

---

## Wichtig: Alle Gesetzestexte sind noch Platzhalter (DRAFT)

Jeder `paragraph` und jede `ref` ist aktuell ein **Platzhalter**. Genau das ist
deine Aufgabe: die Platzhalter durch die **geprüften, korrekten Paragraphen**
zu ersetzen. Der Sinn der Seite ist die Einzelfall-Korrektheit von Anfang bis
Ende.

---

## Kleine JSON-Stolperfallen

- Jeder Text steht in **"doppelten Anführungszeichen"**.
- Zwischen den Einträgen steht ein **Komma** — aber **nicht** hinter dem
  **letzten** Eintrag einer Liste.
- Jede `{` braucht eine `}` und jede `[` eine `]` als Gegenstück.
- Behalte die Zeile `"$schema": "./chain.schema.json",` ganz oben — dann zeigt
  dir der Editor Fehler **rot** an, bevor irgendetwas online geht.

---

## Wie kommen die Änderungen online?

Eine Datei zu speichern ändert die Live-Seite **nicht von allein**. Nachdem du
fertig bist, wird die Seite **neu veröffentlicht** — sprich das kurz mit Jörg
ab (dauert nur Sekunden). Die Seite selbst ist passwortgeschützt; Zugangsdaten
bekommst du von Jörg.
