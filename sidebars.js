// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'fahrplan',
    {
      type: 'category',
      label: 'Einsteiger',
      items: [
        {
          type: 'category',
          label: 'Aufgabe 1',
          items: [
            'einsteiger/aufgabe-1-teambuilding',
            'einsteiger/loesung-aufgabe-1-teambuilding',
          ],
        },
        {
          type: 'category',
          label: 'Aufgabe 2',
          items: [
            'einsteiger/aufgabe-2-erster-flug',
            'einsteiger/loesung-aufgabe-2-erster-flug',
          ],
        },
        {
          type: 'category',
          label: 'Aufgabe 3',
          items: [
            'einsteiger/aufgabe-3-jojo',
            'einsteiger/loesung-aufgabe-3-jojo',
          ],
        },
        {
          type: 'category',
          label: 'Aufgabe 4',
          items: [
            'einsteiger/aufgabe-4-flugmanoever-akrobatik',
            'einsteiger/loesung-aufgabe-4-flugmanoever-akrobatik',
          ],
        },
        {
          type: 'category',
          label: 'Aufgabe 5',
          items: [
            'einsteiger/aufgabe-5-praezisionsflug',
            'einsteiger/loesung-aufgabe-5-praezisionsflug',
          ],
        },
        {
          type: 'category',
          label: 'Zusatzaufgabe',
          items: [
            'einsteiger/aufgabe-zusatzaufgabe-parcour',
            'einsteiger/loesung-aufgabe-zusatzaufgabe-parcour',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Fortgeschrittene',
      items: [
        {
          type: 'category',
          label: 'Aufgabe 6',
          items: [
            'fortgeschrittene/aufgabe-1-abstandshalter-2-0',
            'fortgeschrittene/loesung-aufgabe-1-abstandshalter-2-0',
          ],
        },
        {
          type: 'category',
          label: 'Aufgabe 7',
          items: [
            'fortgeschrittene/aufgabe-2-sicherheits-landung-hindernis',
            'fortgeschrittene/loesung-aufgabe-2-sicherheits-landung-hindernis',
          ],
        },
        {
          type: 'category',
          label: 'Aufgabe 8',
          items: [
            'fortgeschrittene/aufgabe-3-hoehen-autopilot',
            'fortgeschrittene/loesung-aufgabe-3-hoehen-autopilot',
          ],
        },
        {
          type: 'category',
          label: 'Aufgabe 9',
          items: [
            'fortgeschrittene/aufgabe-4-praezisionsnavigation',
            'fortgeschrittene/loesung-aufgabe-4-praezisionsnavigation',
          ],
        },
        {
          type: 'category',
          label: 'Aufgabe 10',
          items: [
            'fortgeschrittene/aufgabe-5-farben-lande-entscheidung',
            'fortgeschrittene/loesung-aufgabe-5-farben-lande-entscheidung',
          ],
        },
        {
          type: 'category',
          label: 'Aufgabe 11',
          items: [
            'fortgeschrittene/aufgabe-6-sensorfusion-telemetrie-challenge',
            'fortgeschrittene/loesung-aufgabe-6-sensorfusion-telemetrie-challenge',
          ],
        },
      ],
    },
    'fragebogen',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
