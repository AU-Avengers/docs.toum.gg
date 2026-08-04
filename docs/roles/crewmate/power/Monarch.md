---
title: Monarch
description: Knight fellow Crewmates!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Monarch.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Monarch

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Knight Fellow Crewmates!
    </div>

   <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Power<br />
    </div>

<p>
  The **Monarch** can **knight** other players to give them additional votes.
</p>

  </div>
</div>

:::important Strategy Guide

Choose your knights carefully! Try to **Knight** players you think are definitely Crew, as giving extra votes to evildoers is dangerous.

:::

---

### Abilities

|                                             Button                                             |  Ability   |                   Description                   |        Type        |
| :--------------------------------------------------------------------------------------------: | :--------: | :---------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/KnightButton.png')} alt="Button" style={{width: 50}} /> | **Knight** | Knight a player and grant them additionl votes. | Player Interaction |

### Options

| Option                           | Description                                                                                                                                   |  Type   | Default |    Range     |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Knight Cooldown                  | Cooldown for being able to knight someone.                                                                                                    | Seconds |   20s   |   5 - 30s    |
| Maximum Knights                  | The maximum number of Knighted players.                                                                                                       |  Count  |    2    |  1 - 15 / ∞  |
| Votes Per Knight                 | The number of votes given to knighted players.                                                                                                |  Count  |    1    |    1 - 5     |
| Knight Delay (Cancellable)       | The time before a player is knighted and can be cancelled.                                                                                    | Seconds |   3s    |   1 - 10s    |
| Show Knighted Votes              | Determines whether the additional vote is seen during meetings.                                                                               | Toggle  |  True   | True / False |
| Allow Round One Knighting        | Determines if the Monarch can knight during round one.                                                                                        | Toggle  |  False  | True / False |
| Inform Monarch if a Knight Dies  | Determines if the Monarch will be alerted when a Knight dies.                                                                                 | Toggle  |  True   | True / False |
| Crew Knights Grant Kill Immunity | Determines whether the Monarch is given kill immunity if they have successfully knighted a Crewmate (and the Knighted player is still alive). | Toggle  |  True   | True / False |
