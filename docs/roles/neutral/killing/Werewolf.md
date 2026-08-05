---
title: Werewolf
description: Rampage to kill everyone!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Werewolf.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Werewolf

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Rampage to Kill Everyone!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Killing <br />
    </div>

<p>
      The **Werewolf** wins by being the last killer alive. They can go on a **rampage** to increase their vision and gain the ability to kill multiple times within a set duration.
</p>

  </div>
</div>

---

## Abilities

|                                              Button                                              |   Ability   |                                                   Description                                                    |           Type            |
| :----------------------------------------------------------------------------------------------: | :---------: | :--------------------------------------------------------------------------------------------------------------: | :-----------------------: |
| <img src={useBaseUrl('/img/NeutButtons/RampageButton.png')} alt="Button" style={{width: 50}} />  | **Rampage** | Go on a Rampage, gaining Impostor vision and the ability to kill multiple times with your reduced kill cooldown. |       Basic Ability       |
| <img src={useBaseUrl('/img/NeutButtons/WolfKillButton.png')} alt="Button" style={{width: 50}} /> | **┣ Kill**  |                                       Kill another player while Rampaging.                                       |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/WolfVentButton.png')} alt="Button" style={{width: 50}} /> | **┗ Vent**  |                                If enabled, the Werewolf can vent while Rampaging.                                | Basic Ability, if enabled |

## Options

| Option                          | Description                                               |  Type   | Default |    Range     |
| ------------------------------- | --------------------------------------------------------- | :-----: | :-----: | :----------: |
| Rampage Cooldown                | Cooldown for using the Rampage ability.                   | Seconds |   25s   |   10 - 60s   |
| Rampage Duration                | How long the active Rampage will last.                    | Seconds |   10s   |   10 - 60s   |
| Rampage Kill Cooldown           | Cooldown killing while Rampaging.                         | Seconds |  1.5s   |  0.5 - 15s   |
| Werewolf Can Vent When Rampaged | Determines whether the Werewolf can vent while Rampaging. | Toggle  |  True   | True / False |
