---
title: Grenadier
description: Hinder the Crewmates' vision!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Grenadier.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Grenadier

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Hinder the Crewmates' Vision!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Concealing<br />
    </div>

<p>
      The **Grenadier** can throw down a grenade to **flash** nearby players, blinding them by turning their vision entirely grey for a set duration.
</p>

  </div>
</div>

:::danger[Strategy Guide]

Blinded players' names will turn black helping you identify which players may or may not still be able to see you during grenade flashes.

:::

---

## Abilities

|                                            Button                                            |  Ability  |                        Description                        |      Type      |
| :------------------------------------------------------------------------------------------: | :-------: | :-------------------------------------------------------: | :------------: |
| <img src={useBaseUrl('/img/ImpButtons/FlashButton.png')} alt="Button" style={{width: 50}} /> | **Flash** | Throw down a grenade flashing all players in it's radius. | Radius Ability |

## Options

| Option                           |                              Description                              |    Type    |  Default   |    Range     |
| -------------------------------- | :-------------------------------------------------------------------: | :--------: | :--------: | :----------: |
| Flash Uses Per Game              |    The number of Flash uses the Grenadier has throughout the game.    |     ∞      | 1 - 15 / ∞ |
| Flash Grenade Cooldown           |               The cooldown for using the Flash ability.               |  Seconds   |    25s     |   5 - 120s   |
| Flash Grenade Duration           |                   How long the Flash ability lasts.                   |  Seconds   |    10s     |   5 - 15s    |
| Flash Radius                     |               The radius in which players are flashed.                | Multiplier |     1x     |  0.25x - 5x  |
| Allow Flashing Duration Sabotage | Determines whether the Grenadier can Flash during an active sabotage. |   Toggle   |   False    | True / False |
| Grenadier Can Vent               |                 Determines if the Grenadier can vent.                 |   Toggle   |    True    | True / False |
