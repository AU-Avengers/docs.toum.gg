---
title: Medusa
description: Petrify the Crewmates into stone!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Medusa.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Medusa

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Petrify the Crewmates into Stone!
    </div>

<div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Killing <br />
    </div>

<p>
      **Medusa** can force its victims to stand still and slowly turn into stone. 
      
      Stoned players who haven't shattered will remain throughout rounds.

</p>

  </div>
</div>

---

## Abilities

|                                               Button                                               |    Ability     |                                                             Description                                                              |        Type        |
| :------------------------------------------------------------------------------------------------: | :------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|    <img src={useBaseUrl('/img/NeutButtons/MedusaPetrifyButton.png')} alt="Button" style={{width: 50}} />    |  **Petrify**   |                             Petrify a player to turn them into stone, killing them and leaving a statue                              | Player Interaction |
| <img src={useBaseUrl('/img/NeutButtons/MedusaStoneGazeButton.png')} alt="Button" style={{width: 50}} /> | **Stone Gaze** | Petrify anyone who tries to interact with you while gazing, unless they attempt to kill you. You will also not lunge towards others. |   Basic Ability    |
| <img src={useBaseUrl('/img/NeutButtons/MedusaVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent** | If enabled, allows Medusa to use vents. |   Basic Ability (if enabled)    |

## Options

| Option                           | Description                                                   |  Type   | Default |    Range     |
| -------------------------------- | ------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Petrify Cooldown                 | Cooldown for using the Petrify ability.                       | Seconds |   25s   |   5 - 120s   |
| Time For Victim To Become Stoned | The time it will take for petrified players to turn to stone. | Seconds |   10s   |   5 - 20s    |
| Time Before Stone Shatters       | The time before a petrified player will shatter.              | Seconds |   20s   |  12.5 - 60s  |
| Allow Stone Gazing               | Determines whether Medusa can use their Stone Gaze ability.   | Toggle  |  True   | True / False |
| ┝ Stone Gaze Cooldown            | The cooldown for using the Stone Gaze ability.                | Seconds |   35s   |   5 - 120s   |
| ┝ Stone Gaze Duration            | How long the Stone Gaze ability lasts when active.            | Seconds |   10s   |   5 - 20s    |
| ┗ Stone Gaze Uses                | How many times the Stone Gaze ability can be used.            |  Count  |    3    |    1 - 10    |
| Medusa Can Vent                  | Determines whether Medusa can vent.                           | Toggle  |  False  | True / False |
