import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Ambusher.png')} alt="Icon" align="left" style={{height: 60}} />

# Ambusher

### _Kidnap Crewmates into the Shadows!_

#### **Alignment:** Impostor Killing

The **Ambusher** can **pursue** a player, getting an arrow to their location. When the pursued player is next to another player, the Ambusher can **ambush** to force their pursued target to kill the nearby player. If successful, they will drag the body into the shadows, teleporting it back to the Ambusher.

<img src={useBaseUrl('/img/RoleScreenshots/AmbushVisual.gif')} />

### Abilities

|                                            Button                                             |  Ability   | Description                                                                       |        Type        |
| :-------------------------------------------------------------------------------------------: | :--------: | --------------------------------------------------------------------------------- | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/PursueButton.png')} alt="Button" style={{width: 50}} /> | **Pursue** | Pursue a player to be able to ambush another player next to them at a later time. | Player Interaction |
| <img src={useBaseUrl('/img/ImpButtons/AmbushButton.png')} alt="Button" style={{width: 50}} /> | **Ambush** | Ambush the closest player to the pursued target to kill them.                     |   Basic Ability    |

### Options

| Option                         |                                              Description                                               |  Type   | Default |    Range     |
| ------------------------------ | :----------------------------------------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Ambushes Users Per Game        |                           Max times the Ambush ability can be used per game.                           |  Count  |    ∞    |    1 - 15    |
| Ambush Cooldown                |                                 Cooldown for using the Ambush ability.                                 | Seconds |   25s   |  10s - 60s   |
| Pursue Arrow Update Interval   |                  How often the Pursue arrow will update, tracking the target player.                   | Seconds |  2.5s   |   0s - 15s   |
| Stop Pursuing Player on Ambush | Determines whether the Pursue target will be removed from the target player after a successful Ambush. | Toggle  |  True   | True / False |
| Ambusher Can Vent              |                             Determines whether the Ambusher can use vents.                             | Toggle  |  True   | True / False |
