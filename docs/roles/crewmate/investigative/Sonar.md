---
title: Sonar
description: Sense everyone's movement!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Sonar.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Sonar

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/SonarBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Sense everyone's movement!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Investigative<br />
      <strong>&#8226; Aliases:</strong> Tracker (TOU:R)
    </div>

<p>
The <b>Sonar</b> can place markers on other players to track their general location. By placing a marker, the Sonar will see a ping indicating the tracked player's position across the map. The pings match the tracked player's colour, and will update at set intervals, allowing the Sonar to follow suspicious players and identify unusual movement.
</p>

  </div>
</div>

:::important Strategy Guide

Tracking every player can quickly become overwhelming—prioritise tracking players you believe are suspicious or may be targeted. Following movement patterns over multiple rounds is often more valuable than focusing on one suspicious movement.

:::

---

### Abilities

| Button                                                                                        |  Ability  |                                                          Description                                                           |        Type        |
| --------------------------------------------------------------------------------------------- | :-------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/TrackButton.png')} alt="Button" style={{width: 50}} /> | **Track** | Places a tracker (ping) on a player, making it so that the player's location is visible to the Tracker, updating periodically. | Player Interaction |

### Options

| Option                                |                                 Description                                 |  Type   | Default |    Range     |
| ------------------------------------- | :-------------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Track Cooldown                        |                        Cooldown for tracking players                        | Seconds |   20s   |   1s - 30s   |
| Max Number Of Tracks                  |          The maximum number of tracking bugs the Tracker can place          |  Count  |    5    |    1 - 15    |
| Arrow Update Interval                 |   The interval at which the tracking arrows update their target location    | Seconds |   5s    |  0.5s - 15s  |
| Sonar Arrows Make Sound On Death      |   Toggles whether or not a sound effect plays if the tracked target dies    | Toggle  |  True   | True / False |
| Sonar Arrows Reset After Each Round   |      Toggles whether tracking arrows reset at the end of every meeting      | Toggle  |  True   | True / False |
| ┗ Get More Uses From Completing Tasks | Toggles whether the maximum number of tracks increases upon task completion | Toggle  |  False  | True / False |
