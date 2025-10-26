import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Altruist.png')} alt="Icon" align="left" style={{height: 60}} />

# Altruist

### _Revive Dead Crewmates!_

#### **Alignment:** Crewmate Protective

The **Altruist** can **revive** dead players in groups. However, during revives, the Altruist is frozen in place until the revive is complete and the location of the Altruist and revived players is revealed to all killers.

### Abilities

|                                             Button                                             |  Ability   |               Description               |        Type        |
| :--------------------------------------------------------------------------------------------: | :--------: | :-------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/ReviveButton.png')} alt="Button" style={{width: 50}} /> | **Revive** | Revive a group of dead bodies near you. | Player Interaction |

### Options

| Option                             |                                  Description                                   |    Type    | Default |    Range     |
| ---------------------------------- | :----------------------------------------------------------------------------: | :--------: | :-----: | :----------: |
| Revive Duration                    |                   How long it takes to revive dead players.                    |  Seconds   |   10s   |   1 - 15s    |
| Revive Range                       |                        The radius for reviving players.                        | Multiplier |  0.25x  |    1 - 5     |
| Revive Uses                        |               How many times the Altruist can use their ability.               |   Count    |    2    |    1 - 5     |
| Hide Bodies at Beginning of Revive | Determines whether bodies will disappear at the beginning of a revive attempt. |   Toggle   |  False  | True / False |
