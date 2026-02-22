import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Parasite.png')} alt="Icon" align="left" style={{height: 60}} />

# Parasite

### _Overtake and control players!_

#### **Alignment:** Impostor Killing

The **Parasite** can **overtake** a nearby player and temporarily control their movement before killing them.

If enabled, when overtaken, the victim will look like the Parasite (to themselves) and cannot use their own abilities. The Parasite can control the player with a picture-in-picture camera and can kill the victim at any time, or wait for the control timer to kill them.

**Controls:**

- The Parasite moves with WASD and controls the victim using arrow keys.
- If "Parasite Can Move Independently" is disabled, you cannot move and control them with WASD instead.
- When controlling a player, press Overtake again to kill them before the timer ends.

### Abilities

|                                             Button                                              |   Ability    |                                         Description                                          |        Type        |
| :---------------------------------------------------------------------------------------------: | :----------: | :------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/OvertakeButton.png')} alt="Button" style={{width: 50}} /> | **Overtake** | Overtake a victim to control their movement.Press the same button again to kill them, or wait for the timer. | Player Interaction |

### Options

| Option                          |                                               Description                                                |  Type   | Default |     Range     |
| ------------------------------- | :------------------------------------------------------------------------------------------------------: | :-----: | :-----: | :-----------: |
| Overtake Cooldown               |                                 Cooldown for using the Overtake ability.                                 | Seconds |  37.5s  |   5 - 120s    |
| Kill Cooldown                   |                   Cooldown for using the Kill ability when controlling another player.                   | Seconds |   3s    |    0 - 5s     |
| Control Duration                |                            How long the Parasite can control another player.                             | Seconds |   30s   | 2.5 - 60s / ∞ |
| Save Victim if Parasite Dies    |  Determines whether an overtaken player will survive if the Parasite dies during the control duration.   | Toggle  |  True   | True / False  |
| Save Victim if Meeting Called   | Determines whether an overtaken player will be saved if a meeting is called during the control duration. | Toggle  |  True   | True / False  |
| Parasite Can Vent               |                              Determines whether the Parasite can use vents.                              | Toggle  |  True   | True / False  |
| Parasite Can Move Independently |                   Determines whether the Parasite can move while controlling a victim.                   | Toggle  |  True   | True / False  |
| Overtaken Looks Like Parasite   |           Determines whether the victim will see themselves as the Parasite while controlled.            | Toggle  |  True   | True / False  |
