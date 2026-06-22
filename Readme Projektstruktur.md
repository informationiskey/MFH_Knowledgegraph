---
# 📘 Projektstruktur – Übersicht & Dokumentation

Dieses Repository enthält alle Artefakte, Skripte und Dokumentationen zur Modellierung, Validierung und Visualisierung eines mehrschichtigen, normbasierten Wissensgraphen (RF/TR/Norm/EN/WW/Szenarien) inklusive ETL‑Pipeline, Neo4j‑Importskripten und DOT‑Visualisierungen.

---

## 📁 Artefakte (`artefacts/`)

Der zentrale Speicherort für **modellierte Graph‑Artefakte**.  
Unterteilt in **Nodes**, **Edges** und **Alert‑Definitionen**.

### `artefacts/json/nodes/`
Enthält alle **Knotencluster** des Wissensgraphen:

- rf_nodes.json — Regulatorische Anforderungen (RF)  
- tr_nodes.json — Technische Realität (TR)  
- norm_nodes.json — Normen & Standards  
- scenario_nodes.json — Szenarien & Varianten  
- ww_nodes.json — Warmwasser‑Cluster  
- en_nodes.json — Energienetz‑Cluster  

### `artefacts/json/edges/`
Alle **Kantencluster**, inkl. Cross‑Layer‑Beziehungen:

- rf_edges.json — regulatorische Abhängigkeiten  
- tr_edges.json — technische Abhängigkeiten  
- norm_edges.json — normative Verweise  
- scenario_edges.json — Szenario‑Beziehungen  
- ww_edges.json — Warmwasser‑Beziehungen  
- crosslayer_edges.json — RF↔TR↔Norm↔EN‑Verknüpfungen  
- en_edges.json — Energienetz‑Beziehungen  

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
- warmwater.dot — Warmwasser‑Cluster  
- geg_cluster.dot — GEG‑Cluster  
- konfliktketten.dot — Konfliktkettenmodell  
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
- changelog.md — Versionierung  
- modelling_decisions.md — Modellierungsentscheidungen  
- conflict_analysis.md — Konfliktkettenanalyse  
- geg_heatmap.md — GEG‑Heatmap  

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




