---
title: Trapper
description: Identify which roles are in play!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Trapper.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Trapper

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/TrapperBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Identify which roles are in play!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Investigative<br />
    </div>

<p>
The <b>Trapper</b> can place traps around the map to learn the roles of other players. Players must stand in, or walk through, the trap for a set time to 'trap' their roles. The Trapper will see a list of the roles in the next meeting, in a randomised order.
</p>

  </div>
</div>

:::important[Strategy Guide]

Place your traps in high-traffic areas, such as the meeting area, Dropship, Decontamination, Medbay, Security, Admin, and any area where players most often stay still. This will yield you the most information overall, but won't necessarily narrow down players.

:::

---

### Abilities

| Button                                                                                       | Ability  |                                             Description                                             |    Type    |
| -------------------------------------------------------------------------------------------- | :------: | :-------------------------------------------------------------------------------------------------: | :--------: |
| <img src={useBaseUrl('/img/CrewButtons/TrapButton.png')} alt="Button" style={{width: 50}} /> | **Trap** | Places down a trap that detects and stores the roles of people within its range after a few seconds | Targetless |

### Options

| Option                                           |                                                Description                                                |    Type    | Default |    Range     |
| ------------------------------------------------ | :-------------------------------------------------------------------------------------------------------: | :--------: | :-----: | :----------: |
| Trap Cooldown                                    |                                        Cooldown for placing traps.                                        |  Seconds   |   20s   |   1s - 30s   |
| Min Amount Of Time In Trap To Register           |              How long should a player be within the trap's range to gather their role information.               |  Seconds   |   5s    |   0s - 15s   |
| Initial Number Of Traps                          |                            The initial number of traps the Trapper can place.                             |   Count    |    5    |    1 - 15    |
| Trap Size                                        |                                          The range of the traps.                                          | Multiplier |  0.25x  |  0.05x - 1x  |
| Traps Removed After Each Round                   |                     Toggles whether trap positions reset at the end of every meeting.                     |   Toggle   |  True   | True / False |
| ┗ Get More Uses From Completing Tasks            |                Toggles whether the maximum number of traps increases upon task completion.                |   Toggle   |  False  | True / False |
| Minimum Number Of Roles Required To Trigger Trap | The minimum number of roles that must go through the trap before the information can be given to the Trapper. |   Count    |    3    |    1 - 15    |
