import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Phantom.png')} alt="Icon" align="left" style={{height: 60}} />

# Phantom

### _Complete Your Tasks Without Being Caught!_

#### **Alignment:** Neutral Evil, Ghost Role

When a Neutral role dies, they have a chance to respawn as the **Phantom**, who must complete their tasks without being clicked on to win. 

If successful and the setting is enabled, the Phantom can **Spook** a chosen player to kill them.

### Abilities

|                                               Button                                                |  Ability  |                              Description                               |        Type        |
| :-------------------------------------------------------------------------------------------------: | :-------: | :--------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/JesterHauntButton.png')} alt="Button" style={{width: 50}} /> | **Spook** | If enabled, after winning, the Phantom can Spook a player to kill them. | Player Interaction |

### Options

| Option                      | Description                                                         |  Type  | Default |             Range             |
| --------------------------- | ------------------------------------------------------------------- | :----: | :-----: | :---------------------------: |
| Tasks Left Before Clickable | Determines how many tasks remain before the Phantom can be clicked. | Count  |    3    |             1 -15             |
| Phantom Win                 | Determines what happens if the Phantom wins.                        | String | Nothing | Nothing / Ends Game / Nothing |
