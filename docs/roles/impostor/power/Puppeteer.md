import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Puppeteer.png')} alt="Icon" align="left" style={{height: 60}} />

# Puppeteer

### _Control crewmates to do your bidding!_

#### **Alignment:** Impostor Power

The **Puppeteer** can take control of another player and force them to kill someone else. When using the **Control** ability, the Puppeteer will see a menu to choose their victim from and can then control them for a set time. During the Control duration, the Puppeteer will stand still.

### Abilities

|                                             Button                                             |   Ability   |                 Description                 |        Type        |
| :--------------------------------------------------------------------------------------------: | :---------: | :-----------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/ControlButton.png')} alt="Button" style={{width: 50}} /> | **Control** | Opens a menu to choose a player to control. | Player Interaction |

### Options

| Option                                        |                               Description                               |  Type   | Default |     Range     |
| --------------------------------------------- | :---------------------------------------------------------------------: | :-----: | :-----: | :-----------: |
| Initial Control Uses                          |        How many times the Control ability can be used initially.        |  Count  |    3    |  0 - 30 / ∞   |
| ┗ Kills Required for Additional Control Use   |          The number of kills required to earn additional uses.          |  Count  |    2    | 1 - 15 / Off  |
| Puppeteer Location Hint Duration (For Victim) | The time that the victim will have a hint for the Puppeteer's location. | Seconds |   3s    | 1 - 30s / Off |
| Control Cooldown                              |                 Cooldown for using the Control ability.                 | Seconds |   25s   |   10 - 120s   |
| Control Duration                              |           How long the Puppeteer can control another player.            | Seconds |   10s   |   5 - 120s    |
| Puppeteer Can Vent                            |               Determines if the Puppeteer can use vents.                | Toggle  |  True   | True / False  |
