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
  rolesSidebar: [
    {
      type: 'category',
      label: 'Crewmates',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Crewmates',
        description: 'Crewmates are the main faction of the game. They win when they have either completed all tasks, or have managed to eliminate all impostors and neutral killers. This faction has the following alignments: Investigative, Protective, Killing, Power and Support.',
        image: '/img/Crew.png',
      },
      items:
      [
        {
          type: 'category',
          label: 'Crew Investigative',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Crewmate Investigative',
            description: 'Investigative roles have the primary ability to gather information about other players. They can use this information to deduce who is crew or not.',
            image: '/img/Icons/Detective.png',
          },
          items:
          [
            'roles/crewmate/investigative/Aurial',
            'roles/crewmate/investigative/Forensic',
            'roles/crewmate/investigative/Haunter',
            'roles/crewmate/investigative/Investigator',
            'roles/crewmate/investigative/Lookout',
            'roles/crewmate/investigative/Mystic',
            'roles/crewmate/investigative/Seer',
            'roles/crewmate/investigative/Snitch',
             'roles/crewmate/investigative/Sonar',
            'roles/crewmate/investigative/Spy',
            'roles/crewmate/investigative/Trapper'
          ]
        },
        {
          type: 'category',
          label: 'Crew Killing',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Crewmate Killing',
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
          label: 'Crew Power',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Crewmate Power',
            description: 'Power roles have the primary ability to influence how the game is played via interfering with the voting capabilities of either their own votes or others\'.',
            image: '/img/Icons/Mayor.png',
          },
          items:
          [
            'roles/crewmate/power/Jailor',
            'roles/crewmate/power/Mayor',
            'roles/crewmate/power/Monarch',
            'roles/crewmate/power/Politician',
            'roles/crewmate/power/Prosecutor',
            'roles/crewmate/power/Swapper',
            'roles/crewmate/power/Time Lord'
          ]
        },
        {
          type: 'category',
          label: 'Crew Protective',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Crewmate Protective',
            description: 'Protective roles have the primary ability to protect other players from being killed. They can use this ability to protect themselves or other players.',
            image: '/img/Icons/Medic.png',
          },
          items:
          [
            'roles/crewmate/protective/Altruist',
            'roles/crewmate/protective/Cleric',
            'roles/crewmate/protective/Medic',
            'roles/crewmate/protective/Mirrorcaster',
            'roles/crewmate/protective/Oracle',
            'roles/crewmate/protective/Warden'
          ]
        },
        {
          type: 'category',
          label: 'Crew Support',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Crewmate Support',
            description: 'Support roles have the ability to either get extra information for the crew or manipulate the game in subtle ways.',
            image: '/img/Icons/Imitator.png',
          },
          items:
          [
            'roles/crewmate/support/Engineer',
            'roles/crewmate/support/Imitator',
            'roles/crewmate/support/Medium',
            'roles/crewmate/support/Plumber',
            'roles/crewmate/support/Sentry',
            'roles/crewmate/support/Transporter'
          ]
        },
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
          label: 'Imp Concealing',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Impostor Concealing',
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
          label: 'Imp Killing',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Impostor Killing',
            description: 'Killing roles have enhanced killing abilities, allowing them to kill other players more effectively than a standard Impostor.',
            image: '/img/Icons/Warlock.png',
          },
          items:
          [
            'roles/impostor/killing/Ambusher',
            'roles/impostor/killing/Bomber',
            'roles/impostor/killing/Parasite',
            'roles/impostor/killing/Scavenger',
            'roles/impostor/killing/Warlock',
          ]
        },
          {
              type: 'category',
              label: 'Imp Power',
              collapsed: false,
              link: {
                  type: 'generated-index',
                  title: 'Impostor Power',
                  description: 'Power roles have abilities that can be deemed far stronger than other roles, which can alter the game for Impostors drastically.',
                  image: '/img/Icons/Ambassador.png',
              },
              items:
                  [
                      'roles/impostor/power/Ambassador',
                      'roles/impostor/power/Puppeteer',
                      'roles/impostor/power/Spellslinger',
                      'roles/impostor/power/Traitor',
                  ]
          },
        {
          type: 'category',
          label: 'Imp Support',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Impostor Support',
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
          label: 'Neut Benign',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Neutral Benign',
            description: 'Benign roles usually help out others or simply live to win the game.',
            image: '/img/Icons/GuardianAngel.png',
          },
          items:
          [
            'roles/neutral/benign/Amnesiac',
            'roles/neutral/benign/Fairy',
            'roles/neutral/benign/Mercenary',
            'roles/neutral/benign/Survivor',
          ]
        },
        {
          type: 'category',
          label: 'Neut Evil',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Neutral Evil',
            description: 'Evil roles set out to complete their goals to stay as a kingmaker, leave in victory, or end the game.',
            image: '/img/Icons/Doomsayer.png',
          },
          items:
          [
            'roles/neutral/evil/Doomsayer',
            'roles/neutral/evil/Executioner',
            'roles/neutral/evil/Jester',
            'roles/neutral/evil/Spectre',
          ]
        },
        {
          type: 'category',
          label: 'Neut Killing',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Neutral Killing',
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
               {
          type: 'category',
          label: 'Neut Outlier',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Neutral Outlier',
            description: 'Outlier roles set out to achieve their own goals and leave in victory.',
            image: '/img/Icons/Inquuisitor.png',
          },
          items:
          [
           'roles/neutral/outlier/Chef',
           'roles/neutral/outlier/Inquisitor',
          ]
        },
      ]
    },
  ],
  modifiersSidebar: [
    {
      type: 'category',
      label: 'Alliances',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Alliances',
        description: 'Alliances are modifiers that allow players to form teams with other players. These alliances can either go alongside their role as an optional win condition or outright replace it. These modifiers can be stacked with a Faction and Universal modifier.',
        image: '/img/Egotist.png',
      },
      items:
      [
       'modifiers/alliance/Crewpostor', 
       'modifiers/alliance/Egotist',
       'modifiers/alliance/Lovers',
      ]
    },
    {
      type: 'category',
      label: 'Crewmate',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Crewmate',
        description: 'These modifiers are Crewmate specific, and can be stacked with an Alliance and Universal modifier.',
        image: '/img/Bait.png',
      },
      items:
      [
        'modifiers/crewmate/Aftermath',
        'modifiers/crewmate/Bait',
        'modifiers/crewmate/Celebrity',
        'modifiers/crewmate/Diseased',
        'modifiers/crewmate/Frosty',
        'modifiers/crewmate/Investigator',
        'modifiers/crewmate/Multitasker',
        'modifiers/crewmate/Noisemaker',
        'modifiers/crewmate/Operative',
        'modifiers/crewmate/Rotting',
        'modifiers/crewmate/Scientist',
        'modifiers/crewmate/Scout',
        'modifiers/crewmate/Spy',
        'modifiers/crewmate/Taskmaster',
        'modifiers/crewmate/Torch',
      ]
    },
    {
      type: 'category',
      label: 'Impostor',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Impostor',
        description: 'These modifiers are Impostor specific, and can be stacked with an Alliance and Universal modifier.',
        image: '/img/Saboteur.png',
      },
      items:
      [
        'modifiers/impostor/Circumvent',
        'modifiers/impostor/Deadly Quota',
        'modifiers/impostor/Disperser',
        'modifiers/impostor/Double Shot',
        'modifiers/impostor/Saboteur',
        'modifiers/impostor/Telepath',
        'modifiers/impostor/Underdog',
      ]
    },
    {
      type: 'category',
      label: 'Universal',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Universal',
        description: 'These modifiers are Universal and can apply to anyone, which can be stacked with an Alliance and Faction modifier.',
        image: '/img/Shy.png',
      },
      items:
      [
        'modifiers/universal/Button Barry',
        'modifiers/universal/Flash',
        'modifiers/universal/Giant',
        'modifiers/universal/Immovable',
        'modifiers/universal/Mini',
        'modifiers/universal/Radar',
        'modifiers/universal/Satellite',
        'modifiers/universal/Shy',
        'modifiers/universal/Sixth Sense',
        'modifiers/universal/Sleuth',
        'modifiers/universal/Tiebreaker',
      ]
    },
  ],
  installSidebar: [
    'install/intro',
    {
      type: 'category',
      label: 'Windows Install',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Windows Install',
        description: 'These guides will help you install Town of Us: Mira on Windows for the following platforms: Epic Games, Itch.io, Microsoft Store and Steam.',
        image: '/img/Spy.png',
      },
      items:
      [
        'install/windows/Epic Games',
        'install/windows/Itch.io',
        'install/windows/Microsoft Store',
        'install/windows/Steam',
      ]
    },
    {
      type: 'category',
      label: 'Android Install',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Android',
        description: 'Android installation guide for Town of Us: Mira. This guide will help you install the mod on Android using Starlight.',
        image: '/img/Scientist.png',
      },
      items:
      [
        // 'install/android/Starlight',
      ]
    },
    {
      type: 'category',
      label: 'Linux / Steam Deck Install',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Linux',
        description: 'These guides will help you install Town of Us: Mira on Linux for the following platforms: Epic Games (Heroic Launcher), Itch.io and Steam.',
        image: '/img/Operative.png',
      },
      items:
      [
        'install/linux/Heroic',
        'install/linux/Itch.io',
        'install/linux/Steam',
      ]
    },
  ],
};

export default sidebars;
