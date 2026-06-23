# Neu: noch sinnvoll einsetzbare Effizienz der WP und ab wann Zusatzheizung (noch nicht umgesetzt)

brauchen wir die Jaz eventuell für eine grenzwert und noch sinnvoll einsetzbare Effizienz der WP Betrachtung für die Punkte WW und Wärme bereitung bei extremtemperaturen? Oder decken wir das im Modell schon anders ab?

Gute Frage – und genau der richtige Moment, das sauber zu trennen.

Kurz gesagt:

    Für Grenzwerte / Pflichten im Sinne von „muss“ brauchen wir JAZ nicht.

    Für eine sinnvolle Effizienzbetrachtung der WP im Modell kann JAZ trotzdem nützlich sein – aber rein technisch, nicht regulatorisch.

1. Wofür wir JAZ nicht brauchen

    Nicht als Grenzwert im RF‑Layer

    Nicht als „GEG‑Pflicht“

    Nicht als Auslöser für Blockaden oder PB‑Knoten

Diese Rolle übernehmen bei dir bereits:

    TR‑01: Temperaturniveau / Systemtemperaturen

    TR‑02 / TR‑WW‑Knoten: Warmwasser‑Temperaturen / Hygiene

    TR‑33 / TR‑Verbrauch: Energieverbräuche

    RF‑60/61/63: Systembilanz (Primär‑/Endenergie, GEG‑Nachweis)

    Szenarien (E‑Kälte, E‑Lastspitzen): Extremtemperaturen, Lastfälle

Damit ist die regulatorische und systemische Bewertung schon abgedeckt – ohne JAZ‑Pflicht.
2. Wofür JAZ trotzdem sinnvoll sein kann

Als rein technischer Analyse‑Knoten im TR‑Layer:

    TR‑14 = JAZ (oder „Systemeffizienz WP“)

        beschreibt: „Wie effizient arbeitet das Gesamtsystem über ein Jahr?“

        kann helfen, Szenarien zu vergleichen

        kann in EN‑06 (Systemische Bewertung) einfließen

        kann in EN‑08 (Effizienzbewertung) genutzt werden

Aber:
👉 TR‑14 bleibt dann ein technischer Kennwert, kein Grenzwert, keine Pflicht.
3. Extremtemperaturen & „noch sinnvoll einsetzbare Effizienz“

Den Punkt „WP noch sinnvoll einsetzbar bei Extremtemperaturen“
würde ich nicht über JAZ modellieren, sondern gezielter:

    TR‑WP‑COP‑min: COP bei Auslegungstemperatur (z. B. −10 °C)

    TR‑WP‑Bivalenzpunkt: Außentemperatur, ab der Zusatzheizung nötig wird

    TR‑WW‑MaxTemp: maximal erreichbare WW‑Temperatur der WP

    Szenario E‑Kältewelle: mehrere Tage unter Auslegungstemperatur

Damit kannst du viel präziser abbilden:

    wann die WP technisch an ihre Grenzen kommt

    wann Zusatzheizung / Notlauf / §14a relevant wird

    wie sich das auf WW‑Bereitung und Heizen auswirkt

Und:
Das passt perfekt zu deinen Konfliktketten (Hygiene, Komfort, Netz, GEG).
4. Fazit für das Modell

    JAZ brauchen wir nicht als Grenzwert oder Pflicht – also nichts in RF.

    Wir können JAZ als TR‑Kennwert behalten (TR‑14), rein analytisch.

    Für Extremtemperaturen und „noch sinnvoll einsetzbare Effizienz“ sind eigene TR‑Knoten (COP bei −10 °C, Bivalenzpunkt, WW‑Grenze) viel besser geeignet.

Wenn du magst, kann ich dir im nächsten Schritt:

    TR‑Knoten für „WP‑Grenzbereiche“ vorschlagen (sprechende Labels, sauber integrierbar)

    und EN‑/RF‑Bezüge dazu skizzieren (z. B. §14a, Notlauf, Komfort, Hygiene).
