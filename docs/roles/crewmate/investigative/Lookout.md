import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Lookout.png')} alt="Icon" align="left" style={{height: '60px', margin: '00px 10px 00px -10px'}} />

# Lookout

### _Keep your eyes wide open!_

#### Alignment: Crewmate Investigative

The **Lookout** can **watch** other players during rounds, and will discover which roles interacted with the watched players during meetings.

### Abilities

|                                            Button                                             |  Ability  |                                                   Description                                                    |        Type        |
| :-------------------------------------------------------------------------------------------: | :-------: | :--------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/WatchButton.png')} alt="Button" style={{width: 50}} /> | **Watch** | Watch a player, or multiple. In the next meeting, you will know which roles interacted with each watched player. | Player Interaction |

### Options

| Option           |                   Description                   |  Type   | Default |    Range     |
| ---------------- | :---------------------------------------------: | :-----: | :-----: | :----------: |
| Watch Cooldown   |         Cooldown for watching a player.         | Seconds |   20s   |   1s - 30s   |
| Max Watches      |      Maximum players that can be watched.       |  Count  |    5    |    1 - 15    |
| Reset Each Round | Determines if uses are reset each round or not. | Toggle  |  True   | True / False |
| ┗ Task Uses      |   Determines if doing tasks gives more uses.    | Toggle  |  False  | True / False |
