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

Welche Ebenen müssen für SB‑K11/SB‑K12 zwingend mitspielen?

Für SB‑K11 (Neue Elektroanforderungen vs. Bestandsschutz):

    SB:  
    Bedeutungen wie „Bestandsschutz“, „neue Anforderungen“, „§14a“, „Anmeldepflicht“, „Zählerplatz“, „Netzbetreiberprozess“, „MFH/EFH“.

    RF (Regulatorik):

        RF‑Knoten zu: VDE‑AR‑N 4100, §14a EnWG, NAV, TAB, ggf. LBO/VVTB, GEG‑Verweise.

        Kanten: requires, constrains, delegates_to etc.

    TR (Technische Realität):

        TR‑Knoten: WP als elektrischer Verbraucher, Zähleranlage, Steigleitung, Lastprofil, Anschlussleistung.

        Kanten: WP → elektrische Last, Zählerfeld → Anschluss, Steigzone → physische Begrenzung.

    PS/PB (Politik/Blockade):

        PS: politischer WP‑Push, Förderlogik, Dekarbonisierungsziele.

        PB: Blockaden durch Netzbetreiberanforderungen, Umbaukosten, Platzmangel, MFH‑Spezifik.

    optional SCENARIO:

        Szenarien „MFH mit WP‑Nachrüstung“, „EFH mit WP‑Nachrüstung“ → um den Unterschied explizit zu machen.

2. Was ist aktuell sicher noch nicht im Graphen abgebildet?

Aus dem, was wir gerade gemeinsam hergeleitet haben, fehlen mit hoher Wahrscheinlichkeit:

    SB‑Nodes: Bestandsschutz, neue Anforderungen durch WP, §14a‑Pflicht, Anmeldepflicht, Zählerplatzanforderungen, Selektivität, MFH/EFH‑Typen, Steigzonenbegrenzung, Zählerplatzmangel.

    RF‑Edges: klare Ketten von VDE‑AR‑N 4100 / §14a / NAV → „neue Anforderungen bei WP‑Anschluss“.

    TR‑Edges: WP als „steuerbare Verbrauchseinrichtung“ mit besonderem Lastprofil, nicht als „zu großer Verbraucher“.

    PS/PB‑Edges: politischer WP‑Zwang ↔ technische/regulatorische Hürden im MFH.

Kurz: die semantische Story ist da, aber die Cross‑Layer‑Verdrahtung fehlt noch.
3. Sinnvolle Reihenfolge für den Umbau

Schritt 1 – SB sauber fertigziehen (haben wir inhaltlich):

    SB‑K11 neu definieren (haben wir).

    fehlende SB‑Nodes für Bestandsschutz / neue Anforderungen / MFH/EFH ergänzen.

    SB‑Edges innerhalb SB‑Layer setzen.

Schritt 2 – RF‑Layer anbinden:

    RF‑Knoten identifizieren: VDE‑AR‑N 4100, §14a EnWG, NAV, TAB, GEG‑Verweise.

    Cross‑Layer‑Edges: SB‑„Neue Anforderungen“ → RF‑Normen; SB‑„Bestandsschutz“ → RF‑Altbestand/Übergangsregeln.

Schritt 3 – TR‑Layer anbinden:

    TR‑Knoten: WP‑Verbraucher, Zähleranlage, Steigleitung, Anschlussleistung.

    Cross‑Layer‑Edges: TR‑WP → SB‑„steuerbare Verbrauchseinrichtung“; TR‑Zählerfeld → SB‑„Zählerplatzanforderung“; TR‑Steigzone → SB‑„Steigzonenbegrenzung“.

Schritt 4 – PS/PB‑Layer anbinden:

    PS: „WP‑Pfad politisch gewollt“.

    PB: „Netzbetreiber fordert Umbau“, „Kostenblockade MFH“, „Platzblockade MFH“.

    Edges: PS‑WP‑Pfad → verstärkt SB‑K11; PB‑Knoten → konkretisieren die Blockadeketten.

Schritt 5 – optional SCENARIO:

    Szenario EFH vs. MFH → zeigt, dass SB‑K11 im EFH nicht scharf wird.

4. Konkreter nächster Schritt

Bevor wir „blind“ umbauen, wäre der saubere Weg:

    Du schickst mir die relevanten RF‑Nodes/Edges zu VDE‑AR‑N 4100, §14a, NAV, TAB, GEG,

    plus die TR‑Nodes/Edges rund um WP, Zähleranlage, Steigleitungen,

    dann baue ich dir:

    eine Cross‑Layer‑Konfliktkette SB‑K11 ↔ RF ↔ TR ↔ PS/PB,

    als JSON‑Edges + kommentierten DOT‑Block,

    so, dass du es direkt in deinen v2.1‑Stand integrieren kannst.

Wenn du magst, können wir wirklich „hart“ anfangen mit:

    „Hier sind meine RF‑Knoten zu §14a / VDE‑AR‑N 4100 / NAV“

und ich ziehe dir daraus die passende Verdrahtung zu SB‑K11.
- die regulatorische Realität korrekt wiedergeben

Und das alles **ohne Fehlinterpretationen**.
