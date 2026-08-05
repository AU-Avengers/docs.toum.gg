---
title: Vampire
description: Convert a Crewmate and kill the rest!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Vampire.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Vampire

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Convert a Crewmate and Kill the Rest!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Killing <br />
    </div>

<p>
      The **Vampire** wins by being the last killer alive, or being the last team remaining. They can **bite** players, converting others into Vampires, or killing them.
</p>

  </div>
</div>

---

## Abilities

|                                              Button                                              | Ability  |              Description               |           Type            |
| :----------------------------------------------------------------------------------------------: | :------: | :------------------------------------: | :-----------------------: |
|   <img src={useBaseUrl('/img/NeutButtons/BiteButton.png')} alt="Button" style={{width: 50}} />   | **Bite** | Bite a player to convert or kill them. |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/VampVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent** |  If enabled, the Vampire(s) can vent.  | Basic Ability, if enabled |

## Options

| Option                            | Description                                                              |  Type   | Default |    Range     |
| --------------------------------- | ------------------------------------------------------------------------ | :-----: | :-----: | :----------: |
| Bite Cooldown                     | Cooldown for using the Bite ability.                                     | Seconds |   25s   |   10 - 60s   |
| Max Number of Vampires Per Game   | Determines how many Vampires there can be per game.                      |  Count  |    2    |    2 - 5     |
| Vampires Have Impostor Vision     | Determines whether the Vampire(s) have Impostor vision.                  | Toggle  |  True   | True / False |
| New Vampire Can Assassinate       | Determines whether converted Vampires have assassin ability in meetings. | Toggle  |  True   | True / False |
| Can Convert Neutral Benign Roles  | Determines whether the Vampire can convert a Neutral Benign role.        | Toggle  |  True   | True / False |
| Can Convert Neutral Evil Roles    | Determines whether the Vampire can convert a Neutral Evil role.          | Toggle  |  True   | True / False |
| Can Convert Neutral Outlier Roles | Determines whether the Vampire can convert a Neutral Outlier role.       | Toggle  |  False  | True / False |
| Can Convert Lovers                | Determines whether the Vampire can convert a Lover.                      | Toggle  |  False  | True / False |
| New Vampires Can Convert          | Determines whether a new Vampire can convert another player.             | Toggle  |  True   | True / False |
| Vampire Can Vent                  | Determines whether the Vampire(s) can vent.                              | Toggle  |  True   | True / False |
