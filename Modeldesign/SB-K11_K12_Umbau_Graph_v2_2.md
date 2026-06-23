# Warum deine Argumentation aktuell NICHT im Graphen steckt

Der Grund ist einfach:

Der Knowledge Graph modelliert **Begriffe (Nodes)** und **Beziehungen (Edges)**,  
aber nicht die **Meta‑Semantik**, die wir gerade hergeleitet haben.

Beispielhafte Aussagen wie:

- „Bestand ist nicht unterdimensioniert“
- „Neue Normen werden erst durch WP ausgelöst“
- „Bestandsschutz wird aufgehoben“
- „§14a erzeugt neue Anforderungen“
- „MFH hat strukturelle Nachteile“

sind **semantische Aussagen**, aber sie existieren **nicht als Knoten** und **nicht als Kanten**.

Der Graph kann sie also **nicht ausdrücken**, weil die Struktur dafür fehlt.

---

# Was wir tun müssen, damit die Argumentation hart im Graphen verankert wird

Wir brauchen **drei Umbauten**:

---

## 1. Neue SB‑Nodes für die fehlenden Bedeutungen

Aktuell fehlen im SB‑Layer folgende Bedeutungsbegriffe:

- „Bestandsschutz (Elektro)“
- „Neue Anforderungen durch WP‑Anmeldung“
- „§14a‑Pflicht / Steuerbarkeit“
- „Anmeldepflicht (VDE‑AR‑N 4100)“
- „Zählerplatzanforderungen“
- „Selektivitätspflicht“
- „Netzbetreiberzustimmung“
- „Steigzonenbegrenzung MFH“
- „Zählerplatzmangel MFH“
- „Gebäudetyp MFH“
- „Gebäudetyp EFH“

Diese Begriffe sind **essentiell**, um SB‑K11 korrekt abzubilden.

Ohne diese Nodes kann der Graph nicht ausdrücken:

> „Der Bestand ist normgerecht, aber die WP triggert neue Normen.“

---

## 2. Neue Edges, die die richtige Kausalität abbilden

Aktuell steht in SB‑K11:

- „Elektro‑Bestand ist unterdimensioniert“ → **falsch**
- „WP erzeugt Konflikt mit Installationsgrenzen“ → **zu grob**

Wir müssen stattdessen modellieren:

- SB‑K11 → „Bestandsschutz wird aufgehoben“
- SB‑K11 → „Neue Anforderungen durch WP‑Anmeldung“
- SB‑K11 → „§14a‑Pflicht“
- SB‑K11 → „Anmeldepflicht“
- SB‑K11 → „Zählerplatzanforderungen“
- SB‑K11 → „Selektivitätspflicht“
- SB‑K11 → „Netzbetreiberzustimmung“

Damit wird der Konflikt **präzise und normtreu**.

---

## 3. Ein neuer Konfliktpfad MFH vs. EFH

Der Konflikt SB‑K11 ist im MFH **systemisch**, im EFH **nicht**.

Das muss in den Graphen.

Dafür brauchen wir:

- Node „Gebäudetyp MFH“
- Node „Gebäudetyp EFH“
- Node „Strukturelle Einschränkungen MFH“
- Node „Steigzonenbegrenzung“
- Node „Zählerplatzmangel“

Und dann Edges:

- MFH → verstärkt → SB‑K11
- EFH → schwächt → SB‑K11
- MFH → verursacht → Steigzonenbegrenzung
- MFH → verursacht → Zählerplatzmangel
- Steigzonenbegrenzung → verstärkt → Zählerplatzanforderungen
- Zählerplatzmangel → verstärkt → Netzbetreiberzustimmung

Damit wird der Konflikt **kontextsensitiv**.

---

# Was wir konkret umbauen müssen (Liste der Änderungen)

---

## A) Neue SB‑Nodes (semantic_infrastructure / semantic_regulatory)

- SB‑50 „Bestandsschutz Elektro“
- SB‑51 „Neue Anforderungen durch WP‑Anmeldung“
- SB‑52 „§14a‑Pflicht (steuerbare Verbrauchseinrichtung)“
- SB‑53 „Anmeldepflicht VDE‑AR‑N 4100“
- SB‑54 „Zählerplatzanforderungen“
- SB‑55 „Selektivitätspflicht“
- SB‑56 „Netzbetreiberzustimmung“
- SB‑57 „Steigzonenbegrenzung MFH“
- SB‑58 „Zählerplatzmangel MFH“
- SB‑59 „Gebäudetyp MFH“
- SB‑60 „Gebäudetyp EFH“

---

## B) Neue Edges für SB‑K11

- SB‑K11 → SB‑51 (WP triggert neue Anforderungen)
- SB‑K11 → SB‑52 (§14a‑Pflicht)
- SB‑K11 → SB‑53 (Anmeldepflicht)
- SB‑K11 → SB‑54 (Zählerplatzanforderungen)
- SB‑K11 → SB‑55 (Selektivität)
- SB‑K11 → SB‑56 (Netzbetreiberzustimmung)
- SB‑K11 → SB‑50 (Bestandsschutz wird aufgehoben)

---

## C) Neue Edges für MFH‑Spezifik

- SB‑59 (MFH) → verstärkt → SB‑K11
- SB‑60 (EFH) → schwächt → SB‑K11
- SB‑59 → verursacht → SB‑57 (Steigzonenbegrenzung)
- SB‑59 → verursacht → SB‑58 (Zählerplatzmangel)
- SB‑57 → verstärkt → SB‑54 (Zählerplatzanforderungen)
- SB‑58 → verstärkt → SB‑56 (Netzbetreiberzustimmung)

---

# Ergebnis

Wenn wir diese Umbauten machen, dann kann der Knowledge Graph:

- den echten Konflikt SB‑K11 korrekt ausdrücken
- den MFH‑Spezialfall korrekt abbilden
- den EFH‑Nicht‑Konflikt korrekt modellieren
- die Normlogik korrekt darstellen
- die Kausalität korrekt abbilden
- die regulatorische Realität korrekt wiedergeben

Und das alles **ohne Fehlinterpretationen**.
