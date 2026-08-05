---
title: Hypnotist
description: Hypnotise Crewmates!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Hypnotist.png')} alt="Icon" align="left" style={{height: 60}} />

# Hypnotist

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Hypnotise Crewmates!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Support<br />
    </div>

<p>
The **Hypnotist** can **_hypnotize_** players (marked with a red @).
</p>
<p>
During a meeting, they can release **_Mass Hysteria_**, which makes all hypnotised players see different visuals applied to players in the following round.
</p>

  </div>
</div>

---

## Abilities

|                                              Button                                              |      Ability      |                                                     Description                                                      |        Type        |
| :----------------------------------------------------------------------------------------------: | :---------------: | :------------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/HypnotiseButton.png')} alt="Button" style={{width: 50}} /> |   **Hypnotise**   | Hypnotise a player, causing them to see the game differently than non-hypnotised players if mass hysteria is active. | Player Interaction |
| <img src={useBaseUrl('/img/OtherButtons/HysteriaClean.png')} alt="Button" style={{width: 50}} /> | **Mass Hysteria** |    Cause all hypnotised players to have different visuals applied to players on their screen the following round.    |  Meeting Ability   |

## Options

| Option                           |                                  Description                                   |  Type   | Default |   Range   |
| -------------------------------- | :----------------------------------------------------------------------------: | :-----: | :-----: | :-------: |
| Hypnotise Cooldown               |                   Cooldown for hypnotising players players.                    | Seconds |   25s   | 10s - 60s |
| Hypnotist Can Kill With Teammate | Determines if the Hypnotist can kill with a teammate, or if they must be solo. | Toggle  |  True   |    N/A    |
