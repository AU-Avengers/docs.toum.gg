import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Trapper.png')} alt="Icon" align="left" style={{height: 60}} />

# Trapper

### _Catch Killers in the Act!_

#### **Alignment:** Crewmate Investigative

The **Trapper** can place **traps** around the map to learn the roles of other players. Players must stand in, or walk through, the trap for a set time to 'trap' their roles. The Trapper will see a list of the roles in the next meeting, in a randomised order.

### Abilities

| Button                                                                                       | Ability  |                                               Description                                                |    Type    |
| -------------------------------------------------------------------------------------------- | :------: | :------------------------------------------------------------------------------------------------------: | :--------: |
| <img src={useBaseUrl('/img/CrewButtons/TrapButton.png')} alt="Button" style={{width: 50}} /> | **Trap** | Places down a trap that detects and stores the roles of people within its range after a few seconds | Targetless |

### Options

| Option                                           |                                               Description                                               |    Type    | Default |    Range     |
| ------------------------------------------------ | :-----------------------------------------------------------------------------------------------------: | :--------: | :-----: | :----------: |
| Trap Cooldown                                    |                                       Cooldown for placing traps                                        |  Seconds   |   20s   |   1s - 30s   |
| Min Amount Of Time In Trap To Register           |              How long should a player be within the trap's range to gather their role info              |  Seconds   |   5s    |   0s - 15s   |
| Max Number Of Traps                              |                            The maximum number of traps the Trapper can place                            |   Count    |    5    |    1 - 15    |
| Trap Size                                        |                                         The range of the traps                                          | Multiplier |  0.25x  |  0.05x - 1x  |
| Traps Removed After Each Round                   |                    Toggles whether trap positions reset at the end of every meeting                     |   Toggle   |  True   | True / False |
| ┗ Get More Uses From Completing Tasks            |               Toggles whether the maximum number of traps increases upon task completion                |   Toggle   |  False  | True / False |
| Minimum Number Of Roles Required To Trigger Trap | The minimum threshold of roles the traps much have gathered before the info is presented to the Trapper |   Count    |    3    |    1 - 15    |

### Strategy Guide

Place your traps in high-traffic areas, such as the meeting area, Dropship, Decontamination, Medbay, Security, Admin, and any area where players most often stay still. This will yield you the most information overall, but won't narrow down players.

Alternatively, you can place traps below players while they're doing tasks or when they are standing still to narrow down what role they truly are.
