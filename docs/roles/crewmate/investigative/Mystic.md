---
title: Mystic
description: Know where and when kills happen!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Mystic.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Mystic

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/MysticBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Know where and when kills happen!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Investigative<br />
    </div>

<p>
 The **Mystic** is alerted whenever someone dies, seeing a blue flash and a brief arrow pointing in the direction of the death. If the setting is enabled, they may also get a pop-up of exactly who died.
</p>

  </div>
</div>

:::important[Strategy Guide]

As the Mystic, every death is a clue. Pay attention to the direction and timing of death alerts, then compare them with player claims and locations to narrow down who could have committed the kill.

:::

---

### Options

| Option            |                              Description                              |  Type   | Default |    Range     |
| ----------------- | :-------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Arrow Duration    |               How long a dead body arrow is shown for.                | Seconds |  0.05s  |   0s - 1s    |
| Show Death Pop-Up | Determines if the Mystic will see a pop-up for which player has died. | Toggle  |  True   | True / False |
