---
title: Escapist
description: Escape with ease!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Escapist.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Escapist

<div className="role-header">
  <img
    className="role-banner"
    src={useBaseUrl('/img/RoleBanners/EscapistBanner.png')}/>

  <div className="role-info">
    <div className="role-tagline">
      Escape With Ease!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Concealing<br />
    </div>

<p>
      The **Escapist** is able to **mark** a location on the map and then **recall** (teleport) to that location from anywhere.
</p>

  </div>
</div>

:::danger[Strategy Guide]

Place your mark in a low-traffic area to avoid potentially being seen escaping by players passing by.

:::

---

## Abilities

|                                            Button                                             |  Ability   |          Description           |     Type      |
| :-------------------------------------------------------------------------------------------: | :--------: | :----------------------------: | :-----------: |
|  <img src={useBaseUrl('/img/ImpButtons/MarkButton.png')} alt="Button" style={{width: 50}} />  |  **Mark**  | Mark a location for later use. | Basic Ability |
| <img src={useBaseUrl('/img/ImpButtons/RecallButton.png')} alt="Button" style={{width: 50}} /> | **Recall** | Recall to the marked location. | Basic Ability |

## Options

| Option          |                    Description                     |  Type   | Default |   Range   |
| --------------- | :------------------------------------------------: | :-----: | :-----: | :-------: |
| Max Recalls     | Maximum times that Recalling is possible per game. |  Uses   |    ∞    |  ∞ - 15   |
| Recall Cooldown |       Cooldown for recalling to a location.        | Seconds |   25s   | 10s - 60s |
| Can Vent        |        Determines if the Escapist can vent.        | Toggle  |  True   |    N/A    |
