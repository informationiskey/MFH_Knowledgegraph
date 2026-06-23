# 📘 Taxonomie v2.1 – Masterübersicht für den Knowledge Graph MFH

Diese Taxonomie definiert **alle Layer, Domains, Cluster, Node‑Typen, Edge‑Typen und ID‑Ranges**  
für die Version **v2.1** des MFH‑Knowledge‑Graphen.

Sie ist die **Single Source of Truth** für:

- rf_nodes.json  
- tr_nodes.json  
- en_nodes.json  
- pb_nodes.json  
- scenario_nodes.json  
- alle Edge‑Dateien  
- DOT‑Graphen  
- Neo4j‑Import  
- Konfliktketten  
- Crosslayer‑Logik  

---

# 1) 🧩 Layer‑Taxonomie (v2.1)

| Layer | Bedeutung | Node‑Typ |
|-------|-----------|----------|
| **TR** | Technische Realität | TR |
| **RF** | Regulatorische Realität | RF |
| **PB** | Politische Blockaden | PB |
| **EN** | Enabler / Ermöglichungsmacher | EN |
| **SC** | Szenarien / Annahmen | SCENARIO |

Jeder Node gehört **genau einem Layer** an.

---

# 2) 🧩 Domain‑Taxonomie (v2.1)

## RF‑Domains
| Domain | Bedeutung |
|--------|-----------|
| **regulation** | Regulatorische Anforderungen |
| **hygiene** | Trinkwasser / DVGW |
| **electrical** | Elektro / VDE / NAV |
| **building** | Bauordnung / MLAR / VVTB |
| **funding** | Förderrecht |
| **legal** | Mietrecht / BGB |

## TR‑Domain
- **technical_reality**

## PB‑Domain
- **political_blockade**

## EN‑Domain
- **enabler**

## SC‑Domain
- **scenario**

---

# 3) 🧩 Cluster‑Taxonomie (v2.1)

## RF‑Cluster
| Cluster | Domain | Inhalt |
|---------|--------|--------|
| **GEG** | regulation | Gebäudeenergiegesetz |
| **hygiene** | hygiene | Trinkwasser / DVGW |
| **electrical** | electrical | VDE / NAV / DGUV |
| **building** | building | LBO / MLAR / VVTB |
| **funding** | funding | BEG / BAFA / KfW |
| **legal** | legal | Mietrecht / BGB |

## TR‑Cluster
| Cluster | Inhalt |
|---------|--------|
| **thermal** | Heizlast, Hüllverluste, Lüftungsverluste |
| **electrical** | Netzlast, Anschlussleistung |
| **hydraulic** | Warmwasser, Zirkulation, Speicher |
| **acoustic** | Schall / Außengeräte |
| **system** | WP‑Systemlogik |

## PB‑Cluster
- **politics**

## EN‑Cluster
- **enabling_mechanisms**

## SC‑Cluster
- **warmwater_demand**  
- **heating_demand**  
- **grid_scenarios**

---

# 4) 🧩 Node‑Typen (v2.1)

| Typ | Bedeutung |
|------|-----------|
| **TR** | Technische Realität |
| **RF** | Regulatorische Realität |
| **PB** | Politische Blockade |
| **EN** | Enabler |
| **SCENARIO** | Szenario |

---

# 5) 🧩 Edge‑Typen (v2.1)

## TR‑Edges
- `prerequisite_for`
- `modulates`
- `influences`
- `feeds`

## RF‑Edges
- `overrides`
- `delegates_to`
- `requires`
- `defines`

## Crosslayer‑Edges
- `requires`
- `constrains`
- `influences`
- `depends_on`

## EN‑Edges
- `relieves_conflict`
- `compensates`
- `modulates`
- `allows_deviation`
- `enables_alternative_path`
- `systemic_override`

## PB‑Edges
- `feeds_blockade`
- `regulates_blockade`

## Scenario‑Edges
- `defines`
- `input`

---

# 6) 🧩 ID‑Ranges (v2.1)

## TR‑Nodes
- **TR‑00a bis TR‑99**

## RF‑Nodes
- **RF‑60 bis RF‑63** → GEG  
- **RF‑70 bis RF‑72** → Hygiene  
- **RF‑77 bis RF‑85** → Elektro  
- **RF‑79, RF‑86, RF‑87** → Bauordnung  
- **RF‑90 bis RF‑92** → Förderrecht  
- **RF‑100 bis RF‑106** → Mietrecht  

> **Hinweis:**  
> RF‑01 bis RF‑59 wurden **nie verwendet** (bewusste Cluster‑Architektur).

## PB‑Nodes
- **PB‑01 bis PB‑07**

## EN‑Nodes
- **EN‑01 bis EN‑12**

## Scenario‑Nodes
- **E4‑01 ff.**

---

# ✔ Diese Taxonomie ist die verbindliche Grundlage für alle Artefakte v2.1.
# ✔ Sie stellt sicher, dass alle JSON‑Dateien konsistent, harmonisiert und konfliktfrei sind.
# ✔ Sie bildet die Basis für DOT‑Graphen, Neo4j‑Importe und Konfliktketten.
