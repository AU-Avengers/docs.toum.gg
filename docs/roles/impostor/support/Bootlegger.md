---
title: Bootlegger
description: Roleblock Crewmates to poison them!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Crewmate.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Bootlegger

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Roleblock Crewmates to poison them!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Support<br />
    </div>

<p>
      The **Bootlegger** can drink with others to roleblock them, temporarily disabling their abilities. Once a player is role-blocked three times, they will die of poisoning!
</p>

  </div>
</div>

---

### Abilities

|                                           Button                                            |    Ability    |                                                   Description                                                   |        Type        |
| :-----------------------------------------------------------------------------------------: | :-----------: | :-------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/FixButton.png')} alt="Button" style={{width: 50}} /> | **Roleblock** | Drink with a player, roleblocking them for 15s. After the roleblock is finished, they will be hungover for 30s. | Player Interaction |

### Options

| Option                  |                           Description                           |  Type   |  Default  |                  Range                  |
| ----------------------- | :-------------------------------------------------------------: | :-----: | :-------: | :-------------------------------------: |
| Roleblock Cooldown      |          The cooldown for using the Roleblock ability.          | Seconds |   22.5s   |                15 - 120s                |
| Minimum Roleblock Delay | The minimum time before the Roleblock ability will take effect. | Seconds |    3s     |                 1 - 10s                 |
| Maximum Roleplay Delay  | The maximum time before the Roleblock ability will take effect. | Seconds |    5s     |                 1 - 10s                 |
| Poison Triggers On      |               When the poison effect takes place.               | String  | Delay End | Delay End / Meeting Start / Meeting End |
| ┗ Poison Delay          |            How long the poison effect is delayed by.            | Seconds |    15s    |                 5 - 30s                 |
