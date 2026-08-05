---
title: Eclipsal
description: Black Out the Light!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Eclipsal.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Eclipsal

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Black Out the Light!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Concealing<br />
    </div>

<p>
The **Eclipsal** can **_blind_** nearby players, reducing their vision to only be able to see the map, and prevents reporting.
</p>
<p>
After a set duration, blinded players' vision will return to normal.
</p>

</div>
</div>

---

## Abilities

|                                            Button                                            |  Ability  |        Description        |      Type      |
| :------------------------------------------------------------------------------------------: | :-------: | :-----------------------: | :------------: |
| <img src={useBaseUrl('/img/ImpButtons/BlindButton.png')} alt="Button" style={{width: 50}} /> | **Blind** | Blind all nearby players. | Radius Ability |

## Options

| Option         |             Description              |    Type    | Default |   Range    |
| -------------- | :----------------------------------: | :--------: | :-----: | :--------: |
| Blind Cooldown |    Cooldown for blinding players.    |  Seconds   |   25s   | 10s - 60s  |
| Blind Duration |    Duration for blinding players.    |  Seconds   |   15s   | 10s - 60s  |
| Blind Radius   | Radius in which players are blinded. | Multiplier |   1x    | 0.25x - 5x |
