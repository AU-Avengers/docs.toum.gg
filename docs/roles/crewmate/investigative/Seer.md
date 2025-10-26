import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Seer.png')} alt="Icon" align="left" style={{height: '60px', margin: '00px 10px 00px -10px'}} />

# Seer

### _Reveal the alliance of other players!_

#### Alignment: Crewmate Investigative

The **Seer** is able to **Reveal** the alliance of other players, seeing player names as red or green depending on their faction and role.

### Abilities

| Button                                                                                       | Ability    |                                          Description                                          |        Type        |
| -------------------------------------------------------------------------------------------- | ---------- | :-------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/SeerButton.png')} alt="Button" style={{width: 50}} /> | **Reveal** | Reveals the alliance of a player, showing red or green based on whether or not they are good. | Player Interaction |

### Role Settings

| Option                         |                               Description                                |  Type   | Default |    Range     |
| ------------------------------ | :----------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Seer Cooldown                  |                     Cooldown for revealing a player                      | Seconds |   25s   |  10s - 60s   |
| Crewmate Killing Roles Are Red |    Toggles whether Crewmate Killing roles appear as evil to the seer     | Toggle  |  False  | True / False |
| Neutral Benign Roles Are Red   |     Toggles whether Neutral Benign roles appear as evil to the seer      | Toggle  |  False  | True / False |
| Neutral Evil Roles Are Red     |      Toggles whether Neutral Evil roles appear as evil to the seer       | Toggle  |  False  | True / False |
| Neutral Killing Roles Are Red  |     Toggles whether Neutral Killing roles appear as evil to the seer     | Toggle  |  True   | True / False |
| Traitor Swaps Colors           | Toggles whether a turned Traitor appears to change alliances to the Seer | Toggle  |  True   | True / False |
