import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Spellslinger.png')} alt="Icon" align="left" style={{height: 60}} />

# Spellslinger

### _Hex Everyone to Bomb Them All!_

#### **Alignment:** Impostor Power

The **Spellslinger** can **hex** a player, priming them for detonation. Once all non-Impostors are hexed, they may set off a **Hex Bomb** after a set amount of time to win!

### Abilities

|                                             Button                                              | Ability  |                                            Description                                            |      Type       |
|:-----------------------------------------------------------------------------------------------:| :------: | :-----------------------------------------------------------------------------------------------: | :-------------: |
|   <img src={useBaseUrl('/img/ImpButtons/HexButton.png')} alt="Button" style={{width: 50}} />    |   **Hex**    |                            Hex a player, priming them for detonation.                             |  Basic Ability  |
| <img src={useBaseUrl('/img/ImpButtons/HexBombButton.png')} alt="Button" style={{width: 50}} /> | **Hex Bomb** | Begin the countdown for the hex bomb. If you are alive when the hex bomb triggers, impostors win! | Delayed Ability |

### Options

| Option                      |                  Description                  |  Type   | Default |   Range   |
| --------------------------- | :-------------------------------------------: | :-----: | :-----: | :-------: |
| Hex Cooldown                |         Cooldown for Hexing players.          | Seconds |   25s   | 10 - 60s  |
| Max Hexes                   | Maximum number of times you can Hex per game. |  Uses   |    5    |  3 - 15   |
| Hex Bomb Countdown Duration |            Countdown for Hex Bomb.            | Seconds |  120x   | 30 - 180s |
