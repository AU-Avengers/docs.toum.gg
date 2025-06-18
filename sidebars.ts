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
        description: 'Crewmates are the main characters of the game. They win when they have either completed all tasks, or have managed to kill all impostors and neutral killers. This faction has the following alignments: Investigative, Protective, Killing, Power and Support.',
        image: '/img/Crew.png',
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
            description: 'Investigative roles have the primary ability to gather information about other players. They can use this information to deduce who is crew or not.',
            image: '/img/Icons/Detective.png',
          },
          items:
          [
            'roles/crewmate/investigative/Aurial',
            'roles/crewmate/investigative/Detective',
            'roles/crewmate/investigative/Haunter',
            'roles/crewmate/investigative/Investigator',
            'roles/crewmate/investigative/Lookout',
            'roles/crewmate/investigative/Mystic',
            'roles/crewmate/investigative/Seer',
            'roles/crewmate/investigative/Snitch',
            'roles/crewmate/investigative/Spy',
            'roles/crewmate/investigative/Tracker',
            'roles/crewmate/investigative/Trapper'
          ]
        },
        {
          type: 'category',
          label: 'Killing',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Killing',
            description: 'Killing roles have the primary ability to kill other players. However, with great power comes great responsibility',
            image: '/img/Icons/Sheriff.png',
          },
          items:
          [
            'roles/crewmate/killing/Deputy',
            'roles/crewmate/killing/Hunter',
            'roles/crewmate/killing/Sheriff',
            'roles/crewmate/killing/Veteran',
            'roles/crewmate/killing/Vigilante'
          ]
        },
        {
          type: 'category',
          label: 'Power',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Power',
            description: 'Power roles have the primary ability to influence how the game is played via interfering with the voting capabilities of either their own votes or others\'.',
            image: '/img/Icons/Mayor.png',
          },
          items:
          [
            'roles/crewmate/power/Jailor',
            'roles/crewmate/power/Mayor',
            'roles/crewmate/power/Politician',
            'roles/crewmate/power/Prosecutor',
            'roles/crewmate/power/Swapper'
          ]
        },
        {
          type: 'category',
          label: 'Protective',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Protective',
            description: 'Protective roles have the primary ability to protect other players from being killed. They can use this ability to protect themselves or other players.',
            image: '/img/Icons/Medic.png',
          },
          items:
          [
            'roles/crewmate/protective/Altruist',
            'roles/crewmate/protective/Cleric',
            'roles/crewmate/protective/Medic',
            'roles/crewmate/protective/Oracle'
          ]
        },
        {
          type: 'category',
          label: 'Support',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Support',
            description: 'Support roles have the primary ability to support other players.',
            image: '/img/Icons/Imitator.png',
          },
          items:
          [
            'roles/crewmate/support/Engineer',
            'roles/crewmate/support/Imitator',
            'roles/crewmate/support/Medium',
            'roles/crewmate/support/Plumber',
            'roles/crewmate/support/Transporter'
          ]
        },
        'roles/crewmate/crewmate'
      ]
    },
    {
      type: 'category',
      label: 'Impostors',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Impostors',
        description: 'Impostors are the main antagonists of the game. They win by eliminating all Crewmates or with a sabotage ending the game. This faction has the following alignments: Concealing, Killing, and Support.',
        image: '/img/Imp.png',
      },
      items:
      [
        {
          type: 'category',
          label: 'Concealing',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Concealing',
            description: 'Concealing roles have the ability to kill as well as deceive other players while doing so.',
            image: '/img/Icons/Grenadier.png',
          },
          items:
          [
            'roles/impostor/concealing/Eclipsal',
            'roles/impostor/concealing/Escapist',
            'roles/impostor/concealing/Grenadier',
            'roles/impostor/concealing/Morphling',
            'roles/impostor/concealing/Swooper',
            'roles/impostor/concealing/Venerer',
          ]
        },
        {
          type: 'category',
          label: 'Killing',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Killing',
            description: 'Killing roles have enhanced killing abilities, allowing them to kill other players more effectively than a standard Impostor.',
            image: '/img/Icons/Warlock.png',
          },
          items:
          [
            'roles/impostor/killing/Bomber',
            'roles/impostor/killing/Scavenger',
            'roles/impostor/killing/Traitor',
            'roles/impostor/killing/Warlock'
          ]
        },
        {
          type: 'category',
          label: 'Support',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Support',
            description: 'Support roles have the ability to help their team hide bodies or make killing more accessible.',
            image: '/img/Icons/Janitor.png',
          },
          items:
          [
            'roles/impostor/support/Blackmailer',
            'roles/impostor/support/Hypnotist',
            'roles/impostor/support/Janitor',
            'roles/impostor/support/Miner',
            'roles/impostor/support/Undertaker'
          ]
        },
        'roles/impostor/impostor'
      ]
    },
    {
      type: 'category',
      label: 'Neutrals',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Neutrals',
        description: 'Neutrals have their own goals that may or may not impact others. This faction has the following alignments: Benign, Evil, and Killing.',
        image: '/img/Neutral.png',
      },
      items:
      [
        {
          type: 'category',
          label: 'Benign',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Benign',
            description: 'Benign roles usually help out others or simply live to win the game.',
            image: '/img/Icons/GuardianAngel.png',
          },
          items:
          [
            'roles/neutral/benign/Amnesiac',
            'roles/neutral/benign/Guardian Angel',
            'roles/neutral/benign/Mercenary',
            'roles/neutral/benign/Survivor',
          ]
        },
        {
          type: 'category',
          label: 'Evil',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Evil',
            description: 'Evil roles set out to complete their goals to stay as a kingmaker, leave in victory, or end the game.',
            image: '/img/Icons/Doomsayer.png',
          },
          items:
          [
            'roles/neutral/evil/Doomsayer',
            'roles/neutral/evil/Executioner',
            'roles/neutral/evil/Inquisitor',
            'roles/neutral/evil/Jester',
            'roles/neutral/evil/Phantom',
          ]
        },
        {
          type: 'category',
          label: 'Killing',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Killing',
            description: 'Killing roles set out to be the last killer alive at all costs.',
            image: '/img/Icons/Juggernaut.png',
          },
          items:
          [
            'roles/neutral/killing/Arsonist',
            'roles/neutral/killing/Glitch',
            'roles/neutral/killing/Juggernaut',
            'roles/neutral/killing/Plaguebearer',
            'roles/neutral/killing/Pestilence',
            'roles/neutral/killing/Soul Collector',
            'roles/neutral/killing/Vampire',
            'roles/neutral/killing/Werewolf',
          ]
        },
        'roles/neutral/neutral'
      ]
    },
  ],
};

export default sidebars;