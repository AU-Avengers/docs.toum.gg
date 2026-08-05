---
title: Arsonist
description: Douse players and ignite the light!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Arsonist.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Arsonist

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Douse Players and Ignite the Light!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Killing<br />
    </div>

<p>
      The **Arsonist** must **douse** and **ignite** players within their radius and wins by being the last killer alive.

</p>
<p>
      If Legacy Arsonist is active, they must douse players individually, but can ignite one target to kill all doused players on the map at once.

</p>

  </div>
</div>

---

## Abilities

|                                              Button                                              |  Ability   |               Description               |           Type            |
| :----------------------------------------------------------------------------------------------: | :--------: | :-------------------------------------: | :-----------------------: |
|  <img src={useBaseUrl('/img/NeutButtons/DouseButton.png')} alt="Button" style={{width: 50}} />   | **Douse**  |       Douse a player in gasoline.       |    Player Interaction     |
|  <img src={useBaseUrl('/img/NeutButtons/IgniteButton.png')} alt="Button" style={{width: 50}} />  | **Ignite** |          Kill doused players.           |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/ArsoVentButton.png')} alt="Button" style={{width: 50}} /> |  **Vent**  | If enabled, the Arsonist can use vents. | Basic Ability, if enabled |

## Options

| Option                  | Description                                                                                        |  Type   | Default |    Range     |
| ----------------------- | -------------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Douse Cooldown          | Cooldown for using the Douse ability.                                                              | Seconds |   25s   |   10 - 60s   |
| Douses Possible at Once | The maximum number of players can be doused at the same time.                                     |  Count  |    5    |  1 - 30 / ∞  |
| Douse From Interactions | Determines whether Douses will spread via interactions between players within a radius.            | Toggle  |  True   | True / False |
| Legacy Mode (No Radius) | Enables Legacy Arsonist; douse individually and ignite all doused players at once from one target. | Toggle  |  True   | True / False |
| Arsonist Can Vent       | Determines whether the Arsonist can use vents.                                                     | Toggle  |  False  | True / False |
| Has Impostor Vision     | Determines whether the Arsonist has Impostor vision.                                               | Toggle  |  True   | True / False |
