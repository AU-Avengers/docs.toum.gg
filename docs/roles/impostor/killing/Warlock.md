---
title: Warlock
description: Charge up your power to multi-kill!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Warlock.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Warlock

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Charge Up Your Power to Multi-Kill!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Killing <br />
    </div>

<p>
      The **Warlock** can charge up attacks to wipe out the crew quickly with a multi-kill attack and has three stages: **_Cooldown_**, **_Uncharged_**, and **_Charged_**.
</p>
<p>
        The Warlock cannot kill while on **_Cooldown_**, but they can kill while their power is charging (although this will reset the charge to 0). The higher the charge, the more power the Warlock has to unleash. At 100%, the Warlock can multi-kill for a set duration by repeatedly clicking the Kill button on nearby players.

</p>

  </div>
</div>

:::danger[Tip]

To unleash the fully-charged multi-kill, you have to _**keep pressing Kill**_. Pressing Kill once will waste your charge and get you caught!

:::

---

## Options

| Option                                         |                   Description                   |    Type    | Default |   Range    |
| ---------------------------------------------- | :---------------------------------------------: | :--------: | :-----: | :--------: |
| Times it Takes to Fully Charge                 | The time it takes to fully charge a Burst Kill. |  Seconds   |   25s   | 10s - 60s  |
| Time Multiplier Added Per Kill for Next Charge | The multiplier applied to next charge per kill. | Multiplier |  0.05x  | 0x - 0.5x  |
| Times it Takes to Use a Full Charge            | The time it takes to use the full Burst Charge. |  Seconds   |   1s    | 0.05s - 5s |
