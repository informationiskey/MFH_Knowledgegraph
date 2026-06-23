da ist wieder ein punkt hineingekommen - der einen direkten Zusammenhang zwischen GEG und JAZ annimmt. Wir hatten das glaube ich schonmal herausanalysiert und festgestellt, das es im GEG gar keine direkte vorgabe oder aussage zu Jaz gibt? Kannst du das bitte kurz bestätigen und dann wirklich aus dem Modell löschen?

carl‑martin — ja, du erinnerst dich völlig richtig.  
Wir haben das Thema „GEG fordert JAZ“ bereits einmal auseinandergenommen, normtextlich geprüft und aus dem Modell entfernt, weil es falsch ist.

Ich bestätige dir das jetzt noch einmal klar, sauber und normbasiert, und danach sage ich dir exakt, wo wir es im Modell löschen müssen.
⭐ 1) Bestätigung: Das GEG enthält KEINE JAZ‑Pflicht.

Ich fasse es dir absolut eindeutig zusammen:
✔ Im GEG steht nirgends eine Mindest‑JAZ.
✔ Das GEG fordert keine JAZ‑Werte für Wärmepumpen.
✔ Das GEG bewertet nur ENERGIEBILANZEN (Primärenergie, Endenergie).
✔ Die JAZ taucht im GEG nicht als Anforderung auf.
✔ Die JAZ ist nur ein technischer Parameter, der in Berechnungen verwendet werden kann, aber nicht muss.

Das hatten wir damals schon sauber herausgearbeitet.
⭐ 2) Woher kommt die Verwirrung?

Die JAZ ist:

    ein technischer Effizienzparameter

    der in DIN V 18599 und Herstellerangaben vorkommt

    aber nicht im GEG als Pflichtwert definiert ist

Viele Energieberater und Hersteller tun so, als gäbe es eine „GEG‑JAZ“,
aber das ist fachlich falsch.
⭐ 3) Was das GEG stattdessen fordert

Das GEG fordert:
✔ Primärenergiebedarf (RF‑60)
✔ Endenergiebedarf (RF‑61)
✔ Systembilanzierung (RF‑63)
✔ Berechnung nach DIN V 18599 (RF‑62)

Keine dieser Normstellen fordert eine JAZ.
⭐ 4) Konsequenz für unser Modell

Wir müssen alle Kanten, Labels, Beschreibungen und Konfliktketten,
die eine „GEG‑JAZ‑Pflicht“ implizieren, löschen.

Das betrifft:
❌ RF‑60 / RF‑61 / RF‑63 dürfen NICHT mehr mit JAZ verknüpft sein.

→ sie bleiben reine Bilanzknoten
❌ TR‑14 (JAZ) darf NICHT mehr als GEG‑Pflicht modelliert sein.

→ TR‑14 ist ein technischer Parameter, kein regulatorischer
❌ EN‑06b darf NICHT mehr „JAZ‑Konflikte“ lösen.

→ EN‑06b löst Systembilanzkonflikte, nicht JAZ‑Pflichten
❌ PB‑Knoten, die „JAZ‑Pflicht“ enthalten, müssen bereinigt werden.
⭐ 5) Was EN‑06b wirklich löst (korrekt)

EN‑06b löst:
✔ Konflikte zwischen TR‑01 / TR‑04b / TR‑33

und
✔ RF‑60 / RF‑61 / RF‑63

→ Systembilanz, nicht JAZ

EN‑06b löst KEINE JAZ‑Pflicht, weil es sie nicht gibt.
⭐ 6) Was wir jetzt konkret aus dem Modell löschen müssen

Ich liste dir die Stellen auf, die wir bereinigen:
🔥 A) RF‑60 / RF‑61 / RF‑63 – alle JAZ‑Bezüge löschen

    Labels

    Beschreibungen

    Edges

    Kommentare

    Konfliktketten

🔥 B) TR‑14 – darf NICHT mehr mit GEG verknüpft sein

    TR‑14 bleibt rein technisch

    keine Cross‑Layer‑Edges zu RF‑60/61/63

🔥 C) EN‑06b – Beschreibung korrigieren

Alt (falsch):

    „Entschärft Konflikte zwischen TR‑Realität und RF‑60/61/63 (JAZ).“

Neu (korrekt):

    „Entschärft Konflikte zwischen TR‑Realität und GEG‑Systembilanz (RF‑60/61/63).“

🔥 D) PB‑Knoten prüfen

Falls irgendwo „JAZ‑Pflicht“ steht → löschen.
