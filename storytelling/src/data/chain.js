// Single source of content for the storytelling page.
//
// HOW TO EDIT (no code knowledge needed):
//   - Each entry in `nodes` is one card in the vertical "effect chain".
//   - `tag`    : small label shown on top of the card.
//   - `title`  : the bold card headline.
//   - `ref`    : the law / norm reference shown under the title.
//   - `modal`  : what opens when the card is clicked:
//        paragraph -> the (DRAFT) legal/norm excerpt
//        postit    -> the plain-language "what this means for politics" note
//        source    -> a reminder that the exact paragraph must be verified
//
// All legal/norm texts below are DRAFT placeholders. Replace them with the
// verified paragraphs — the whole point of this page is single-case
// correctness ("der gordische Knoten"). Layout is driven by `row` (top to
// bottom) and `col` ('left' | 'center' | 'right'). `edges` are the threads
// drawn between cards: [fromId, toId].

const VERIFY = 'Platzhalter — exakten Paragraphen / die Normstelle bitte fachlich verifizieren.'

export const chain = {
  meta: {
    kicker: 'Wärmewende im Gebäudebestand',
    title: 'Vom Klimaziel bis zur Grenze im Keller',
    intro:
      'Jeder einzelne Schritt ist gesetzeskonform. Trotzdem endet die Sanierung im Bestand oft an einer physischen Wand. Scrollen Sie die Wirkkette entlang — und sehen Sie, wo der gordische Knoten liegt.',
    outroTitle: 'Der gordische Knoten',
    outro:
      'GEG, EnWG, MsbG und die VDE-Normen sind für sich genommen sinnvoll. In Summe treffen sie sich im engen Zählerschrank eines Bestandsgebäudes — und blockieren das Vorhaben. Genau diese Wirkkette sichtbar zu machen, ist der Zweck dieser Seite.',
  },

  nodes: [
    {
      id: 'goal',
      kind: 'goal',
      row: 1,
      col: 'center',
      tag: 'Politisches Ziel',
      title: 'CO₂-Neutralität 2045',
      ref: 'Klimaschutzgesetz · Zieljahr 2045',
      modal: {
        paragraph:
          'Der Gebäudebestand soll bis 2045 klimaneutral beheizt werden. (DRAFT — Zielformulierung und Quelle einsetzen.)',
        postit:
          'Klartext: Alle Heizungen im Bestand müssen perspektivisch CO₂-frei werden. Von hier startet die Wirkkette.',
        source: VERIFY,
      },
    },

    // --- Pfad A (links): GEG -> Wärmepumpe ---
    {
      id: 'geg',
      kind: 'law',
      row: 2,
      col: 'left',
      tag: 'Gesetz · Pfad A',
      title: 'GEG',
      ref: 'Gebäudeenergiegesetz · § _ (prüfen)',
      modal: {
        paragraph:
          'Das GEG verlangt für neue Heizungen einen Mindestanteil erneuerbarer Energie. (DRAFT — konkreten Paragraphen und Prozentwert einsetzen.)',
        postit:
          'Klartext: Das GEG schiebt Eigentümer Richtung Wärmepumpe — sie ist der einfachste Weg, die EE-Pflicht zu erfüllen.',
        source: VERIFY,
      },
    },
    {
      id: 'waermepumpe',
      kind: 'tech',
      row: 3,
      col: 'left',
      tag: 'Technik · Folge aus Pfad A',
      title: 'Wärmepumpe',
      ref: 'Elektrische Wärmepumpe',
      modal: {
        paragraph:
          'Die Wärmepumpe erfüllt die GEG-Pflicht — zieht aber elektrische Leistung, die der Hausanschluss bereitstellen muss. (DRAFT)',
        postit:
          'Klartext: Aus „Gesetz erfüllen" wird ein realer, großer Stromverbraucher im Keller.',
        source: VERIFY,
      },
    },

    // --- Pfad B (rechts): EnWG -> MsbG -> Intelligentes Messsystem ---
    {
      id: 'enwg',
      kind: 'law',
      row: 2,
      col: 'right',
      tag: 'Gesetz · Pfad B',
      title: 'EnWG',
      ref: 'Energiewirtschaftsgesetz · § _ (prüfen)',
      modal: {
        paragraph:
          'Das EnWG regelt Netzanschluss und steuerbare Verbrauchseinrichtungen. (DRAFT — Paragraphen einsetzen.)',
        postit:
          'Klartext: Wer viel Strom zieht (die Wärmepumpe!), fällt unter Netz-Steuerungsregeln — das Messsystem muss mitspielen.',
        source: VERIFY,
      },
    },
    {
      id: 'msbg',
      kind: 'law',
      row: 3,
      col: 'right',
      tag: 'Gesetz · Pfad B',
      title: 'MsbG',
      ref: 'Messstellenbetriebsgesetz · § _ (prüfen)',
      modal: {
        paragraph:
          'Das MsbG schreibt den Rollout intelligenter Messsysteme für steuerbare Verbraucher vor. (DRAFT)',
        postit:
          'Klartext: Für die steuerbare Wärmepumpe wird ein intelligentes Messsystem zur Pflicht.',
        source: VERIFY,
      },
    },
    {
      id: 'smartmeter',
      kind: 'tech',
      row: 4,
      col: 'right',
      tag: 'Technik · Folge aus Pfad B',
      title: 'Intelligentes Messsystem',
      ref: 'Smart-Meter-Gateway + Steuerbox',
      modal: {
        paragraph:
          'Das intelligente Messsystem braucht zusätzliche Module und Platz im Zählerschrank. (DRAFT)',
        postit:
          'Klartext: Noch ein Gerät, das in den ohnehin engen Zählerschrank muss.',
        source: VERIFY,
      },
    },

    // --- Zusammenführung: VDE -> Platz/Brandschutz -> Blockade ---
    {
      id: 'vde',
      kind: 'law',
      row: 5,
      col: 'center',
      tag: 'Technische Norm · Zusammenführung',
      title: 'VDE-Normen',
      ref: 'VDE-AR-N 4100 / VDE 0100 · (prüfen)',
      modal: {
        paragraph:
          'Die VDE-Anwendungsregeln definieren Mindestplatz, Abstände und Anordnung im Zählerschrank und Hausanschlussraum. (DRAFT — konkrete Normstelle einsetzen.)',
        postit:
          'Klartext: Hier treffen beide Pfade aufeinander. Wärmepumpen-Anschluss UND Messsystem müssen die VDE-Platzregeln gleichzeitig einhalten.',
        source: VERIFY,
      },
    },
    {
      id: 'platz',
      kind: 'tech',
      row: 6,
      col: 'center',
      tag: 'Physische Realität',
      title: 'Platzbedarf & Brandschutz',
      ref: 'Zählerschrank · Brandschutz (LBO / MLAR) · (prüfen)',
      modal: {
        paragraph:
          'Im Bestand ist der vorhandene Zählerschrank oft zu klein; Brandschutzauflagen verschärfen die Lage zusätzlich. (DRAFT)',
        postit:
          'Klartext: Das Haus wurde nie für so viel Technik gebaut. Der Keller ist die harte Grenze.',
        source: VERIFY,
      },
    },
    {
      id: 'blockade',
      kind: 'blockade',
      row: 7,
      col: 'center',
      tag: 'Blockade',
      title: 'KO-Kriterium',
      ref: 'Vorhaben gestoppt — trotz erfüllter Gesetze',
      modal: {
        paragraph:
          'Reichen Platz und Brandschutz nicht aus, ist die Sanierung an dieser Stelle blockiert — obwohl jeder einzelne Schritt regelkonform war. (DRAFT)',
        postit:
          'Klartext: Jeder Schritt war für sich korrekt — und am Ende geht es im Keller physisch nicht. Das ist der gordische Knoten.',
        source: VERIFY,
      },
    },
  ],

  edges: [
    ['goal', 'geg'],
    ['goal', 'enwg'],
    ['geg', 'waermepumpe'],
    ['enwg', 'msbg'],
    ['msbg', 'smartmeter'],
    ['waermepumpe', 'vde'],
    ['smartmeter', 'vde'],
    ['vde', 'platz'],
    ['platz', 'blockade'],
  ],
}
