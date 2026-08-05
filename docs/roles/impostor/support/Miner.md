---
title: Miner
description: From the Top, Make it Drop, That's a Vent!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Miner.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Miner

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/MinerBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      From the Top, Make it Drop, That's a Vent!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Support<br />
    </div>

<p>
      The **Miner** can place additional vents around the map, which will connect together as one system. 
</p>
  </div>
</div>

:::danger[Strategy Guide]

Place your mines to create escape routes across the map to get away from crime scenes.

<sub>**Note:** Miner vents do not connect to base-game maps.</sub>

:::

---

## Abilities

|                                           Button                                            | Ability  |                                                       Description                                                        |     Type      |
| :-----------------------------------------------------------------------------------------: | :------: | :----------------------------------------------------------------------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/ImpButtons/MineButton.png')} alt="Button" style={{width: 50}} /> | **Mine** | Place a vent where you are standing. These vents won't connect to already existing vents on the map, but with each other. | Basic Ability |

## Options

| Option                         |                                Description                                 |  Type   |   Default   |          Range          |
| ------------------------------ | :------------------------------------------------------------------------: | :-----: | :---------: | :---------------------: |
| Number of Miner Vents Per Game |            Maximum times a Mine (vent) can be placed per game.             |  Uses   |      ∞      |         ∞ - 15          |
| Mine Cooldown                  |                        Cooldown for creating vents.                        | Seconds |     25s     |        10s - 60s        |
| Mine Visibility                |              Changes when Miner vents are visible to others.               | String  | Immediately | Immediately / After Use |
| ┗ Mine Delay                   |                         Delay for creating vents.                          | Seconds |     3s      |        0s - 10s         |
| Miner Can Kill With Teammate   | Determines if the Miner can kill with a teammate, or if they must be solo. | Toggle  |    True     |      True / False       |
