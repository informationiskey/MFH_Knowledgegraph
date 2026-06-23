# CONTRIBUTING.md – Neo4J MFH Knowledge Graph v2.2

Vielen Dank für dein Interesse, zum Neo4J MFH Knowledge Graph beizutragen!  
Dieses Projekt nutzt eine streng modulare, versionierte Artefaktstruktur, um technische,
regulatorische, politische und semantische Zusammenhänge im Mehrfamilienhaus‑Kontext
präzise abzubilden.

Bitte lies diese Richtlinien sorgfältig, bevor du Änderungen einreichst.

---

## 🧩 Grundprinzipien

1. **Modularität**  
   Jede Änderung erfolgt ausschließlich in der zuständigen Datei  
   (Nodes, Edges, Cluster, Szenarien, Konfliktketten).

2. **Keine Redundanz**  
   Jeder Knoten und jede Kante existiert genau einmal.

3. **Sprechende Labels**  
   IDs sind stabil, Labels müssen verständlich und normtreu sein.

4. **Versionierung**  
   Änderungen erfolgen immer in der aktuellen Version (v2.2).  
   Breaking Changes → neue Minor‑Version.

5. **Validierung**  
   Jede Änderung muss durch die JSON‑Validatoren und Cross‑Layer‑Checks laufen.

---

## 📁 Ordnerstruktur (Kurzüberblick)
```
artefacts/
json/
nodes/      # TR, RF, EN, SB, PB, PS, SCENARIO
edges/      # TR, RF, EN, SB, PB, PS, SCENARIO, CROSSLAYER
clusters/   # Clusterdefinitionen pro Layer
kk/         # Konfliktketten
dot/          # Graphviz-Layer
exports/      # Neo4j-CSV, Bilder, Reports
logs/         # Build- und Validierungsprotokolle
```
---

## 🧱 Regeln für Nodes

### 1. **Node‑Dateien niemals mischen**
- TR‑Nodes → `tr_nodes.json`
- RF‑Nodes → `rf_nodes.json`
- EN‑Nodes → `en_nodes.json`
- SB‑Nodes → `sb_nodes.json`
- PB‑Nodes → `pb_nodes.json`
- PS‑Nodes → `ps_nodes.json`
- Szenarien → `scenario_nodes.json`

### 2. **Node‑Schema**
Jeder Node folgt diesem Schema:

```json
{
  "id": "SB-K04",
  "label": "Hygieneanforderung 60°C verletzt",
  "type": "SB",
  "properties": {
    "domain": "semantic_conflict",
    "description": "...",
    "source": "Norm / Regelwerk",
    "version": "2.2"
  }
}
```
### 3. **IDs sind stabil**

IDs dürfen niemals geändert werden.
Labels und Properties dürfen aktualisiert werden.

## Regeln für Edges
### 1. Edges gehören in die richtige Datei

    TR → TR → tr_edges.json

    RF → RF → rf_edges.json

    EN → EN → en_edges.json

    SB → TR/RF → sb_edges.json

    PB → TR/RF/SB → pb_edges.json

    PS → TR/RF/SB/PB → ps_edges.json

    Szenario → TR/RF → scenario_edges.json

    Cross‑Layer → crosslayer_edges.json

### 2. Edge‑Schema
```json
{
  "source": "TR-06",
  "type": "requires",
  "target": "RF-78"
}
```
### 3. Edge‑Typen

Nur definierte Typen verwenden:

    requires

    depends_on

    enables

    explains

    contextualizes

    limits

    affects

    regulated_by

    relevant_for

## 🔄 Regeln für Konfliktketten (KK)

    Datei: kk/kk.json

    ### Nur SB‑Knoten in den Steps

    Reihenfolge ist kausal, nicht alphabetisch

    Beispiel:
    ```json
{
  "id": "KK1",
  "label": "Hygiene vs. WP vs. GEG",
  "steps": ["SB-K04", "SB-K11", "SB-K05", "SB-K06"]
}
```
## Validierung

Vor jedem Commit:

    JSON‑Linting

    Node‑ID‑Check

    Edge‑Target‑Existenz

    Cross‑Layer‑Konsistenz

    DOT‑Render‑Test

    Neo4j‑CSV‑Export‑Test (optional)

## 📝 Commit‑Richtlinien

    Deutsch oder Englisch, aber konsistent pro Commit

   ### Präfixe verwenden:

        ADD: neue Nodes/Edges

        FIX: Fehlerbehebung

        REF: Refactoring

        UPD: inhaltliche Aktualisierung

        DEL: Entfernen veralteter Elemente

Beispiele:
ADD: SB-K12 Förderfähigkeit reduziert
UPD: TR-18-T Beschreibung präzisiert
FIX: RF-70 fehlende Property ergänzt
REF: sb_edges.json neu strukturiert

## Workflow
- Branch erstellen
- Änderungen durchführen
- Validierung ausführen
- Pull Request erstellen
- Review durch Maintainer
- Merge in main

# Kontakt

Für Fragen, Diskussionen oder größere Änderungen bitte ein Issue eröffnen.

