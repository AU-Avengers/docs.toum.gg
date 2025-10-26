import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Sheriff.png')} alt="Icon" align="left" style={{height: 60}} />

# Sheriff

### _Shoot the Impostors!_

#### **Alignment:** Crewmate Killing

The **Sheriff** can **shoot** a suspicious player to attempt to kill them.

Depending on settings, an incorrect shot (misfire) may kill the Sheriff or take their ability to shoot for the rest of the game.

### Abilities

|                                                Button                                                |  Ability  |                                                   Description                                                    |        Type        |
| :--------------------------------------------------------------------------------------------------: | :-------: | :--------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/SheriffShootButton.png')} alt="Button" style={{width: 50}} /> | **Shoot** | Shoot a player to kill them, misfiring if they aren't a Impostor or one of the other selected shootable factions | Player Interaction |

### Options

| Option                          | Description                                                             |  Type   | Default |                    Range                     |
| ------------------------------- | ----------------------------------------------------------------------- | :-----: | :-----: | :------------------------------------------: |
| Kill Cooldown                   | Cooldown for killing a player.                                          | Seconds |   25s   |                  10s - 60s                   |
| Can Self Report                 | Determines if the Sheriff can report players they have killed.          | Toggle  |  False  |                 True / False                 |
| Allow Shooting in First Round   | Determines if the Sheriff can shoot in round one.                       | Toggle  |  False  |                 True / False                 |
| Can Shot Neutral Evil Roles     | Determines if the Sheriff can successfully shoot Neutral Evil roles.    | Toggle  |  True   |                 True / False                 |
| Can Shoot Neutral Killer Roles  | Determines if the Sheriff can successfully shoot Neutral Killing roles. | Toggle  |  True   |                 True / False                 |
| Can Shoot Neutral Outlier Roles | Determines if the Sheriff can successfully shoot Neutral Outlier roles. | Toggle  |  True   |                 True / False                 |
| Misfire Kills                   | Who dies from a misfire.                                                | String  | Sheriff | Sheriff / Target / Sheriff & Target / No One |
