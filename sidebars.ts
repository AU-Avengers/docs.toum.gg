import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/create-a-page',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/markdown-features',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
  rolesSidebar: [
    {
      type: 'category',
      label: 'Crewmates',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Crewmates',
        description: 'Crewmates are the main characters of the game. They win when they have either completed all tasks, or have managed to kill all impostors and neutral killers. This faction has the following alignments: investigative, protective, killing, power and support.',
        image: 'img/Crew.png',
      },
      items:
      [
        {
          type: 'category',
          label: 'Investigative',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Investigative',
            description: 'Investigative roles have the primary ability to gather information about other players. They can use this information to deduce who is crew or not.'
          },
          items:
          [
            'roles/crewmate/investigative/aurial',
            'roles/crewmate/investigative/detective',
            'roles/crewmate/investigative/haunter',
            'roles/crewmate/investigative/investigator',
            'roles/crewmate/investigative/lookout',
            'roles/crewmate/investigative/medium',
            'roles/crewmate/investigative/mystic',
            'roles/crewmate/investigative/seer',
            'roles/crewmate/investigative/snitch',
            'roles/crewmate/investigative/spy',
            'roles/crewmate/investigative/tracker',
            'roles/crewmate/investigative/trapper'
          ]
        },
        {
          type: 'category',
          label: 'Killing',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Killing',
            description: 'Killing roles have the primary ability to kill other players. However, with great power comes great responsibility'
          },
          items:
          [
            'roles/crewmate/killing/deputy',
            'roles/crewmate/killing/hunter',
            'roles/crewmate/killing/sheriff',
            'roles/crewmate/killing/veteran',
            'roles/crewmate/killing/vigilante'
          ]
        },
        {
          type: 'category',
          label: 'Power',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Power',
            description: 'Power roles have the primary ability to influence how the game is played via interfering with the voting capabilities of either their own votes or others\'.'
          },
          items:
          [
            'roles/crewmate/power/jailor',
            'roles/crewmate/power/mayor',
            'roles/crewmate/power/politician',
            'roles/crewmate/power/prosecutor',
            'roles/crewmate/power/swapper'
          ]
        },
        {
          type: 'category',
          label: 'Protective',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Protective',
            description: 'Protective roles have the primary ability to protect other players from being killed. They can use this ability to protect themselves or other players.'
          },
          items:
          [
            'roles/crewmate/protective/altruist',
            'roles/crewmate/protective/cleric',
            'roles/crewmate/protective/medic',
            'roles/crewmate/protective/oracle'
          ]
        },
        {
          type: 'category',
          label: 'Support',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Support',
            description: 'Support roles have the primary ability to support other players.'
          },
          items:
          [
            'roles/crewmate/support/engineer',
            'roles/crewmate/support/imitator',
            'roles/crewmate/support/plumber',
            'roles/crewmate/support/transporter'
          ]
        },
        'roles/crewmate/crewmate'
      ]
    },
  ],
};

export default sidebars;