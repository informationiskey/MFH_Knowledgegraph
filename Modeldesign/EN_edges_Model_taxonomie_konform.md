# 📘 Analyse der EN‑Edges (v2.1)

Die Enabler‑Knoten (EN‑01 bis EN‑12) dienen dazu,
politische oder regulatorische Blockaden (PB) oder Crosslayer‑Konflikte (TR↔RF)
zu entschärfen.

Die Taxonomie v2.1 erlaubt folgende EN‑Edge‑Typen:

- relieves_conflict
- compensates
- modulates
- allows_deviation
- enables_alternative_path
- systemic_override

Diese Typen sind **exklusiv für EN‑Edges**.

---

# 1) Extrahierte EN‑Edges aus deinen Dokumenten

Aus DOT‑Dateien, Konfliktanalysen und Sicherungen ergeben sich:

## EN‑01 – Lastmanagement / Peak‑Shaving
- EN‑01 → PB‑03 (relieves_conflict)
- EN‑01 → PB‑06 (relieves_conflict)
- EN‑01 → TR‑06 (modulates)
- EN‑01 → TR‑19 (modulates)
- EN‑01 → TR‑20 (modulates)

## EN‑02 – PV‑Eigenstrom
- EN‑02 → PB‑01 (relieves_conflict)
- EN‑02 → RF‑60 (allows_deviation)
- EN‑02 → RF‑61 (allows_deviation)

## EN‑03 – Speicher / Batteriesysteme
- EN‑03 → PB‑06 (relieves_conflict)
- EN‑03 → TR‑06 (modulates)

## EN‑04 – Schallschutzmaßnahmen
- EN‑04 → PB‑02 (relieves_conflict)
- EN‑04 → TR‑07 (modulates)
- EN‑04 → TR‑08 (modulates)

## EN‑05 – Legionellen‑Schutzkonzepte
- EN‑05 → PB‑04 (relieves_conflict)
- EN‑05 → TR‑02 (modulates)
- EN‑05 → TR‑22 (modulates)

## EN‑06 – Netzbetreiber‑Sondervereinbarungen
- EN‑06 → PB‑05 (relieves_conflict)
- EN‑06 → RF‑78 (allows_deviation)
- EN‑06 → RF‑85 (allows_deviation)

## EN‑07 – Förderprogramme / Zuschüsse
- EN‑07 → PB‑07 (relieves_conflict)
- EN‑07 → RF‑90 (modulates)
- EN‑07 → RF‑91 (modulates)
- EN‑07 → RF‑92 (modulates)

## EN‑08 – Hydraulischer Abgleich
- EN‑08 → PB‑01 (relieves_conflict)
- EN‑08 → TR‑00a (modulates)
- EN‑08 → TR‑00b (modulates)

## EN‑09 – Gebäudedämmung / Sanierung
- EN‑09 → PB‑01 (relieves_conflict)
- EN‑09 → TR‑00a (modulates)

## EN‑10 – Aufstellflächenoptimierung
- EN‑10 → PB‑02 (relieves_conflict)
- EN‑10 → TR‑08 (modulates)

## EN‑11 – Warmwasser‑Systemoptimierung
- EN‑11 → PB‑04 (relieves_conflict)
- EN‑11 → TR‑03 (modulates)
- EN‑11 → TR‑22 (modulates)

## EN‑12 – Alternative Wärmequellen
- EN‑12 → PB‑01 (enables_alternative_path)
- EN‑12 → PB‑06 (enables_alternative_path)

---

# 2) Prüfung gegen die Taxonomie v2.1

## ✔ Alle Edge‑Typen sind gültig
- relieves_conflict  
- modulates  
- allows_deviation  
- enables_alternative_path  

## ✔ Layer‑Kombinationen sind korrekt
- EN → PB  
- EN → TR  
- EN → RF  

## ✔ Semantik ist korrekt
- EN löst Blockaden  
- EN modifiziert TR  
- EN ermöglicht RF‑Abweichungen  

## ✔ Keine veralteten Typen
Keine Typen wie „supports“, „affects“, „reduces“, „mitigates“.

---

# 3) Ergebnis der Prüfung

Alle EN‑Edges sind **taxonomiekonform**,  
aber wir müssen sie **harmonisiert in eine saubere JSON‑Datei** bringen.

Die folgende Datei ist die **finale `en_edges.json v2.1`**.
