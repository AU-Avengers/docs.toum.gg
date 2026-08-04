---
title: Time Lord
description: Rewind time!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/TimeLord.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Time Lord

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Rewind Time!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Power
    </div>

<p>
  The **Time Lord** can rewind time for a set duration, forcing players to retrace their steps and potentially reviving dead players!
</p>

  </div>
</div>

:::important[Strategy Guide]

Once killers know a Time Lord is in play, they may be reluctant to kill on cooldown, so rewinding at the right moment is crucial. Sabotages are often a distraction — rewinding time around when they're called may revive dead players!

:::

---

### Abilities

|                                             Button                                             |  Ability   |           Description            | Type          |
| :--------------------------------------------------------------------------------------------: | :--------: | :------------------------------: | ------------- |
| <img src={useBaseUrl('/img/CrewButtons/RewindButton.png')} alt="Button" style={{width: 50}} /> | **Rewind** | Rewinds time for a set duration. | Basic Ability |

### Options

| Option                                     | Description                                                                                    |  Type   | Default |    Range     |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Rewind Cooldown                            | Cooldown for being able to rewind time.                                                        | Seconds |   30s   |   5 - 120s   |
| Rewind History                             | The duration of time that will be rewound.                                                     | Seconds |  7.5s   |    1 - 15    |
| Initial Uses                               | The number of Rewinds the Time Lord starts with.                                               |  Count  |    3    |  1 - 15 / ∞  |
| ┗ Tasks Required for Additional Rewind Use | How many tasks the Time Lord must complete to earn additional Rewinds.                         |  Count  |    3    | 1 - 15 / Off |
| Can Use Vitals                             | Determines whether the Time Lord can use vitals.                                               | Toggle  |  False  | True / False |
| Revive on Rewind                           | Determines whether dead players will be revived if they were killed within the rewind history. | Toggle  |  True   | True / False |
| Undo Tasks On Rewind                       | Determines whether tasks will be undone during a rewind.                                       | Toggle  |  True   | True / False |
| Unclean Bodies On Rewind                   | Determines if any bodies that were cleaned will be brought back during a rewind.               | Toggle  |  True   | True / False |
| Notify Time Lord on Revive                 | Determines if the Time Lord will be alerted that they have revived someone during a rewind.    | Toggle  |  False  | True / False |
