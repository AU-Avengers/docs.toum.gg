---
title: Parasite
description: Overtake and control players!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Parasite.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Parasite

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Overtake and Control Players!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Killing <br />
    </div>

<p>
The **Parasite** can **overtake** a nearby player and temporarily control their movement before killing them.

</p>
<p>
If enabled, when overtaken, the victim will look like the Parasite (to themselves) and cannot use their own abilities. The Parasite can control the player with a picture-in-picture camera and can kill the victim at any time, or wait for the control timer to kill them.

</p>

  </div>
</div>

:::danger[Strategy Guide]

If the settings mean you cannot when overtaking a player, position yourself on a task to avoid looking suspicious.

:::

---

## Controls

- The Parasite moves with WASD keys and controls the victim using arrow keys.
- If "Parasite Can Move Independently" is disabled, the Parasite cannot move and controls the victim with WASD instead.
- When controlling a player, press **Overtake** again to kill them before the timer ends.

## Abilities

|                                             Button                                              |   Ability    |                                         Description                                          |        Type        |
| :---------------------------------------------------------------------------------------------: | :----------: | :------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/OvertakeButton.png')} alt="Button" style={{width: 50}} /> | **Overtake** | Place a bomb, showing the radius in which it'll kill, killing up to a set amount of players. | Player Interaction |

## Options

| Option                          |                                               Description                                                |  Type   | Default |     Range     |
| ------------------------------- | :------------------------------------------------------------------------------------------------------: | :-----: | :-----: | :-----------: |
| Overtake Cooldown               |                                 Cooldown for using the Overtake ability.                                 | Seconds |  37.5s  |   5 - 120s    |
| Kill Cooldown                   |                   Cooldown for using the Kill ability when controlling another player.                   | Seconds |   3s    |    0 - 5s     |
| Control Duration                |                            How long the Parasite can control another player.                             | Seconds |   30s   | 2.5 - 60s / ∞ |
| Save Victim if Parasite Dies    |  Determines whether an overtaken player will survive if the Parasite dies during the control duration.   | Toggle  |  True   | True / False  |
| Save Victim if Meeting Called   | Determines whether an overtaken player will be saved if a meeting is called during the control duration. | Toggle  |  False  | True / False  |
| Parasite Can Vent               |                              Determines whether the Parasite can use vents.                              | Toggle  |  True   | True / False  |
| Parasite Can Move Independently |                   Determines whether the Parasite can move while controlling a victim.                   | Toggle  |  True   | True / False  |
| Overtaken Looks Like Parasite   |           Determines whether the victim will see themselves as the Parasite while controlled.            | Toggle  |  False  | True / False  |
