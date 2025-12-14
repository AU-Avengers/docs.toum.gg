import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Imitator.png')} alt="Icon" align="left" style={{height: 60}} />

# Imitator

### _>Use Dead Roles To Benefit The Crew!_

#### **Alignment:** Crewmate Support

The **Imitator** can use the roles of dead players. During meetings, the Imitator can select a dead player and will **imitate** the target's role and abilities in the next round.

**Note:** Certain roles are inaccessible if there are multiple living Imitators.

### Abilities

|                                              Button                                              |   Ability   |            Description            |           Type           |
| :----------------------------------------------------------------------------------------------: | :---------: | :-------------------------------: | :----------------------: |
| <img src={useBaseUrl('/img/OtherButtons/ImitateSelect.png')} alt="Button" style={{width: 50}} /> | **Imitate** | Selects a dead player to Imitate. | Targeted Meeting Ability |

### Options

| Option                                             |                                                  Description                                                   |  Type  | Default |    Range     |
| -------------------------------------------------- | :------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Imitate Specific Neutrals to be Similar Crew Roles | Determines whether the Imitator can also imitate dead Neutrals, taking on a Crew role with similar abilities.  | Toggle |  True   | True / False |
| Imitate Specific Impostor to be Similar Crew Roles | Determines whether the Imitator can also imitate dead Impostors, taking on a Crew role with similar abilities. | Toggle |  True   |  True False  |

### Imitated Counterparts

| Neutral Role | Imitated Counterpart |     |  Impostor Role  | Imitated Counterpart |
|:------------:|:--------------------:| :-: |:---------------:|:--------------------:|
|  Amnesiac   |      Mystic      |     | Ambassador |     Vigilante      |
|   Arsonist    |      Cleric      |     | Ambusher |     Sonar      |
| Chef   |      Forensic      |     | Blackmailer |     Spy      |
|  Doomsayer   |      Vigilante      |     | Bomber |     Trapper      |
|  Executioner   |      Snitch      |     | Escapist |     Transporter      |
|  Fairy   |      Mirrorcaster      |     | Hypnotist |     Lookout      |
|  Glitch   |      Lookout      |     | Janitor |     Forensic      |
|  Inquisitor   |      Sheriff      |     | Miner |     Plumber      |
|  Jester   |      Engineer      |     | Scavenger |     Investigator      |
|  Mercenary   |      Warden      |     | Spellslinger |     Cleric      |
|  Pestilence   |      Veteran      |     | Undertaker |     Altruist      |
|  Plaguebearer   |      Aurial      |     | Venerer |     Hunter      |
|  Soul Collector  |      Medium      |     | Warlock |     Veteran      |
|  Vampire   |      Seer      |     |  |           |
|  Werewolf   |      Hunter      |     |  |           |
