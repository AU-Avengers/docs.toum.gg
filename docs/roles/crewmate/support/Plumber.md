---
title: Plumber
description: Kick out the pesky venters onboard!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Plumber.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Plumber

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Kick Out the Pesky Venters Onboard!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Support<br />
    </div>

<p>
      The **Plumber** can **Barricade** vents to block them, and **Flush** the vent system, forcing any venters out. The Plumber will get an arrow pointing to any flushed player for one second.
</p>

  </div>
</div>

:::important[Strategy Guide]

Focus on vents that are commonly used for escapes or cross-map movement. A well-timed **_flush_** can reveal hidden players, while **_barricades_** can force killers out into more open paths. Just remember, there may also be a friendly Engineer hidden in those vents, too!
:::

---

### Abilities

|                                              Button                                               |    Ability    |                          Description                          |     Type      |
| :-----------------------------------------------------------------------------------------------: | :-----------: | :-----------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/CrewButtons/BarricadeButton.png')} alt="Button" style={{width: 50}} /> | **Barricade** | Block a vent by placing a Barricade which appears next round. | Basic Ability |
|   <img src={useBaseUrl('/img/CrewButtons/FlushButton.png')} alt="Button" style={{width: 50}} />   |   **Flush**   |   Flush the vent system and force out anybody using a vent.   | Basic Ability |

### Options

| Option                                    | Description                                         |  Type   | Default |   Range    |
| ----------------------------------------- | --------------------------------------------------- | :-----: | :-----: | :--------: |
| Flush Cooldown                            | Cooldown for using the Flush ability.               | Seconds |   25s   |  10 - 60s  |
| Block Cooldown                            | Cooldown for using Barricade ability.               | Seconds |   25s   |  10 - 60s  |
| Max Number of Barricades                  | Determines how many Barricades the Plumber can set. |  Count  |    3    |   1 - 15   |
| Amount of Rounds Barricades Last          | Determines how many rounds a Barricade will remain. |  Count  |    2    | 1 - 15 / ∞ |
| Get More Barricades From Completing Tasks | Determines if doing tasks earns more Barricades.    | Toggle  |  True   | True False |
