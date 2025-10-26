import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Cleric.png')} alt="Icon" align="left" style={{height: 60}} />

# Cleric

### _Save the Crewmates!_

#### **Alignment:** Crewmate Protective

The **Cleric** can protect other players by **Cleansing** their negative effects, as well as placing **Barriers** on them to prevent interactions.

### Abilities

|                                             Button                                              |   Ability   |                                                Description                                                |        Type        |
| :---------------------------------------------------------------------------------------------: | :---------: | :-------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/BarrierButton.png')} alt="Button" style={{width: 50}} /> | **Barrier** |                              Prevent a Crewmate from being interacted with.                               | Player Interaction |
| <img src={useBaseUrl('/img/CrewButtons/CleanseButton.png')} alt="Button" style={{width: 50}} /> | **Cleanse** | Remove all negative effects on a player, e.g. Douse, Hack, Infect, Blackmail, Blind, Flash, and Hypnosis. | Player Interaction |

### Options

| Option                          |                           Description                           |  Type   | Default |                    Range                     |
| ------------------------------- | :-------------------------------------------------------------: | :-----: | :-----: | :------------------------------------------: |
| Barrier Cooldown                |               Cooldown for using Barrier ability.               | Seconds |   25s   |                   10 - 60s                   |
| Barrier Duration                |   How long the Barrier effect will last on the chosen player.   | Seconds  |  0.25s  |                   10 - 60s                   |
| Cleanse Cooldown                |               Cooldown for using Cleanse ability.               | Seconds |   25s   |                   10 - 60s                   |
| Show Barriered Player           |             Determines who sees the Barrier shield.             | String  | Cleric  | Sheriff / Target / Sheriff & Target / No One |
| Cleric Gets Attack Notification | Determines whether the Cleric is notified of attempted attacks. | Toggle  |  True   |                 True / False                 |
