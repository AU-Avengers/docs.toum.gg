import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Jester.png')} alt="Icon" align="left" style={{height: 60}} />

# Jester

### _Be Suspicious and Get Voted Out to Win!_

#### **Alignment:** Neutral Evil

The **Jester** wins by getting themselves ejected in a meeting.

If enabled, when the Jester wins, they may leave the game in victory and **haunt** another player, choosing to kill someone from the players who voted for them.

### Abilities

|                                               Button                                                |  Ability  |                                                            Description                                                             |        Type        |
| :-------------------------------------------------------------------------------------------------: | :-------: | :--------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/JesterVentButton.png')} alt="Button" style={{width: 50}} />  | **Vent**  |                          If enabled, the Jester can use vents, but cannot move from one vent to another.                           | Player Interaction |
| <img src={useBaseUrl('/img/NeutButtons/JesterHauntButton.png')} alt="Button" style={{width: 50}} /> | **Haunt** | If enabled, after winning, the Jester can Haunt a player (choosing someone to kill from a menu of those that voted for the Jester). | Player Interaction |

### Options

| Option                            | Description                                                                                                                                                             |  Type   |  Default  |            Range             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :-------: | :--------------------------: |
| Can Use Button                    | Determines whether the Jester can use the Emergency Button.                                                                                                             | Toggle  |   True    |         True / False         |
| Can Hide in Vents                 | Determines whether the Jester can use vents.                                                                                                                            | Toggle  |   True    |         True / False         |
| Has Impostor Vision               | Determines whether the Jester has Impostor Vision.                                                                                                                      | Toggle  |   True    |         True / False         |
| Survivor Scatter Mechanic Enabled | Determines whether the Scatter mechanic is enabled, which forces the Jester to move a certain distance within a set time. If they don't move far enough, they will die. | Toggle  |   False   |         True / False         |
| Survivor Scatter Timer            | Scatter timer duration.                                                                                                                                                 | Seconds |    25s    |           10 - 60s           |
| After Win Type                    | Determines what happens if the Jester wins.                                                                                                                             | String  | Ends Game | Ends Game / Haunts / Nothing |
