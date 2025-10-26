import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Werewolf.png')} alt="Icon" align="left" style={{height: 60}} />

# Werewolf

### _Rampage to Kill Everyone!_

#### **Alignment:** Neutral Killing

The **Werewolf** wins by being the last killer alive. They can go on a **rampage** to increase their vision and gain the ability to kill multiple times within a set duration.

### Abilities

|                                              Button                                              |   Ability   |                                                   Description                                                    |           Type            |
| :----------------------------------------------------------------------------------------------: | :---------: | :--------------------------------------------------------------------------------------------------------------: | :-----------------------: |
| <img src={useBaseUrl('/img/NeutButtons/RampageButton.png')} alt="Button" style={{width: 50}} />  | **Rampage** | Go on a Rampage, gaining Impostor vision and the ability to kill multiple times with your reduced kill cooldown. |       Basic Ability       |
| <img src={useBaseUrl('/img/NeutButtons/WolfKillButton.png')} alt="Button" style={{width: 50}} /> | **┣ Kill**  |                                       Kill another player while Rampaging.                                       |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/WolfVentButton.png')} alt="Button" style={{width: 50}} /> | **┗ Vent**  |                                If enabled, the Werewolf can vent while Rampaging.                                | Basic Ability, if enabled |

### Options

| Option                          | Description                                               |  Type   | Default |    Range     |
| ------------------------------- | --------------------------------------------------------- | :-----: | :-----: | :----------: |
| Rampage Cooldown                | Cooldown for using the Rampage ability.                   | Seconds |   25s   |   10 - 60s   |
| Rampage Duration                | How long the active Rampage will last.                    | Seconds |   10s   |   10 - 60s   |
| Rampage Kill Cooldown           | Cooldown killing while Rampaging.                         | Seconds |  1.5s   |  0.5 - 15s   |
| Werewolf Can Vent When Rampaged | Determines whether the Werewolf can vent while Rampaging. | Toggle  |  True   | True / False |
