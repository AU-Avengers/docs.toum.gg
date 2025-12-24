import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Altruist.png')} alt="Icon" align="left" style={{height: 60}} />

# Altruist

### _Revive Dead Crewmates!_

#### **Alignment:** Crewmate Protective

The **Altruist** can **revive** dead players in one of three possible ways. However, killers will be alerted and know the locations of revived players and the Altruist.

### Abilities

|                                             Button                                             |  Ability   |               Description               |        Type        |
| :--------------------------------------------------------------------------------------------: | :--------: | :-------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/ReviveButton.png')} alt="Button" style={{width: 50}} /> | **Revive** | Revive a group of dead bodies near you. | Player Interaction |

### Options

|   Option    |                           Description                           |  Type  |     Default     |                   Range                    |
| :---------: | :-------------------------------------------------------------: | :----: | :-------------: | :----------------------------------------: |
| Revive Type | Determines which type of Revive ability the Altruist will have. | String | Group Sacrifice | Group Sacrifice / Group Revive / Sacrifice |

### Group Sacrifice / Revive Options

- **Group Sacrifice:** The Altruist will sacrifice themselves to revive multiple dead players within the set radius, and the Altruist's body will be removed when successful.
- **Group Revive:** The Altruist can revive multiple dead players within the set radius, a set number of times.

| Option                             | Description                                                                    |    Type    |        Default         |                         Range                          |
| ---------------------------------- | ------------------------------------------------------------------------------ | :--------: | :--------------------: | :----------------------------------------------------: |
| Revive Range                       | The radius for reviving players.                                               | Multiplier |         0.25x          |                         1 - 5                          |
| Revive Duration                    | How long it takes to revive dead players.                                      |  Seconds   |           5s           |                        1 - 15s                         |
| Revive Uses (Group Revive)         | How many times the Altruist can use their ability.                             |   Count    |           2            |                         1 - 5                          |
| Freeze Altruist During Revive      | Determines whether the Altruist will be frozen when attempting to revive.      |   Toggle   |          True          |                      True / False                      |
| Hide Bodies at Beginning of Revive | Determines whether bodies will disappear at the beginning of a revive attempt. |   Toggle   |         False          |                      True / False                      |
| Killers Alerted Before Revive      | Determines whether killers will be alerted that a revive is happening.         |   String   |         Nobody         | Nobody / Neutrals / Impostors / Neutrals and Impostors |
| Kilers Alerted After Revive        | Determines whether killers will be alerted after a successful revive.          |   String   | Neutrals and Impsotors | Nobody / Neutrals / Impostors / Neutrals and Impostors |

### Sacrifice Options

- **Sacrifice:** The Altruist will sacrifice themselves to revive a dead player, and their body will be removed if the revive is successful.

| Option                             | Description                                                                    |  Type   |        Default         |                         Range                          |
| ---------------------------------- | ------------------------------------------------------------------------------ | :-----: | :--------------------: | :----------------------------------------------------: |
| Revive Duration                    | How long it takes to revive dead players.                                      | Seconds |           5s           |                        1 - 15s                         |
| Revive Uses                        | How many times the Altruist can use their ability.                             |  Count  |           2            |                         1 - 5                          |
| Freeze Altruist During Revive      | Determines whether the Altruist will be frozen when attempting to revive.      | Toggle  |          True          |                      True / False                      |
| Hide Bodies at Beginning of Revive | Determines whether bodies will disappear at the beginning of a revive attempt. | Toggle  |         False          |                      True / False                      |
| Killers Alerted Before Revive      | Determines whether killers will be alerted that a revive is happening.         | String  |         Nobody         | Nobody / Neutrals / Impostors / Neutrals and Impostors |
| Kilers Alerted After Revive        | Determines whether killers will be alerted after a successful revive.          | String  | Neutrals and Impsotors | Nobody / Neutrals / Impostors / Neutrals and Impostors |
