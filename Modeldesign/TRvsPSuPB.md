#    Was unterscheidet TR‑Nodes (Technische Realität) von physischen Systembausteinen (PS‑Nodes)?

## Die kurze Antwort:
TR = Eigenschaften der Realität  
PS = konkrete technische Bausteine, die diese Realität erzeugen

# Unterschied TR vs. PS vs. PB – Herleitung

## 1. TR-Nodes = Technische Realität
TR beschreibt **Zustände, Anforderungen, physikalische Größen und technische Grenzen**, die unabhängig vom konkreten System gelten.

Beispiele:
- TR‑00b Schüttleistung
- TR‑01 Systemtemperaturen
- TR‑02 60°C Hygiene
- TR‑03 Zirkulation
- TR‑18‑T technische Leistungsgrenze
- TR‑08 Schall
- TR‑22 Komfort
- TR‑11 Wärmeverluste


**TR = Was gilt in der Realität.**


👉 TR‑Nodes sind abstrakte Realitätsbedingungen.  
Sie sagen was technisch/physikalisch/regulatorisch gilt.

---

## 2. PS-Nodes = Physische Systembausteine
PS beschreibt **konkrete technische Komponenten**, die diese Realität erzeugen oder beeinflussen.

Beispiele:
- PS‑WP (Wärmepumpe)
- PS‑Speicher
- PS‑Zirkulationspumpe
- PS‑Heizkreisverteiler
- PS‑Elektroinstallation
- PS‑Regelung
- PS‑Lüftungsanlage
- PS‑Hydraulikgruppe

**PS = Wodurch die Realität entsteht.**

👉 PS‑Nodes sind konkrete Bauteile.  
Sie sagen wodurch die Realität entsteht.

## ⭐ 3. Warum TR ≠ PS (und warum wir beides brauchen)
### Beispiel 1: Warmwasser
- TR‑00b Schüttleistung = „Wie viel Warmwasser wird in kurzer Zeit benötigt?“
- PS‑Speicher = „Welcher Speicher deckt diese Schüttleistung ab?“

### Beispiel 2: Hygiene
- TR‑02 60°C Hygiene = „Es müssen 60°C erreicht werden.“
- PS‑WP = „Kann die WP 60°C bereitstellen?“
- PS‑Speicher = „Kann der Speicher 60°C halten?“

### Beispiel 3: Elektro
    - TR‑18‑T technische Leistungsgrenze = „Die Elektroinstallation kann nur X kW.“
    - PS‑Elektroinstallation = „Welche Sicherungen, Phasen, Leitungen existieren?“

### Beispiel 4: Schall
- TR‑08 Schall = „Maximal zulässige dB(A) am Immissionspunkt.“
- PS‑WP‑Außengerät = „Wie laut ist das Gerät?“

👉 TR beschreibt die Anforderungen.  
👉 PS beschreibt die Bauteile, die diese Anforderungen erfüllen (oder verletzen).
---

## 3. PB-Nodes = Politische Blockaden
PB beschreibt **politisch-regulatorische Konflikte**, nicht technische Bauteile.

Beispiele:
- PB‑01 GEG‑65% vs WP‑JAZ
- PB‑02 LBO‑Schall vs WP‑Außenaufstellung
- PB‑03 Mietrecht vs LM

**PB = Wo Politik/Normen blockieren.**

---

##⭐ 4. Warum Szenarien PS‑Nodes brauchen (und nicht TR‑Nodes)

Szenarien (E4) beschreiben:

    Speichergrößen

    Zapfprofile

    LM‑Strategien

    WP‑Betriebsmodi

    Komfortprofile

Diese Szenarien wirken nicht direkt auf TR‑Nodes.
Sie wirken immer über Bauteile:

    Zapfprofil → PS‑Warmwasserstation → TR‑00b

    Speichergröße → PS‑Speicher → TR‑44

    LM‑Sperrzeiten → PS‑Regelung → TR‑38

    WP‑NT/HT → PS‑WP → TR‑01

    WW‑Bedarf → PS‑Speicher → TR‑00b

👉 Ohne PS‑Nodes fehlt die mittlere Schicht.  
👉 Szenarien würden TR‑Nodes direkt beeinflussen — das wäre falsch.

##⭐ 5. Warum wir PB‑Nodes NICHT für PS‑Nodes verwenden dürfen

PB‑Nodes = Politische Blockaden  
→ Konflikte zwischen Politik, Normen, Realität

Beispiele:

    PB‑01 GEG‑65% vs WP‑JAZ

    PB‑02 LBO‑Schall vs WP‑Außenaufstellung

    PB‑03 Mietrecht vs LM

Diese sind semantische Konfliktknoten, keine Bauteile.

👉 PB ≠ PS
👉 PB bleibt so wie es ist
👉 PS muss neu eingeführt werden

---

## 4. Warum Szenarien PS-Nodes brauchen
Szenarien (E4) wirken **nicht direkt** auf TR, sondern immer über Bauteile:

- Zapfprofil → PS‑Warmwasserstation → TR‑00b
- Speichergröße → PS‑Speicher → TR‑44
- LM‑Sperrzeiten → PS‑Regelung → TR‑38
- WP‑NT/HT → PS‑WP → TR‑01

**Ohne PS fehlt die mittlere Schicht zwischen Szenario und Realität.**

---

## 5. Fazit
| Ebene | Bedeutung | Frage | Beispiel |
|-------|-----------|--------|----------|
| **TR** | Technische Realität | *Was gilt?* | 60°C, Schüttleistung, Schall |
| **PS** | Physische Bauteile | *Wodurch entsteht es?* | WP, Speicher, Zirkulation |
| **PB** | Politische Blockaden | *Was verhindert es?* | GEG vs JAZ, Schall vs Aufstellung |

**TR = Realität**  
**PS = System**  
**PB = Politik**

