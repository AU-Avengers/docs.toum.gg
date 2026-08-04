---
title: Sheriff
description: Shoot the Impostors!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Sheriff.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Sheriff

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/SheriffBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Shoot the Impostors!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Killing<br />
    </div>

<p>
 The **Sheriff** can **shoot** a suspicious player to attempt to kill them.
</p>
  </div>
</div>

:::important Strategy Guide

As the Sheriff, you need to be on the lookout for suspicious behaviour. Watch out for players moving strangely or those who have been accused of being suspicious. If you misfire, you run the risk of dying yourself or losing your ability to shoot altogether!

:::

---

### Abilities

|                                                Button                                                |  Ability  |                                                    Description                                                    |        Type        |
| :--------------------------------------------------------------------------------------------------: | :-------: | :---------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/SheriffShootButton.png')} alt="Button" style={{width: 50}} /> | **Shoot** | Shoot a player to kill them, misfiring if they aren't a Impostor or one of the other selected shootable factions. | Player Interaction |

### Options

| Option                          | Description                                                             |  Type   | Default |                    Range                     |
| ------------------------------- | ----------------------------------------------------------------------- | :-----: | :-----: | :------------------------------------------: |
| Kill Cooldown                   | Cooldown for killing a player.                                          | Seconds |   25s   |                  10s - 60s                   |
| Can Self Report                 | Determines if the Sheriff can report players they have killed.          | Toggle  |  False  |                 True / False                 |
| Allow Shooting in First Round   | Determines if the Sheriff can shoot in round one.                       | Toggle  |  False  |                 True / False                 |
| Can Shot Neutral Benign Roles   | Determines if the Sheriff can successfully shoot Neutral Benign roles.  | Toggle  |  False  |                 True / False                 |
| Can Shot Neutral Evil Roles     | Determines if the Sheriff can successfully shoot Neutral Evil roles.    | Toggle  |  True   |                 True / False                 |
| Can Shoot Neutral Killer Roles  | Determines if the Sheriff can successfully shoot Neutral Killing roles. | Toggle  |  True   |                 True / False                 |
| Can Shoot Neutral Outlier Roles | Determines if the Sheriff can successfully shoot Neutral Outlier roles. | Toggle  |  True   |                 True / False                 |
| Misfire Kills                   | Determines who dies from a misfire.                                                | String  | Sheriff | Sheriff / Target / Sheriff & Target / No One |
