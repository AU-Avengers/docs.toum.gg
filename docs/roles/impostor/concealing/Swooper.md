---
title: Swooper
description: Turn invisible temporarily!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Swooper.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Swooper

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Turn Invisible Temporarily!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Conealing<br />
    </div>

<p>
      The **Swooper** can temporarily turn invisible to avoid being seen.
</p>
  </div>
</div>

---

## Abilities

|                                             Button                                             |   Ability   |                                     Description                                      |     Type      |
| :--------------------------------------------------------------------------------------------: | :---------: | :----------------------------------------------------------------------------------: | :-----------: |
|  <img src={useBaseUrl('/img/ImpButtons/SwoopButton.png')} alt="Button" style={{width: 50}} />  |  **Swoop**  |                   Turn invisible to all players except Impostors.                    | Basic Ability |
| <img src={useBaseUrl('/img/ImpButtons/UnswoopButton.png')} alt="Button" style={{width: 50}} /> | **Unswoop** | Cancel your swoop early, or let it finish fully to make yourself visible once again. | Basic Ability |

## Options

| Option                         |                          Description                          |  Type   | Default |             Range             |
| ------------------------------ | :-----------------------------------------------------------: | :-----: | :-----: | :---------------------------: |
| Swoop Uses Per Round           |   The number of times that Swooping is possible per round.    |  Uses   |    ∞    |          1 - 10 / ∞           |
| Swoop Cooldown                 |                  The cooldown for Swooping.                   | Seconds |   25s   |           5s - 120s           |
| Swoop Duration                 |                  The duration for Swooping.                   | Seconds |   10s   |           5s - 15s            |
| Can Be Tracked While Invisible | Determines whether the Swooper can be tracked while Swooping. | String  | Always  | Always / Never / Not By Radar |
| Swooper Can Vent               |              Determines if the Swooper can vent.              | Toggle  |  True   |         True / False          |
