# Analyse der RF‑Nodes im Kontext SB‑K11 und SB‑K12 (v2.2)

## DIN VDE 0100: Sichere Elektroinstallationen durchführen

---

## 🎯 1. Welche RF‑Nodes decken SB‑K11 bereits ab?

SB‑K11 (Neue Elektroanforderungen vs. Bestandsschutz) benötigt RF‑Knoten zu:

- Anmeldepflicht  
- Steuerbarkeit (§14a)  
- Netzanschlussregeln  
- Selektivität  
- Zählerplatzanforderungen  
- NAV / Netzbetreiberprozesse  

### In deiner Datei vorhanden:

| RF‑Node | Bedeutung | Relevanz für SB‑K11 |
|--------|-----------|---------------------|
| **RF‑78 – VDE‑AR‑N 4100** | Netzanschlussregeln, Anmeldepflicht | kritisch |
| **RF‑85 – NAV** | Netzanschlussverordnung | kritisch |
| **RF‑77 – DIN 18015‑2** | Elektroinstallation | mittel |
| **RF‑80 – VDE 0100‑729** | Sicherheit | mittel |
| **RF‑83 – DGUV V3** | Prüfung | gering |
| **RF‑84 – DGUV 203‑032** | Brandschutz | gering |

### ❗ Was fehlt?

Der wichtigste RF‑Knoten fehlt:

**§14a EnWG – Steuerbare Verbrauchseinrichtungen**

Ohne diesen RF‑Knoten kann SB‑K11 **nicht korrekt cross‑layer** verdrahtet werden.

---

## 🎯 2. Welche RF‑Nodes decken SB‑K12 bereits ab?

SB‑K12 (Systembilanz vs. Maßnahmenlogik) benötigt RF‑Knoten zu:

- GEG‑Systembilanz  
- GEG‑Endenergie/Primärenergie  
- DIN V 18599  
- Warmwasserberechnung  
- Förderrecht (BEG/BAFA/KfW)  

### In deiner Datei vorhanden:

| RF‑Node | Bedeutung | Relevanz für SB‑K12 |
|--------|-----------|---------------------|
| **RF‑60 – GEG Primärenergie** | Systembilanz | kritisch |
| **RF‑61 – GEG Endenergie** | Systembilanz | kritisch |
| **RF‑63 – DIN V 18599** | Methodik | kritisch |
| **RF‑62 – Warmwasser** | Systemtreiber MFH | hoch |
| **RF‑90 – BEG** | Maßnahmenlogik | kritisch |
| **RF‑91 – BAFA** | Maßnahmenlogik | kritisch |
| **RF‑92 – KfW** | Maßnahmenlogik | kritisch |

### ✔ SB‑K12 ist RF‑seitig vollständig abbildbar.

---

## ⭐ 3. Welche RF‑Nodes müssen wir neu anlegen?

Für SB‑K11 fehlt zwingend:

```json
{
  "id": "RF-89",
  "label": "§14a EnWG – Steuerbare Verbrauchseinrichtungen",
  "type": "RF",
  "properties": {
    "domain": "electrical",
    "description": "Regelt die Anforderungen an steuerbare Verbrauchseinrichtungen wie Wärmepumpen. Löst neue technische Anforderungen, Messkonzepte und Netzbetreiberprozesse aus.",
    "source": "§14a EnWG",
    "version": "2.2"
  }
}
