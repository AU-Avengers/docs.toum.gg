---
title: Barkeeper
description: Roleblock Evildoers to slow them down!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Barkeeper.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Barkeeper

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Roleblock Evildoers to slow them down!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Support<br />
    </div>

<p>
      The **Barkeeper** can drink with others to roleblock them. They may also spill a drink on another play to speed them up or slow them down.
</p>

  </div>
</div>

---

### Abilities

|                                              Button                                              |    Ability    |                                                                           Description                                                                            |        Type        |
| :----------------------------------------------------------------------------------------------: | :-----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|   <img src={useBaseUrl('/img/CrewButtons/BeerRoleblockButton.png')} alt="Button" style={{width: 50}} />    | **Roleblock** |                         Drink with a player, roleblocking them for 15s. After the roleblock is finished, they will be hungover for 30s.                          | Player Interaction |
| <img src={useBaseUrl('/img/CrewButtons/BeerSpillButton.png')} alt="Button" style={{width: 50}} /> |   **Spill**   | Spill one of your drinks, making anyone speed up if it's been recently spilled, or make them slow down if it's old. This will only trigger once for each player. |   Basic Ability    |

### Options

| Option                                     |                                          Description                                          |    Type    | Default |   Range    |
| ------------------------------------------ | :-------------------------------------------------------------------------------------------: | :--------: | :-----: | :--------: |
| Roleblock Cooldown                         |                         The cooldown for using the Roleblock ability.                         |  Seconds   |  22.5s  | 15 - 120s  |
| Minimum Roleblock Delay                    |                The minimum time before the Roleblock ability will take effect.                |  Seconds   |   3s    |  1 - 10s   |
| Maximum Roleplay Delay                     |                The maximum time before the Roleblock ability will take effect.                |  Seconds   |   5s    |  1 - 10s   |
| Spill Settle Delay                         |                        The time before the Spill ability takes effect.                        |  Seconds   |   5s    |  2.5 -15s  |
| Time Before Spill Slows Players Down       |             How long before the Spill ability will slow players' movement speed.              |  Seconds   |   20s   |  10 - 60s  |
| Additional Time For Spill To Be Removed    | How long it takes for the spilled drink to be cleaned from the map after it has taken effect. |  Seconds   |   30s   |  10 - 60s  |
| Amount Of Time Player Is Affected By Spill |               How long the Spill ability will affect a player's movement speed.               |  Seconds   |   20s   | 7.5 - 45s  |
| Spill Speed Buff Multiplier                |                  How much the affected players' movement speed is increased.                  | Multiplier |  1.2x   | 1.1 - 2.0x |
| Spill Speed Debuff Multiplier              |                  How much the affected players' movement speed is decreased.                  | Multiplier |  0.8x   |  0.3 - 1x  |
