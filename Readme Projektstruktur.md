# 📘 Projektstruktur – Übersicht & Dokumentation

Dieses Repository enthält alle Artefakte, Skripte und Dokumentationen zur Modellierung, Validierung und Visualisierung eines mehrschichtigen, normbasierten Wissensgraphen (RF/TR/EN/Szenarien/SB/PB) inklusive ETL‑Pipeline, Neo4j‑Importskripten und DOT‑Visualisierungen.

---
```
project-root/
└── artefacts/
    ├── json/
    │   ├── nodes/
    │   │   ├── tr_nodes.json
    │   │   ├── rf_nodes.json
    │   │   ├── en_nodes.json
    │   │   ├── sb_nodes.json
    │   │   ├── pb_nodes.json
    │   │   ├── ps_nodes.json
    │   │   ├── scenario_nodes.json
    │   │   └── meta_nodes.json   # ← optional
    │   │
    │   ├── edges/
    │   │   ├── tr_edges.json
    │   │   ├── rf_edges.json
    │   │   ├── en_edges.json
    │   │   ├── sb_edges.json
    │   │   ├── pb_edges.json
    │   │   ├── ps_edges.json
    │   │   ├── scenario_edges.json
    │   │   ├── crosslayer_edges.json
    │   │   └── kk_edges.json
    │   │
    │   ├── clusters/
    │   │   ├── tr_cluster.json
    │   │   ├── rf_cluster.json
    │   │   ├── en_cluster.json
    │   │   ├── sb_cluster.json
    │   │   ├── pb_cluster.json
    │   │   └── ps_cluster.json        # ← optional, aber sinnvoll
    │   │
    │   └── kk/
    │       └── kk.json
    │
    ├── dot/
    │   ├── tr.dot
    │   ├── rf.dot
    │   ├── en.dot
    │   ├── sb.dot
    │   ├── pb.dot
    │   ├── ps.dot
    │   ├── scenario.dot
    │   └── knowledgegraph.dot
    │
    ├── exports/
    │   ├── neo4j/
    │   ├── images/
    │   └── reports/
    │
    └── logs/
        ├── build.log
        └── validation.log
```
## 📁 Artefakte (`artefacts/`)

Der zentrale Speicherort für **modellierte Graph‑Artefakte**.  
Unterteilt in **Nodes**, **Edges** und **Alert‑Definitionen**.

### `artefacts/json/nodes/`
Enthält alle **Knotencluster** des Wissensgraphen:

- tr_nodes.json — Technische Realität (TR)  
- rf_nodes.json — Regulatorische Anforderungen (RF)  
- en_nodes.json — Energienetz‑Cluster  
- sb_nodes.json — Semantic Blocks (NEU)  
- pb_nodes.json — Political Stopblocks (NEU)
- ps_nodes.json
- - scenario_nodes.json — Szenarien & Varianten   

### `artefacts/json/edges/`
Alle **Kantencluster**, inkl. Cross‑Layer‑Beziehungen:

- tr_edges.json — technische Abhängigkeiten  
- rf_edges.json — regulatorische Abhängigkeiten  
- scenario_edges.json — Szenario‑Beziehungen  
- en_edges.json — Energienetz‑Beziehungen  
- sb_edges.json — Semantic‑Block‑Beziehungen (NEU)  
- pb_edges.json — Political Stop‑Block‑Beziehungen (NEU)
- ps_edges.json
- crosslayer_edges.json — RF↔TR↔EN↔SB↔PB‑Verknüpfungen
- kk_edges.json

### `artefacts/alerts/`
Alert‑System für Konfliktketten, Heatmaps und Compliance‑Checks:

- alert_rules.json — definierte Alert‑Regeln  
- alert_instances.json — konkrete Alert‑Instanzen  

---

## 📁 DOT‑Visualisierungen (`dot/`)

Graphviz‑Dateien zur **Visualisierung der Modelllogik**:

- overview.dot — Gesamtübersicht  
- rf_tr_layers.dot — RF/TR‑Schichtenmodell  
- scenarios.dot — Szenario‑Graph  
- warmwater.dot — Warmwasser‑Cluster (Bestand)  
- geg_cluster.dot — GEG‑Cluster  
- konfliktketten.dot — Konfliktkettenmodell  
- sb_cluster.dot — Semantic‑Block‑Cluster (NEU)  
- pb_cluster.dot — Physical‑Block‑Cluster (NEU)  
- en_cluster.dot — Energienetz‑Cluster  

---

## 📁 Cypher‑Skripte (`cypher/`)

Skripte für **Import, Validierung und Bereinigung** in Neo4j:

- import_nodes.cypher — lädt alle Nodes  
- import_edges.cypher — lädt alle Edges  
- import_alerts.cypher — lädt Alerts  
- validation.cypher — strukturelle & semantische Checks  
- cleanup.cypher — Reset & Bereinigung  
- constraints.cypher — Constraints & Indizes  

---

## 📁 ETL‑Pipeline (`etl/`)

Python‑basierte Pipeline für Artefakt‑Generierung, Validierung und Schema‑Management:

- loader.py — orchestriert den Import  
- validator.py — prüft Struktur & Normkonformität  
- schema.py — definiert das Artefakt‑Schema  
- config.yaml — ETL‑Konfiguration  

---

## 📁 Dokumentation (`docs/`)

Fachliche und technische Dokumente:

- architecture.md — Systemarchitektur  
- modelling_decisions.md — Modellierungsentscheidungen  
- conflict_analysis.md — Konfliktkettenanalyse  
- geg_heatmap.md — GEG‑Heatmap  
- sb_layer.md — Semantic‑Block‑Layer (NEU)  
- pb_layer.md — Physical‑Block‑Layer (NEU)  
- changelog.md — Versionierung  

---

## 📁 Exporte (`exports/`)

Exportierte Daten und Snapshots:

- aura_export.cypher — Exportskript für Neo4j Aura  
- snapshots/ — versionierte Graph‑Snapshots  

---

## 📁 Konfiguration (`config/`)

Projekt‑ und Neo4j‑Konfiguration:

- neo4j.conf — Neo4j‑Serverkonfiguration  
- settings.json — projektweite Settings
