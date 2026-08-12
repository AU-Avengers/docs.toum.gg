---
title: Spectre
description: Complete your tasks without getting caught!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Spectre.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Spectre

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/SpectreBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Complete your tasks without getting caught!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Evil<br />
      <b>&#8226; Alias:</b> Phantom (TOU:R)<br />
    </div>

<p>
      When a Neutral role dies, they have a chance to respawn as the **Spectre**, who must complete their tasks without being clicked on to win. 
</p>
<p>
      If successful, and the setting is enabled, the Spectre can **_Spook_** a chosen player to kill them.
</p>

  </div>
</div>

:::note[Strategy Guide]

To avoid trouble heading your way, you should prioritize long tasks first, and then finish as many as you can that are close to one another to lessen the risk of being clicked.

:::

---

## Abilities

|                                                Button                                                |  Ability  |                               Description                               |        Type        |
| :--------------------------------------------------------------------------------------------------: | :-------: | :---------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/PhantomSpookButton.png')} alt="Button" style={{width: 50}} /> | **Spook** | If enabled, after winning, the Phantom can Spook a player to kill them. | Player Interaction |

## Options

| Option                      | Description                                                         |  Type  | Default |             Range             |
| --------------------------- | ------------------------------------------------------------------- | :----: | :-----: | :---------------------------: |
| Tasks Left Before Clickable | Determines how many tasks remain before the Spectre can be clicked. | Count  |    3    |             1 -15             |
| Spectre Win                 | Determines what happens if the Spectre wins.                        | String | Nothing | Nothing / Ends Game / Nothing |
