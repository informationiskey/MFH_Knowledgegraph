# 📘 Tag‑Taxonomie v2.1 (Englische Tags, deutsche Beschreibungen)

Dieses Dokument definiert die vollständige, harmonisierte Tag‑Taxonomie für alle EN‑Nodes im MFH‑Knowledge‑Graph (v2.1).  
Die Tags sind **ausschließlich Englisch**, während alle erklärenden Texte **Deutsch** bleiben.

Die Tag‑Taxonomie dient der:
- eindeutigen semantischen Klassifikation,
- automatischen Konfliktkettenanalyse,
- stabilen Neo4j‑Querybarkeit,
- klaren DOT‑Clusterbildung.

---

# 1) Tag‑Cluster (Oberkategorien)

Jeder Tag gehört zu genau **einem** Cluster.  
Jeder EN‑Node verwendet **1–3 Tags** aus **maximal zwei** Clustern.

---

## 🟦 A) Deviation‑Cluster
Mechanismen, die Abweichungen von Normen oder Anforderungen ermöglichen.

**Tags:**
- `deviation`
- `alternative_path`

**Beschreibung:**  
Erlaubt technische, rechnerische oder rechtliche Abweichungen, sofern Gleichwertigkeit oder besondere Umstände nachgewiesen werden.

---

## 🟩 B) Compensation‑Cluster
Maßnahmen, die Normabweichungen durch technische oder betriebliche Mittel kompensieren.

**Tags:**
- `compensation`
- `technical`
- `operational`

**Beschreibung:**  
Ausgleichsmaßnahmen, die Defizite durch zusätzliche Technik oder organisatorische Maßnahmen kompensieren.

---

## 🟧 C) Systemic‑Cluster
Systemische, bilanzielle oder prognosebasierte Bewertungsmechanismen.

**Tags:**
- `systemic`
- `evaluation`
- `balancing`
- `forecast`

**Beschreibung:**  
Bewertungen, die nicht auf Einzelkomponenten basieren, sondern auf Gesamtbilanz, Systemverhalten oder Prognosen.

---

## 🟨 D) Legal‑Cluster
Rechtliche Mechanismen, die Abweichungen oder Sonderbehandlungen ermöglichen.

**Tags:**
- `legal`
- `tenancy_law`
- `building_code`

**Beschreibung:**  
Juristische Abweichungsmechanismen aus LBO, Mietrecht oder sonstigen Rechtsquellen.

---

## 🟥 E) Risk‑Cluster
Risikobasierte Bewertungs‑ oder Abweichungsverfahren.

**Tags:**
- `risk`

**Beschreibung:**  
Erlaubt Abweichungen, wenn eine Risikoanalyse ein gleichwertiges Schutzniveau nachweist.

---

## 🟪 F) Economic‑Cluster
Wirtschaftlichkeitsbasierte Abweichungsmechanismen.

**Tags:**
- `economic`

**Beschreibung:**  
Erlaubt Abweichungen, wenn technische Anforderungen wirtschaftlich unzumutbar sind (z. B. GEG §102).

---

# 2) EN‑Node → Tag‑Matrix (final v2.1)

| EN‑Node | Tags (Englisch) | Cluster |
|--------|------------------|---------|
| **EN‑01** Alternative Nachweisführung | `alternative_path`, `systemic` | deviation, systemic |
| **EN‑02** Bestandsschutz | `deviation`, `legal` | deviation, legal |
| **EN‑03** Risikobasierter Brandschutz | `risk`, `deviation` | risk, deviation |
| **EN‑04** Technische Kompensationsmaßnahmen | `compensation`, `technical` | compensation |
| **EN‑05** Betriebliche Kompensationsmaßnahmen | `compensation`, `operational` | compensation |
| **EN‑06** Systemische Bewertung | `systemic`, `evaluation` | systemic |
| **EN‑06b** Systemischer GEG‑Nachweis | `systemic`, `alternative_path`, `balancing` | systemic, deviation |
| **EN‑07** Abweichung nach LBO | `deviation`, `building_code` | deviation, legal |
| **EN‑08** Mietrechtliche Anerkennung Strommangellage | `tenancy_law`, `legal` | legal |
| **EN‑09** Erweiterte Betreiberverantwortung | `operational`, `deviation` | compensation, deviation |
| **EN‑10** Wirtschaftlichkeitsabwägung | `economic`, `deviation` | economic, deviation |
| **EN‑11** Technische Gleichwertigkeit | `alternative_path`, `technical` | deviation, compensation |
| **EN‑12** Prognosebasierte Bewertung | `forecast`, `systemic` | systemic |

---

# 3) Tag‑Definitionen (Deutsch)

### deviation  
Ermöglicht Abweichungen von Normen, wenn Gleichwertigkeit oder besondere Umstände nachgewiesen werden.

### alternative_path  
Erlaubt alternative technische oder rechnerische Nachweiswege.

### compensation  
Kompensiert Normabweichungen durch zusätzliche Maßnahmen.

### technical  
Technische Kompensationsmaßnahmen (z. B. Schallschutz, Sensorik, Filter).

### operational  
Betriebliche Kompensationsmaßnahmen (z. B. Wartung, Prüfintervalle, Monitoring).

### systemic  
Systemische Betrachtung statt Einzelkomponenten.

### evaluation  
Ganzheitliche Bewertung des Gesamtsystems.

### balancing  
Bilanzielle Bewertung nach DIN V 18599.

### forecast  
Prognosebasierte Bewertung statt statischer Werte.

### legal  
Rechtliche Mechanismen zur Abweichung oder Sonderbehandlung.

### tenancy_law  
Mietrechtliche Sondermechanismen.

### building_code  
Bauordnungsrechtliche Abweichungsmechanismen (LBO/VVTB).

### risk  
Risikobasierte Abweichungen (z. B. Brandschutz).

### economic  
Wirtschaftlichkeitsbasierte Abweichungen (GEG §102).

---

# 4) Regeln für die Tag‑Vergabe

1. Alle Tags sind **Englisch**.  
2. Jeder EN‑Node nutzt **1–3 Tags**.  
3. Tags stammen aus **maximal zwei Clustern**.  
4. Keine TR‑ oder PB‑Tags bei EN‑Nodes.  
5. `balancing` ist exklusiv für EN‑06b.  
6. Tags müssen den **regulatorischen Mechanismus** widerspiegeln, nicht die technische Wirkung.

---

# ✔ Die Tag‑Taxonomie v2.1 ist jetzt vollständig harmonisiert:  
**Englische Tags, deutsche Beschreibungen, semantisch eindeutig, konfliktkettenfähig.**
