---
title: Glitch
description: Murder, Mimic, Hack... Data Lost!
custom_edit_url: null
---


import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Glitch.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Glitch

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Murder, Mimic, Hack... Data Lost!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Killing<br />
    </div>

<p>
      The **Glitch** wins by being the last killer alive. They can **Mimic** into another player, temporarily taking on their appearance, or they can **Hack** a player, temporarily preventing them from using any abilities.

</p>

  </div>
</div>


---

## Abilities

|                                               Button                                               |  Ability  |                             Description                              |           Type            |
| :------------------------------------------------------------------------------------------------: | :-------: | :------------------------------------------------------------------: | :-----------------------: |
|   <img src={useBaseUrl('/img/NeutButtons/MimicButton.png')} alt="Button" style={{width: 50}} />    | **Mimic** |         Mimic the appearance of another player temporarily.          |    Player Interaction     |
|    <img src={useBaseUrl('/img/NeutButtons/HackButton.png')} alt="Button" style={{width: 50}} />    | **Hack**  | Hack a player, temporarily preventing them from using any abilities. |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/GlitchVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent**  |                If enabled, the Glitch can use vents.                 | Basic Ability, if enabled |

## Options

| Option                                      | Description                                                             |  Type   | Default |    Range     |
| ------------------------------------------- | ----------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Kill Cooldown                               | Cooldown for killing.                                                   | Seconds |   25s   |   10 - 60s   |
| Mimic Cooldown                              | Cooldown for using the Mimic ability.                                   | Seconds |   25s   |   10 - 60s   |
| Mimic Duration                              | How long the Mimic ability lasts.                                       | Seconds |   10s   |   5 - 15s    |
| Move While Using Mimic Menu (Keyboard Only) | Determines whether the Glitch can use the Mimic Menu while moving.      | Toggle  |  True   | True / False |
| Hack Cooldown                               | Cooldown for using the Hack ability.                                    | Seconds |   25s   |   10 - 60s   |
| Hack Duration                               | How long the Hack will last, stopping players from using any abilities. | Seconds |   25s   |   10 - 60s   |
| Glitch Can Vent                             | Determines whether the Glitch can use vents.                            | Toggle  |  True   | True / False |
