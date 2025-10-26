import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Miner.png')} alt="Icon" align="left" style={{height: 60}} />

# Miner

### _From the Top, Make it Drop, That's a Vent!_

#### **Alignment:** Impostor Support

The **Miner** can place additional vents around the map which will connect together as one system. Miner vents will not connect to base-game vents.

### Abilities

|                                           Button                                            | Ability  |                                                       Description                                                        |     Type      |
| :-----------------------------------------------------------------------------------------: | :------: | :----------------------------------------------------------------------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/ImpButtons/MineButton.png')} alt="Button" style={{width: 50}} /> | **Mine** | Place a vent where you are standing. These vents won't connect to already existing vents on the map but with each other. | Basic Ability |

### Options

| Option                         |                                Description                                 |         Type          |   Default   |   Range   |
| ------------------------------ | :------------------------------------------------------------------------: | :-------------------: | :---------: | :-------: |
| Number of Miner Vents Per Game |            Maximum times a Mine (vent) can be placed per game.             |         Uses          |      ∞      |  ∞ - 15   |
| Mine Cooldown                  |                        Cooldown for creating vents.                        |        Seconds        |     25s     | 10s - 60s |
| Mine Delay                     |                         Delay for creating vents.                          |        Seconds        |     3s      | 0s - 10s  |
| ┗ Mine Visibility              |              Changes when Miner vents are visible to others.               | Immediate / After Use | Immediately |    N/A    |
| Miner Can Kill With Teammate   | Determines if the Miner can kill with a teammate, or if they must be solo. |        Toggle         |    True     |    N/A    |
