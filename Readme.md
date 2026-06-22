# Neo4J MFH Knowledgegraph  
Wissensgraph für technische Realität (TR), Regulatorik (RF), Szenarien (E4), Enabler (EN) und Konfliktketten im Mehrfamilienhaus (MFH).

Dieses Repository enthält alle Artefakte zur Modellierung, Analyse und Visualisierung eines modularen, normtreuen Knowledge Graphs für MFH‑Systeme.

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





---

## 🧩 Modellübersicht

Der Knowledge Graph besteht aus vier Hauptebenen:

### **Ebene 2 – Technische Realität (TR)**
Reale physikalische, hydraulische, elektrische und betriebliche Bedingungen im MFH.

Beispiele:
- TR‑01 Systemtemperaturen  
- TR‑02 60°C Hygiene  
- TR‑03 Zirkulation  
- TR‑06 Alt‑Norm Elektro  
- TR‑07 Aufstellflächen  
- TR‑08 Schall  
- TR‑11 Wärmeverluste  
- TR‑18‑R / TR‑18‑T Leistungsgrenzen  
- TR‑22 Komfortanforderungen  
- TR‑25 Mietminderung  

---

### **Ebene 3 – Regulatorik (RF)**
Normen, Gesetze, Verordnungen und technische Regeln.

Beispiele:
- RF‑60 GEG – Effizienzbewertung (Systembilanz)  
- RF‑61 GEG – Primärenergie  
- RF‑62 GEG – Warmwasser  
- RF‑63 DIN V 18599  
- RF‑70/71/72 Trinkwasser  
- RF‑78/85 Elektro (VDE/NAV)  
- RF‑86/87 Bauordnung / VVTB  
- RF‑100–106 Mietrecht  

---

### **Ebene 4 – Szenarien (E4)**
Varianten für Warmwasser, Speichergrößen, Zapfprofile, Komfort, Lastmanagement.

Beispiele:
- E4‑01 Warmwasserbedarf 230 L  
- E4‑06 Zapfprofil S  
- E4‑08 Zapfprofil L  
- E4‑06/07/08 → Einfluss auf LM  

---

### **Enabler (EN)**
Mechanismen, die Konflikte entschärfen oder alternative Nachweise ermöglichen.

Beispiele:
- EN‑03 Risikobasierter Brandschutz  
- EN‑06 Systemischer GEG‑Nachweis (Hybrid / Systembilanz)  
- EN‑08 Mietrechtliche Anerkennung Strommangellage  

---

## 🔥 Konfliktketten (KK1–KK6b)

Die Konfliktketten verbinden TR‑Realität mit RF‑Regulatorik und zeigen systemische Blockaden.

### **KK1 – Hygiene vs. WP vs. GEG**
TR‑02 → WPTmp → WPEff → RF‑60

### **KK2 – Zirkulation vs. GEG**
TR‑03 → TR‑11 → RF‑63

### **KK3 – Lüftung / Verluste vs. GEG**
TR‑13/14/05/11 → RF‑60/61/63

### **KK4 – Bauordnung vs. Aufstellflächen / Schall / Brandschutz**
TR‑07/08/09/10 → RF‑79/86/87

### **KK5 – Komfort vs. WP vs. GEG**
TR‑22 → TR‑01 → WPNT → RF‑60

### **KK6 – CO₂‑Reduktion vs. GEG‑65%**
TR‑00a/b → RF‑61 → RF‑65

### **KK6b – Elektro vs. Komfort vs. Hygiene**
TR‑18‑T → TR‑01/02/22 → TR‑25

---

## 🧠 Cross‑Layer‑Edges

Die Datei `crosslayer_edges.json` verbindet TR ↔ RF ↔ Szenarien ↔ EN.

Beispiele:
- TR‑13 → RF‑60/61/63 (GEG‑Bewertung)  
- TR‑07 → RF‑86‑BW/BY/HE (LBO)  
- WPEff → RF‑60  
- WPNT → RF‑60  
- WPTmp → RF‑61  
- TR‑22 → RF‑100 (Komfort → Gebrauchstauglichkeit)  
- TR‑25 → RF‑101 (Mietminderung)  

---

## ⚙️ Cypher‑Import

Die Cypher‑Skripte ermöglichen:

- Import aller Nodes (`import_nodes.cypher`)  
- Import aller Edges (`import_edges.cypher`)  
- Validierung (`validation.cypher`)  
- Constraints (`constraints.cypher`)  
- Cleanup (`cleanup.cypher`)  

---

## 🧪 ETL‑Pipeline

Die ETL‑Komponenten:

- `loader.py` → lädt JSON in Neo4j  
- `validator.py` → prüft Struktur & Konsistenz  
- `schema.py` → definiert Graphschema  
- `config.yaml` → zentrale Konfiguration  

---

## 📊 Visualisierungen (DOT)

Die DOT‑Dateien enthalten:

- Gesamtgraph  
- TR/RF‑Layer  
- Szenarien  
- Warmwasser  
- GEG‑Cluster  
- EN‑Cluster  
- Konfliktketten  

---

## 📦 Exporte

- Aura‑Export  
- Snapshots für Versionierung  

---

## 📘 Dokumentation

- Architektur  
- Modellierungsentscheidungen  
- Konfliktanalyse  
- GEG‑Heatmap  
- Änderungsprotokoll  

---

## 📝 Lizenz

Dieses Repository ist projektintern.  
Lizenzierung nach Absprache.

