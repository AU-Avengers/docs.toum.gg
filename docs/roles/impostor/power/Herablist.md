import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Herbalist.png')} alt="Icon" align="left" style={{height: 60}} />

# Herbalist

### _Let your plants and herbs guide the way_

#### **Alignment:** Impostor Power

The **Herbalist** can use three different abilities to help the Impostors or affect what other players see. The abilities—Expose, Confuse, and Protect—are linked to one cooldown, separate from the Kill Cooldown, allowing the Herbalist to choose which ability they wish to use on another player.

### Abilities

|                                               Button                                               |   Ability   |                                          Description                                           |        Type        |
| :------------------------------------------------------------------------------------------------: | :---------: | :--------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/HerbExposeButton.png')} alt="Button" style={{width: 50}} />  | **Expose**  | Expose a player to all Impostors, revealing their role but preventing them from being guessed. | Player Interaction |
| <img src={useBaseUrl('/img/ImpButtons/HerbConfuseButton.png')} alt="Button" style={{width: 50}} /> | **Confuse** |         Confuse a player with fungal spores to prevent them from identifying players.          | Player Interaction |
| <img src={useBaseUrl('/img/ImpButtons/HerbProtectButton.png')} alt="Button" style={{width: 50}} /> | **Protect** |        Protect a player temporarily as if you were a Cleric, including other impostors.        | Player Interaction |

### Options

| Option                                        |                               Description                               |  Type   | Default |     Range     |
| --------------------------------------------- | :---------------------------------------------------------------------: | :-----: | :-----: | :-----------: |
| Herb Cooldown                          |        Cooldown duration for using the Change Herb ability.        |  Seconds  |    30s    |  10 - 90s   |
| Max Exposes Uses                          |        The maximum number of times the Expose ability can be used.        |  Count  |    3    |  1 - 15 / ∞  |
| Max Confuse Uses                          |        The maximum number of times the Confuse ability can be used.        |  Count  |    5    |  1 - 15 / ∞  |
| Max Exposes Uses                          |        The maximum number of times the Expose ability can be used.        |  Count  |    7    |  1 - 15 / ∞  |
| Confuse Delay | The duration before the Confuse ability will affect the targeted player. | Seconds | 3s | 0.5 - 5s | 
| Confuse Duration | How long the Confuse ability will last on a targeted played. | Seconds | 15s | 5 - 30s | 
| Protect Duration | How long the Protect ability will protect a targeted player for. | Seconds | 15s | 5 - 30s | 
| Protected Player Sees Barrier | Whether or not the targeted player will see the Protect barrier/shield. | Toggle | False | True / False |
| Notify Herablist Upon Attack | Whether the Herbalist will be alerted if a Protected player is attacked. | Toggle | True | True / False |
