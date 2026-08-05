---
title: Bomber
description: Plant bombs to kill multiple Crewmates at once!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Bomber.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Bomber

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Plant Bombs to Kill Multiple Crewmates at Once!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Killing<br />
    </div>

<p>
      The **Bomber** can **place** a bomb on the map, which detonates after a set amount of time. Anybody within the bomb radius when it detonates will be killed!
</p>

  </div>
</div>

:::danger TIP

Bombs are most effective in high-traffic areas and on sabotages where people are forced to gather. The **_Bomb_** cooldown is linked to the **_Kill_** cooldown, so be strategic about choosing which ability to use when!

:::

---

## Abilities

|                                              Button                                               |  Ability  |                                         Description                                          |          Type          |
| :-----------------------------------------------------------------------------------------------: | :-------: | :------------------------------------------------------------------------------------------: | :--------------------: |
| <img src={useBaseUrl('/img/ImpButtons/DetonatingButton.png')} alt="Button" style={{width: 50}} /> | **Place** | Place a bomb, showing the radius in which it'll kill, killing up to a set amount of players. | Delayed Radius Ability |

## Options

| Option                          |                        Description                         |    Type    | Default |    Range     |
| ------------------------------- | :--------------------------------------------------------: | :--------: | :-----: | :----------: |
| Bombs Uses Per Game             |   The number of times that Bombing is possible per game.   |    Uses    |    3    |    ∞ - 15    |
| Detonate Delay                  |                 Delay for Bomb Detonation.                 |  Seconds   |   5s    |   1s - 15s   |
| Detonate Radius                 |                Radius for Bomb Detonation.                 | Multiplier |  0.25x  |  0.05x - 1x  |
| Max Kills in Detonation         |     The maximum kills possible from a Bomb detonating.     |   Amount   |    5    |    1 - 15    |
| All Imps See Bomb               |   Determines if all impostors can see the bomb's radius.   |   Toggle   |  True   | True / False |
| Allowing Bombing in First Round | Determines whether Bombs can be placed in the first round. |   Toggle   |  True   | True / False |
| Bomber Can Vent                 |             Determines if the Bomber can vent.             |   Toggle   |  True   | True / False |
