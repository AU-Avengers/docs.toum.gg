---
title: Puppeteer
description: Control Crewmates to do your bidding!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Puppeteer.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Puppeteer

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Control Crewmates to do Your Bidding!
    </div>

   <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Power<br />
    </div>

<p>
      The **Puppeteer** can take control of another player and force them to kill someone else. 
</p>
<p>
When using the **_Control_** ability, the Puppeteer will see a menu to choose their victim from and can then control them for a set time. During the Control duration, the Puppeteer will stand still.
</p>

  </div>
</div>

:::danger[TIP]

While controlling a player, position yourself at a task to avoid looking suspicious!

:::

---

## Abilities

|                                             Button                                             |   Ability   |                 Description                 |        Type        |
| :--------------------------------------------------------------------------------------------: | :---------: | :-----------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/ControlButton.png')} alt="Button" style={{width: 50}} /> | **Control** | Opens a menu to choose a player to control. | Player Interaction |

## Options

| Option                                        |                               Description                               |  Type   | Default |     Range     |
| --------------------------------------------- | :---------------------------------------------------------------------: | :-----: | :-----: | :-----------: |
| Initial Control Uses                          |        How many times the Control ability can be used initially.        |  Count  |    3    |  0 - 30 / ∞   |
| ┗ Kills Required for Additional Control Use   |          The number of kills required to earn additional uses.          |  Count  |    2    | 1 - 15 / Off  |
| Puppeteer Location Hint Duration (For Victim) | The time that the victim will have a hint for the Puppeteer's location. | Seconds |   3s    | 1 - 30s / Off |
| Control Cooldown                              |                 Cooldown for using the Control ability.                 | Seconds |   25s   |   10 - 120s   |
| Control Duration                              |           How long the Puppeteer can control another player.            | Seconds |   10s   |   5 - 120s    |
| Puppeteer Can Vent                            |               Determines if the Puppeteer can use vents.                | Toggle  |  True   | True / False  |
