import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Chef.png')} alt="Icon" align="left" style={{height: 60}} />

# Chef

### _Fresh and Ready to Serve!_

#### **Alignment:** Neutral Outlier

The **Chef** must discover dead bodies and **cook** them in order to **serve** them as meals to other players. Once the Chef meets their quota, they will win alongside any other faction.

### Abilities

|                                               Button                                               | Ability |                        Description                        |        Type        |
| :------------------------------------------------------------------------------------------------: | :-----: | :-------------------------------------------------------: | :----------------: |
|   <img src={useBaseUrl('/img/NeutButtons/IgniteButton.png')} alt="Button" style={{width: 50}} />   |  **Cook**   |        Cook a dead body and save it for later use.        | Player Interaction |
| <img src={useBaseUrl('/img/NeutButtons/ChefServe.gif')} alt="Button" style={{width: 50}} /> |  **Serve**  | Serve the oldest meal you have on hand to another player. | Player Interaction |

### Options

| Option                                  |               Description                |  Type   | Default |    Range     |
| --------------------------------------- | :--------------------------------------: | :-----: | :-----: | :----------: |
| Serve Cooldown                          |      Cooldown for Serving players.       | Seconds |   25s   |   10 - 60s   |
| Cook Cooldown                           |       Cooldown for cooking bodies.       | Seconds |   25s   |   10 - 60s   |
| Reset Cook and Serve Cooldowns Together |       Reset the ability cooldowns.       | Toggle  |  True   | True / False |
| Amount of Servings Needed               |   Number of servings required to win.    |  Count  |    3    |    2 - 5     |
| Duration of Side Effects                |     How long side effects will last      | Seconds |   60s   |   0 - 120s   |
| Show Arrows Pointing to Dead Bodies     |      Cooldown for Serving players.       | Toggle  |  True   | True / False |
| Dead Body Arrow Delay                   |     Delay before the arrow appears.      | Seconds |  0.5s   |   0 - 15s    |
| Dead Body Arrow Duration                | How long an arrow points to a dead body. | Seconds |   25s   |   ∞ - 15s    |
