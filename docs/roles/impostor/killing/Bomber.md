import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Bomber.png')} alt="Icon" align="left" style={{height: 60}} />

# Bomber

### _Plant Bombs to Kill Multiple Crewmates at Once!_

#### **Alignment:** Impostor Killing

The **Bomber** can **place** a bomb on the map, which detonates after a set amount of time. Anybody within the bomb radius when it detonates will be killed!

The bomb cooldown is linked to the kill cooldown.

### Abilities

|                                              Button                                               |  Ability  |                                         Description                                          |          Type          |
| :-----------------------------------------------------------------------------------------------: | :-------: | :------------------------------------------------------------------------------------------: | :--------------------: |
| <img src={useBaseUrl('/img/ImpButtons/DetonatingButton.png')} alt="Button" style={{width: 50}} /> | **Place** | Place a bomb, showing the radius in which it'll kill, killing up to a set amount of players. | Delayed Radius Ability |

### Options

| Option            |                      Description                       |    Type    | Default |   Range    |
| ----------------- | :----------------------------------------------------: | :--------: | :-----: | :--------: |
| Max Bombs         |    Maximum times that Bombing is possible per game.    |    Uses    |    3    |   ∞ - 15   |
| Detonate Delay    |               Delay for Bomb Detonation.               |  Seconds   |   5s    |  1s - 15s  |
| Detonate Radius   |              Radius for Bomb Detonation.               | Multiplier |  0.25x  | 0.05x - 1x |
| Max Kills         |     Maximum kills possible from a Bomb detonating.     |   Amount   |    5    |   1 - 15   |
| All Imps See Bomb | Determines if all impostors can see the bomb's radius. |   Toggle   |  True   |    N/A     |
| Can Vent          |           Determines if the Bomber can vent.           |   Toggle   |  True   |    N/A     |
