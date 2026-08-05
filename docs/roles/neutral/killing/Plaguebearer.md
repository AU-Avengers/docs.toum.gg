---
title: Plaguebearer
description: Infect everyone to become Pestilence!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Plaguebearer.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Plaguebearer

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Infect Everyone to Become Pestilence!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Killing <br />
    </div>

<p>
      The **Plaguebearer** must **_infect_** all other players to transform into **Pestilence**. The Plaguebearer's infection will spread to other players via interactions, including reporting infected bodies.
</p>

  </div>
</div>

---

## Abilities

|                                             Button                                             |  Ability   |   Description    |        Type        |
| :--------------------------------------------------------------------------------------------: | :--------: | :--------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/InfectButton.png')} alt="Button" style={{width: 50}} /> | **Infect** | Infect a player. | Player Interaction |

## Options

| Option                             | Description                                                                                         |  Type   | Default |    Range     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Instant Pestilence Chance          | Determines the chance for Pestilence to spawn immediately.                                          | Percent |   0%    |   0 - 100%   |
| Infect Cooldown                    | Cooldown for using the Infect ability.                                                              | Seconds |   25s   |   10 - 60s   |
| Announce Pestilence Transformation | Determines whether everyone will be notified that the Plaguebearer has transformed into Pestilence. | Toggle  |  True   | True / False |
| Pestilence Kill Cooldown           | Cooldown for actively killing players.                                                              | Seconds |   25s   |   5 - 120s   |
| Pestilence Can Vent                | Determines whether Pestilence can vent.                                                             | Toggle  |  False  | True / False |
