---
title: Juggernaut
description: Your power grows with every kill!
custom_edit_url: null
---


import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Juggernaut.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Juggernaut

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Your Power Grows With Every Kill!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Killing <br />
    </div>

<p>
      The **Juggernaut** wins by being the last killer alive. With each kill, their cooldown gets reduced.
</p>

  </div>
</div>

---

## Abilities

|                                              Button                                              | Ability  |                Description                 |           Type            |
| :----------------------------------------------------------------------------------------------: | :------: | :----------------------------------------: | :-----------------------: |
| <img src={useBaseUrl('/img/NeutButtons/JuggKillButton.png')} alt="Button" style={{width: 50}} /> | **Kill** | Kill players to reduce your kill cooldown. |       Basic Ability       |
| <img src={useBaseUrl('/img/NeutButtons/JuggVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent** |    If enabled, the Juggernaut can vent.    | Basic Ability, if enabled |

## Options

| Option                  | Description                                       |  Type   | Default |    Range     |
| ----------------------- | ------------------------------------------------- | :-----: | :-----: | :----------: |
| Initial Kill Cooldown   | The kill cooldown the Juggernaut starts with.     | Seconds |   25s   |   10 - 60s   |
| Kill Cooldown Reduction | How much the kill cooldown lowers with each kill. | Seconds |   5s    |  2.5 - 15s   |
| Juggernaut Can Vent     | Determines whether the Juggernaut can use vents.  | Toggle  |  True   | True / False |
