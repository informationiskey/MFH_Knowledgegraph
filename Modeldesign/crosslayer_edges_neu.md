# 📘 Analyse der Crosslayer-Kanten für v2.1
Diese Datei enthält alle TR→RF-Beziehungen, die in der v2.1-Taxonomie als **Crosslayer-Edges** geführt werden müssen.

Die Analyse erfolgt in vier Schritten:
1. Klassifikation der Edge-Typen
2. Mapping auf gültige Crosslayer-Typen
3. Identifikation veralteter oder nicht-taxonomischer Typen
4. Vorbereitung für die harmonisierte `crosslayer_edges.json v2.1`

---

# 1) Klassifikation der Edge-Typen (Ist-Zustand)

Die Rohdaten enthalten folgende Edge-Typen:

## ✔ Gültige Crosslayer-Typen (Taxonomie v2.1)
- `requires`
- `regulated_by`
- `enforced_by`
- `evaluated_by`
- `relevant_for`

## ❌ Nicht-taxonomische Typen (müssen ersetzt werden)
- `requires_VDE_upgrade`
- `subject_to`
- `activates`
- `restricted_by`
- `triggers_legionellenprüfung`
- `requires_JAZ`
- `affects_WW_Bilanz`
- `requires_schallgrenze`
- `requires_aufstellfläche`

Diese Typen müssen wir auf gültige Crosslayer-Typen mappen.

---

# 2) Mapping auf gültige Crosslayer-Typen (Soll-Zustand)

Die Taxonomie v2.1 erlaubt folgende Crosslayer-Typen:

- **requires**  
- **constrains**  
- **influences**  
- **depends_on**

Wir mappen wie folgt:

| Alter Typ | Neuer Typ (v2.1) | Begründung |
|-----------|------------------|------------|
| requires_VDE_upgrade | requires | TR benötigt höhere VDE-Anforderungen |
| subject_to | depends_on | TR ist abhängig von regulatorischer Vorgabe |
| activates | influences | TR löst regulatorische Konsequenz aus |
| restricted_by | constrains | RF begrenzt TR |
| triggers_legionellenprüfung | influences | TR löst Prüfpflicht aus |
| requires_JAZ | depends_on | TR hängt von GEG-Bilanzierung ab |
| affects_WW_Bilanz | influences | TR beeinflusst RF-Bilanzierung |
| requires_schallgrenze | requires | TR benötigt Einhaltung der LBO-Schallgrenze |
| requires_aufstellfläche | requires | TR benötigt bauordnungsrechtliche Fläche |

---

# 3) Bewertung der thematischen Cluster

## A) Elektro / VDE / NAV
TR-06 → RF-77/78/80/82/83/84/85  
→ **requires**

TR-18-R / TR-18-T / TR-19 / TR-20 / TR-21  
→ **requires**, **depends_on**, **constrains**, **influences**

## B) Hygiene / Trinkwasser
TR-02 → RF-70/71  
→ **enforced_by** → bleibt gültig

TR-03 → RF-71/72  
→ **regulated_by** → bleibt gültig

TR-22 → RF-72  
→ `triggers_legionellenprüfung` → **influences**

## C) GEG / Bilanzierung
TR-04b → RF-61  
→ `requires_JAZ` → **depends_on**

TR-03 → RF-62  
→ `affects_WW_Bilanz` → **influences**

TR-13/14/05/11 → RF-60/61/63  
→ **evaluated_by** → bleibt gültig

## D) Bauordnung / Schall / Aufstellflächen
TR-07 → RF-86  
→ `requires_schallgrenze` → **requires**

TR-08 → RF-86  
→ `requires_aufstellfläche` → **requires**

## E) Förderlogik
TR-00a/b → RF-90/91/92  
→ `relevant_for` → bleibt gültig

---

# 4) Ergebnis: Alle Kanten sind Crosslayer-relevant

Die Datei enthält **ausschließlich TR→RF-Beziehungen**,  
also **100 % Crosslayer**.

Nach Mapping der Edge-Typen können wir daraus die **harmonisierte `crosslayer_edges.json v2.1`** erzeugen.

Diese Datei wird:

- taxonomisch korrekt  
- semantisch sauber  
- konfliktkettenfähig  
- Neo4j-importfähig  
- vollständig dokumentiert  

