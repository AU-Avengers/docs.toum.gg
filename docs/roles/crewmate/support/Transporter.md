---
title: Transporter
description: Swap the locations of players!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Transporter.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Transporter

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Swap the locations of players!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Support<br />
    </div>

<p>
      The **Transporter** can transport two players, dead or alive, to swap their locations.
</p>
<p>
      **Note:** A red flash indicates that one target is an invalid choice, such as being on a ladder or zipline.
</p>

  </div>
</div>

:::important[Strategy Guide]

While it's fun to keep switching players at random, think ahead about how the new positions may affect their safety. Some transports can save lives, others can cost you fellow Crewmates!

:::

---

## Abilities

|                                              Button                                               |    Ability    |                  Description                   |        Type        |
| :-----------------------------------------------------------------------------------------------: | :-----------: | :--------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/TransportButton.png')} alt="Button" style={{width: 50}} /> | **Transport** | Select two players and switch their locations. | Player Interaction |

## Options

| Option                                          | Description                                                                 |  Type   | Default |    Range     |
| ----------------------------------------------- | --------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Transport Cooldown                              | Cooldown for using the Transport ability.                                   | Seconds |   25s   |   10 - 60s   |
| Initial Uses                                    | The number of times the Transporter can initially use their ability.        |  Count  |    5    |    1 - 15    |
| Move While Using Transport Menu (Keyboard Only) | Determines whether the Transporter can move while using the Transport menu. | Toggle  |  True   | True / False |
| Can Use Vitals                                  | Determines whether the Transporter can use Vitals.                          | Toggle  |  True   | True / False |
| Get More Uses From Completing Tasks             | Determines if doing tasks earns more Transports.                            | Toggle  |  True   | True / False |
