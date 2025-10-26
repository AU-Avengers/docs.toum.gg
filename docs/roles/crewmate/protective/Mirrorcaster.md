import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Mirrorcaster.png')} alt="Icon" align="left" style={{height: 60}} />

# Mirrorcaster

### _Reflect Attacks onto Others!_

#### **Alignment:** Crewmate Protective

The **Mirrorcaster** can cast a **Magic Mirror** on a player to protect them. If the player is attacked directly, the Mirrorcaster will be notified, and they can attempt to **unleash** the absorbed attack onto another player.

<sub>**Note:** Arsonist, Veteran, Pestilence, Bomber, and some other roles ignore the Magic Mirror.</sub>

### Abilities

|                                               Button                                                |     Ability      |                                   Description                                    |        Type        |
| :-------------------------------------------------------------------------------------------------: | :--------------: | :------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/MagicMirrorButton.png')} alt="Button" style={{width: 50}} /> | **Magic Mirror** |                        Place a Magic Miorror on a player.                        | Player Interaction |
|   <img src={useBaseUrl('/img/CrewButtons/UnleashButton.png')} alt="Button" style={{width: 50}} />   |   **Unleash**    | If the Mirror is shattered by an attack, unleash the attack onto another player! | Player Interaction |

### Options

| Option                                  |                                     Description                                      |  Type   |        Default        |                  Range                  |
| --------------------------------------- | :----------------------------------------------------------------------------------: | :-----: | :-------------------: | :-------------------------------------: |
| Who Gets Murder Attempt Indicator       |                       Determines who can see the attack alert.                       | String  | Mirrorcaster + Killer |  Mirrorcaster / Mirrorcaster + Killer   |
| Magic Mirror Cooldown                   |                 Cooldown for placing the Magic Mirror onto a player.                 | Seconds |          0s           |                 0 - 60s                 |
| Magic Mirror Duration                   |              How long the Magic Mirror will protect the chosen player.               | Seconds |          30s          |                10 - 60s                 |
| Unleash Cooldown                        |                        Cooldown for using the Unleash attack.                        | Seconds |          15s          |                 0 - 60s                 |
| Attack Information Received Upon Attack | Determines the information the Mirrorcaster will receive when the Mirror is smashed. | String  |     Subalignment      | Role / Faction / Subalignment / Nothing |
| Accumulate Multiple Unleashes           |       Determines whether the Mirrorcaster can stack multiple Unleash attacks.        | Toggle  |         False         |              True / False               |
| Max Number of Magic Mirrors             |                     How many Magic Mirrors the Mirrorcaster has.                     |  Count  |           5           |                 1 - 15                  |
