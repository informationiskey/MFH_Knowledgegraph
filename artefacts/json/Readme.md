# 📘 Node‑Schema & Node‑Typen v2.0  
**Vollständige Dokumentation für alle Node‑Typen (TR, RF, EN, E4, SB, PB)**

---

## 🧩 1. Einheitliches Node‑Schema v2.0

Jeder Node folgt exakt diesem Schema:

```json
{
  "id": "TR-01",
  "label": "Systemtemperatur Vorlauf",
  "type": "TR",
  "properties": {
    "domain": "thermal",
    "description": "Relevante Vorlauftemperatur für WP- und GEG-Bewertung.",
    "source": "DIN EN 12831",
    "tags": ["temperature", "heating", "system"],
    "version": "2.0"
  }
}
```

### **Pflichtfelder**

- **id** → eindeutige, sprechende ID  
- **label** → Klartext  
- **type** → `TR`, `RF`, `EN`, `E4`, `SB`, `PB`  
- **properties.domain** → thematische Zuordnung  
- **properties.description** → kurze, präzise Beschreibung  
- **properties.source** → Norm/Gesetz/Technik  
- **properties.version** → immer **"2.0"** für Full‑Rebuild  

### **Optionale Felder**

- **tags** → semantische Suchbegriffe  
- **unit** → falls physikalisch  
- **category** → z. B. `warmwater_demand`  

---

# 🧱 2. Node‑Typen v2.0 (final & vollständig)

---

## 🔵 TR‑Nodes (Technische Realität)

Physik, Hydraulik, Elektro, Komfort, Hygiene, Schall, Mietminderung.

### Beispiele

- TR‑01 Systemtemperatur  
- TR‑02 Hygiene 60 °C  
- TR‑03 Zirkulation  
- TR‑06 Elektro‑Alt‑Norm  
- TR‑07 Aufstellflächen  
- TR‑18‑T Leistungsgrenze  
- TR‑22 Komfort  
- TR‑25 Mietminderung  

---

## 🔵 RF‑Nodes (Regulatorik)

GEG, DIN, VDE, LBO, Mietrecht, Hygiene.

### Beispiele

- RF‑60 GEG Effizienz (Systembilanz)  
- RF‑61 GEG Primärenergie  
- RF‑62 GEG Warmwasser  
- RF‑63 DIN V 18599  
- RF‑86 LBO  
- RF‑100 Mietrecht Komfort  
- RF‑103 Mietrecht Minderung  

---

## 🔵 EN‑Nodes (Enabler)

Mechanismen, die Konflikte entschärfen.

### Beispiele

- EN‑03 Risikobasierter Brandschutz  
- EN‑06b Systemischer GEG‑Nachweis  
- EN‑08 Strommangellage Mietrecht  

---

## 🔵 E4‑Nodes (Szenarien)

Warmwasser, Speicher, Profile, Lastmanagement.

### Beispiele

- E4‑01 WW‑Bedarf 230 L  
- E4‑06 Zapfprofil S  
- E4‑08 Zapfprofil L  

---

## 🔵 SB‑Nodes (Semantic Blocks)

14 Bedeutungscluster:

- physical  
- regulatory  
- legal  
- energy  
- economic  
- process  
- risk  
- decision  
- ontology  
- social  
- infrastructure  
- dynamic  
- quality  
- conflict  

### Beispiele

- SB‑PH‑01 „Temperatur als physikalische Größe“  
- SB‑RG‑04 „GEG‑Bewertungssystem“  
- SB‑CF‑02 „Konflikt: Komfort vs. Effizienz“  

---

## 🔵 PB‑Nodes (Physical Blocks)

Physische Systembausteine:

- PB‑WP  
- PB‑Speicher  
- PB‑Heizkreis  
- PB‑Zirkulation  
- PB‑Hydraulik  
- PB‑Elektro  
- PB‑Gebäudehülle  
- PB‑Warmwasser  
- PB‑Verteilung  
- PB‑Regelung  

### Beispiele

- PB‑WP‑01 „Luft/Wasser‑WP 8 kW“  
- PB‑SP‑02 „300 L Speicher“  
