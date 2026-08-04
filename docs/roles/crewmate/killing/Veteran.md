---
title: Veteran
description: Alert to kill anyone who interacts with you!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Veteran.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Veteran

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Alert to Kill Anyone Who Interacts With You!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Killing<br />
    </div>

<p>
      The **Veteran** can go on **alert** and will kill anyone who interacts with them, except for Pestilence and shielded players, who will ignore the attack.

</p>

  </div>
</div>

:::important Strategy Guide

Saving your alerts for moments when you are more vulnerable, or during sabotages like Comms or Lights, is generally a good idea to protect yourself from evildoers. Bear in mind that there are many Crewmate interactive roles who may also try to interact with you too!

:::

---

### Abilities

|                                            Button                                             |  Ability  |                                 Description                                 |     Type      |
| :-------------------------------------------------------------------------------------------: | :-------: | :-------------------------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/CrewButtons/AlertButton.png')} alt="Button" style={{width: 50}} /> | **Alert** | While Alerted, you will kill anybody that interacts with you (good or bad). | Basic Ability |

### Options

| Option                              | Description                                                                     |  Type   | Default |    Range     |
| ----------------------------------- | ------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Alert Cooldown                      | Cooldown for using the Alert ability.                                           | Seconds |   25s   |  10s - 60s   |
| Alert Duration                      | How long the Alert will last when active.                                       | Seconds |   25s   |  10s - 60s   |
| Initial Number of Alerts            | How many Alert uses the Veteran starts with.                                    |  Count  |    5    |    1 - 15    |
| Can Be Killed On Alert              | Determines if the Veteran can die on Alert.                                     | Toggle  |  False  | True / False |
| Knows When Attacked In Meeting      | Determines whether the Veteran will know if they are attacked during a meeting. | Toggle  |  True   | True / False |
| Get More Uses From Completing Tasks | Determines if doing tasks earns more Alerts.                                    | Toggle  |  True   | True / False |
