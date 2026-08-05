---
title: Undertaker
description: Drag Bodies and Hide Them!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Undertaker.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Undertaker

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/UndertakerBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Drag Bodies and Hide Them!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Support<br />
    </div>

<p>
      The **Undertaker** can **_drag_** dead bodies around the map and drop them elsewhere to prevent them from being reported easily.
</p>

  </div>
</div>

:::danger[TIP]

Avoid dragging bodies through high-traffic areas if you don't want to be caught by passersby!

:::

---

## Abilities

|                                           Button                                            | Ability  |                                   Description                                   |         Type          |
| :-----------------------------------------------------------------------------------------: | :------: | :-----------------------------------------------------------------------------: | :-------------------: |
| <img src={useBaseUrl('/img/ImpButtons/DragButton.png')} alt="Button" style={{width: 50}} /> | **Drag** | Drag a dead body, if allowed through settings you can also take it into a vent. | Dead Body Interaction |
| <img src={useBaseUrl('/img/ImpButtons/DropButton.png')} alt="Button" style={{width: 50}} /> | **Drop** |     Drop the dragged dead body, stopping it from being dragged any further.     | Dead Body Interaction |

## Options

| Option                                  |                                 Description                                  |    Type    | Default |   Range    |
| --------------------------------------- | :--------------------------------------------------------------------------: | :--------: | :-----: | :--------: |
| Drag Cooldown                           |                      Cooldown for dragging dead bodies.                      |  Seconds   |   25s   | 10s - 60s  |
| Drag Speed                              |            Speed multiplier applied while dragging a dead boddy.             | Multiplier |  0.75x  | 0.25x - 1x |
| Dragging Speed is Affected by Body Size |            Determines if dragging speed is affected by body size.            |   Toggle   |  True   |    N/A     |
| Undertaker Can Vent                     |                    Determines if the Undertaker can vent.                    |   Toggle   |  True   |    N/A     |
| Can Vent With Body                      |               Determines if you can vent while holding a body.               |   Toggle   |  False  |    N/A     |
| Undertaker Can Kill With Teammate       | Determines if the Janitor can kill with a teammate, or if they must be solo. |   Toggle   |  True   |    N/A     |
