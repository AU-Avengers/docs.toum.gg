---
title: Warden
description: Fortify Crewmates!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Warden.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Warden

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Fortify Crewmates!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Protective<br />
    </div>

<p>
      The **Warden** can **Fortify** players to prevent them from being interacted with.
</p>
<p>
   If anyone tries to interact with a Fortified player, the ability will not work and both the Warden and Fortified player will be alerted with a purple flash.
</p>

  </div>
</div>

:::important[Strategy Guide]

Fortify players who are likely to attract abilities—it will also protect them from being guessed during meetings!

:::

---

### Abilities

|                                             Button                                              |   Ability   |                         Description                          |        Type        |
| :---------------------------------------------------------------------------------------------: | :---------: | :----------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/FortifyButton.png')} alt="Button" style={{width: 50}} /> | **Fortify** | Fortify a player to prevent them from being interacted with. | Player Interaction |

### Options

| Option                | Description                                |  Type  |      Default       |                       Range                        |
| --------------------- | ------------------------------------------ | :----: | :----------------: | :------------------------------------------------: |
| Show Fortified Player | Determines who can see the Fortify shield. | String | Fortified + Warden | Fortified / Warden / Fortified + Warden / Everyone |
