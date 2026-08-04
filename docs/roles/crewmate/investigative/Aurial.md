---
title: Aurial
description: Sense disturbances in your aura!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Aurial.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Aurial

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/AurialBanner.png"/>

  <div className="role-info">
    <div className="role-tagline">
      Sense Disturbances in Your Aura!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Investigative
    </div>

<p>
     The <b>Aurial</b> can sense when someone nearby uses an ability of any kind, and will see an arrow pointing towards the location where the ability was used.
</p>
<p>
     If the ability is used within the Aurial's aura (range), the arrow will match the colour of the player, revealing their identity. If the ability is used further away, the Aurial will see a white arrow.

 </p>

  </div>
</div>

:::important Strategy Guide

As the Aurial, you benefit most from being near groups of players to identify when abilities are being used frequently. Since this also applies to kills, it can also help distinguish between different types of murders. Repeatedly sensing abilities from the same players can help identify powerful roles, or catch killers using abilities at suspicious times!

:::

---

### Options

| Option               |                  Description                  |    Type    | Default |  Range   |
| -------------------- | :-------------------------------------------: | :--------: | :-----: | :------: |
| Radiate Colour Range |      Range where arrows will be colored.      | Multiplier |  0.5x   | 0x - 1x  |
| Radiate Max Range    |         Range where arrows will show.         | Multiplier |  1.5x   | 1x - 5x  |
| Sense Duration       | How long the sense arrow stays on screen for. |  Seconds   |   10s   | 1s - 15s |
