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

## Pflichtfelder
- **[id](ca://s?q=Node_id_erkl%C3%A4ren)** → eindeutige, sprechende ID  
- **[label](ca://s?q=Node_label_erkl%C3%A4ren)** → Klartext  
- **[type](ca://s?q=Node_type_erkl%C3%A4ren)** → TR, RF, EN, E4, SB, PB  
- **[properties.domain](ca://s?q=Node_domain_erkl%C3%A4ren)** → thematische Zuordnung  
- **[properties.description](ca://s?q=Node_description_erkl%C3%A4ren)** → kurze, präzise Beschreibung  
- **[properties.source](ca://s?q=Node_source_erkl%C3%A4ren)** → Norm/Gesetz/Technik  
- **[properties.version](ca://s?q=Node_version_erkl%C3%A4ren)** → immer „2.0“ für Full‑Rebuild  

## Optionale Felder
- **[tags](ca://s?q=Node_tags_erkl%C3%A4ren)** → semantische Suchbegriffe  
- **[unit](ca://s?q=Node_unit_erkl%C3%A4ren)** → falls physikalisch  
- **[category](ca://s?q=Node_category_erkl%C3%A4ren)** → z. B. „warmwater_demand“
