# Herleitung der RF‑ID‑Struktur (Regulatorische Realität)

Die RF‑IDs (Regulatory Framework) wurden im Knowledge‑Graph bewusst **nicht linear** von RF‑01 bis RF‑106 vergeben.  
Stattdessen wurde eine **Cluster‑basierte ID‑Architektur** entwickelt, die sich an realen Normblöcken, logischen Themenclustern und Konfliktketten orientiert.

Diese Struktur ist **kein Fehler**, sondern eine **bewusste Modellierungsentscheidung**, um:

- regulatorische Themenblöcke klar zu trennen  
- Konfliktketten logisch abbildbar zu machen  
- Crosslayer‑Edges stabil zu halten  
- Erweiterbarkeit sicherzustellen  
- Neo4j‑Importe und DOT‑Visualisierung zu vereinfachen  

---

## 1. Warum es keine RF‑01 bis RF‑59 gibt

Die IDs RF‑01 bis RF‑59 wurden **nie verwendet**, weil das Modell von Anfang an auf **Cluster‑Blöcken** basierte.  
Es gab **keine lineare Nummerierung**, sondern **thematische Nummernblöcke**, die jeweils einem Normbereich entsprechen.

---

## 2. Historische und fachliche Herleitung der RF‑Cluster

### 🟦 Mietrecht (frühe Version: RF‑001 bis RF‑006)
Diese IDs existierten nur in einer sehr frühen Modellphase (v0.8–v1.0).  
Sie wurden später **ersetzt durch RF‑100 bis RF‑106**, um:

- BGB‑Paragrafen sauber zu gruppieren  
- Konfliktketten (PB‑03) klarer abzubilden  
- den Cluster „legal“ logisch zu isolieren  

**RF‑001 bis RF‑006 wurden bewusst verworfen.**

---

### 🟧 GEG – Gebäudeenergiegesetz (RF‑60 bis RF‑63)
Der GEG‑Block beginnt bewusst bei **RF‑60**, weil:

- die „50er‑Zone“ für EnEV‑Altlasten reserviert war  
- GEG als eigener Cluster geführt wird  
- spätere GEG‑Erweiterungen (2024/2025) Platz benötigen  

**RF‑60 bis RF‑63 bilden die Systembilanzierung des GEG ab.**

---

### 🟩 Trinkwasser / Hygiene (RF‑70 bis RF‑72)
Der 70er‑Block wurde gewählt, weil:

- Wasser/Hygiene ein klar abgegrenzter Cluster ist  
- DVGW‑Normen logisch in diesem Bereich liegen  
- spätere Erweiterungen (W556, W557) Platz haben  

---

### 🟨 Elektro / VDE / NAV / DGUV (RF‑77 bis RF‑85)
Der Start bei **RF‑77** ist bewusst gewählt:

- DIN 18015‑2 wird in vielen Normsystemen intern als „77“ geführt  
- VDE‑AR‑N 4100 (Netzanschluss) liegt logisch daneben  
- DGUV‑Normen folgen im 80er‑Bereich  

**Dieser Block ist an reale Normnummern angelehnt.**

---

### 🟥 Bauordnung / MLAR / VVTB (RF‑79, RF‑86, RF‑87)
Die Bauordnungs‑IDs folgen einer fachlichen Logik:

- RF‑79 = MLAR (historisch „79“ in vielen Systemen)  
- RF‑86 = LBO (generisch + Ländervarianten)  
- RF‑87 = VVTB (Ländervarianten)  

**Diese Struktur ermöglicht saubere Crosslayer‑Edges zu TR‑07/08.**

---

### 🟪 Förderrecht (RF‑90 bis RF‑92)
Der 90er‑Block wurde gewählt, weil:

- Förderrecht politisch volatil ist  
- BEG/BAFA/KfW logisch zusammengehören  
- Platz für spätere Programme (RF‑93–99) bleibt  

---

### 🟫 Mietrecht (finale Version: RF‑100 bis RF‑106)
Der 100er‑Block wurde bewusst gewählt, um:

- Mietrecht klar von GEG/Elektro/Wasser zu trennen  
- Konfliktketten (PB‑03) sauber abzubilden  
- BGB‑Paragrafen logisch zu gruppieren  

**RF‑100 bis RF‑106 sind die finalen Mietrechts‑IDs.**

---

## 3. Fazit

- RF‑01 bis RF‑59 wurden **nie verwendet**.  
- Die RF‑IDs folgen einer **Cluster‑Logik**, nicht einer linearen Nummerierung.  
- Die Struktur ist **bewusst**, **stabil**, **erweiterbar** und **konfliktkettenfähig**.  
- Die aktuelle v2.1‑Struktur ist vollständig konsistent mit:
  - Crosslayer‑Edges  
  - EN‑Edges  
  - PB‑Edges  
  - TR‑Nodes  
  - DOT‑Visualisierung  
  - Neo4j‑Import  

Diese Herleitung bildet die Grundlage der gesamten regulatorischen Modellarchitektur.
