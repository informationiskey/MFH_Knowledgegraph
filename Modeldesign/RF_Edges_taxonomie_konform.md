# 📘 Analyse der entfernten Kanten aus `rf_edges.json` (Migration v2.0 → v2.1)

Die Datei `rf_edges.json` darf laut Taxonomie v2.1 **ausschließlich RF→RF‑Beziehungen** enthalten,  
und zwar nur mit den vier gültigen RF‑Edge‑Typen:

- overrides  
- delegates_to  
- requires  
- defines  

Alle anderen Edge‑Typen wurden entfernt, weil sie **nicht RF‑intern**, **nicht normativ**,  
oder **Crosslayer‑Beziehungen** waren.

Dieses Dokument zeigt:

1. Welche Kanten entfernt wurden  
2. Warum sie entfernt wurden  
3. Wohin sie in der v2.1‑Architektur verschoben werden  
4. Welche Kanten vollständig entfallen  

---

# 1) 🟥 MLAR‑Beziehungen (`introduces`)

**Alt:**
- RF‑87‑BW → RF‑79  
- RF‑87‑BY → RF‑79  
- RF‑87‑HE → RF‑79  

**Problem:**  
`introduces` ist kein gültiger RF‑Edge‑Typ.  
MLAR ist **keine Unterordnung** der VVTB.

**Neu:**  
- Diese Kanten **entfallen vollständig**.  
- MLAR bleibt ein **eigenständiger RF‑Knoten** ohne RF‑interne Abhängigkeiten.

---

# 2) 🟧 Elektro‑Beziehungen  
(`legal_framework_for`, `requires_compliance`, `details`)

**Alt:**
- RF‑85 → RF‑78  
- RF‑78 → RF‑77  
- RF‑78 → RF‑80  
- RF‑83 → RF‑84  

**Problem:**  
Diese Kanten beschreiben **technische Abhängigkeiten**, nicht regulatorische.  
Sie gehören **nicht** in RF→RF.

**Neu:**  
- Diese Kanten wandern nach **crosslayer_edges.json**.  
- Dort werden sie korrekt als **TR→RF‑Beziehungen** modelliert, z. B.:

  - TR‑06 → RF‑77  
  - TR‑06 → RF‑78  
  - TR‑06 → RF‑80  
  - TR‑06 → RF‑83  
  - TR‑06 → RF‑84  

**Begründung:**  
Elektro‑Normen wirken auf technische Anforderungen, nicht aufeinander.

---

# 3) 🟩 GEG‑Beziehungen (`uses_method`)

**Alt:**
- RF‑60 → RF‑63  
- RF‑61 → RF‑63  
- RF‑62 → RF‑63  

**Problem:**  
`uses_method` ist kein gültiger RF‑Edge‑Typ.  
GEG‑Normen stehen **nebeneinander**, RF‑63 definiert nur die Methodik.

**Neu:**  
Diese Kanten werden ersetzt durch:

- RF‑63 **defines** RF‑60  
- RF‑63 **defines** RF‑61  
- RF‑63 **defines** RF‑62  

**Begründung:**  
RF‑63 (DIN V 18599) definiert die Systembilanzierung,  
RF‑60/61/62 sind Anwendungsnormen.

---

# 4) 🟨 Förderrecht (`implements`)

**Alt:**
- RF‑90 → RF‑91  
- RF‑90 → RF‑92  

**Problem:**  
BEG, BAFA und KfW stehen **parallel**, nicht hierarchisch.  
`implements` ist kein RF‑Edge‑Typ.

**Neu:**  
- Diese Kanten **entfallen vollständig**.

**Begründung:**  
Förderprogramme sind **politische Instrumente**, keine RF‑interne Normkette.  
Beziehungen gehören ggf. in:

- `pb_edges.json` (politische Blockaden)  
- `en_edges.json` (Förderprogramme als Enabler)

---

# 5) 🟦 Mietrecht  
(`related_to`, `defines_costs`, `interacts_with`, `extends`)

**Alt:**
- RF‑100 → RF‑101  
- RF‑102 → RF‑106  
- RF‑103 → RF‑102  
- RF‑104 → RF‑105  

**Problem:**  
Mietrechtliche Paragrafen stehen **nebeneinander**, nicht in Abhängigkeiten.  
Alle Edge‑Typen sind ungültig.

**Neu:**  
- Diese Kanten **entfallen vollständig**.

**Begründung:**  
Mietrecht ist **parallel strukturiert**,  
Beziehungen entstehen erst im **Crosslayer** (z. B. TR‑Kosten → RF‑102).

---

# 6) 🧩 Zusammenfassung der Migration

| Alter Edge‑Typ | Neuer Speicherort | Status |
|----------------|-------------------|--------|
| introduces | entfällt | ❌ |
| legal_framework_for | crosslayer_edges.json | 🔄 |
| requires_compliance | crosslayer_edges.json | 🔄 |
| details | crosslayer_edges.json | 🔄 |
| uses_method | ersetzt durch `defines` | ✔ |
| implements | entfällt | ❌ |
| related_to | entfällt | ❌ |
| defines_costs | crosslayer_edges.json (TR→RF) | 🔄 |
| interacts_with | entfällt | ❌ |
| extends | entfällt | ❌ |

---

# 7) 🧩 Ergebnis

Die neue `rf_edges.json v2.1` enthält jetzt **ausschließlich**:

- overrides  
- delegates_to  
- requires  
- defines  

Damit ist sie:

- **Taxonomie‑konform**  
- **normtreu**  
- **Crosslayer‑sauber**  
- **Neo4j‑importfähig**  
- **DOT‑kompatibel**  
- **konfliktkettenfähig**  

