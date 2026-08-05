---
title: Chef
description: Fresh and ready to serve!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Chef.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Chef

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Fresh and Ready to Serve!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Outlier <br />
    </div>

<p>
      The **Chef** must discover dead bodies and **_cook_** them in order to **_serve_** them as meals to other players. Once the Chef meets their quota, they will win alongside any other faction.

</p>

  </div>
</div>

---

## Abilities

|                                            Button                                            |  Ability  |                        Description                        |        Type        |
| :------------------------------------------------------------------------------------------: | :-------: | :-------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/CookButton.png')} alt="Button" style={{width: 50}} /> | **Cook**  |        Cook a dead body and save it for later use.        | Player Interaction |
| <img src={useBaseUrl('/img/NeutButtons/ChefServe.gif')} alt="Button" style={{width: 50}} />  | **Serve** | Serve the oldest meal you have on hand to another player. | Player Interaction |

## Options

| Option                                | Description                                                             |  Type   | Default |    Range     |
| ------------------------------------- | ----------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Cook Cooldown                         | Cooldown for cooking bodies.                                            | Seconds |   25s   |   10 - 60s   |
| Serve Cooldown                        | Cooldown for Serving players.                                           | Seconds |   25s   |   10 - 60s   |
| Reset Cook & Serve Cooldowns Together | Reset the ability cooldowns.                                            | Toggle  |  True   | True / False |
| Amount of Servings Needed             | Number of servings required to win.                                     |  Count  |    3    |    2 - 5     |
| Duration of Side Effects              | How long side effects will last                                         | Seconds |   60s   |   0 - 120s   |
| Show Arrows Pointing to Dead Bodies   | Cooldown for Serving players.                                           | Toggle  |  True   | True / False |
| Dead Body Arrow Delay                 | Delay before the arrow appears.                                         | Seconds |  0.5s   |   0 - 15s    |
| Dead Body Arrow Duration              | How long an arrow points to a dead body.                                | Seconds |   25s   |   ∞ - 15s    |
| Hide Role on Win Notification         | Determines whether the Chef's role is hidden upon victory notification. | Toggle  |  False  | True / False |
