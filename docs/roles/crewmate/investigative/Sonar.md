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
The <b>Sonar</b> can place trackers on others to track their general location.

By placing a tracker, the Sonar will see an indication of the tracked player's position across the map. The pings match the tracked player's colour, and will update at set intervals, allowing the Sonar to follow suspicious players and identify unusual movement.

</p>

  </div>
</div>

<b>Note:</b> Players can choose to see arrows or heartbeat pings at their own preference in the Settings > Gameplay tab!

:::important[Strategy Guide]

Tracking every player can quickly become overwhelming—prioritise tracking players you believe are suspicious or may be targeted. Following movement patterns over multiple rounds is often more valuable than focusing on one suspicious movement.

:::

---

### Abilities

| Button                                                                                        |  Ability  |                                                          Description                                                           |        Type        |
| --------------------------------------------------------------------------------------------- | :-------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/TrackButton.png')} alt="Button" style={{width: 50}} /> | **Track** | Places a tracker (ping) on a player, making it so that the player's location is visible to the Tracker, updating periodically. | Player Interaction |

### Options

| Option                                |                                 Description                                  |  Type   | Default |    Range     |
| ------------------------------------- | :--------------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Track Cooldown                        |                        Cooldown for tracking players.                        | Seconds |   20s   |   1s - 30s   |
| Initial Number Of Tracks              |            The initial number of trackers the Tracker can place.             |  Count  |    5    |    1 - 15    |
| Arrow Update Interval                 |       The interval at which the trackers update their target location.       | Seconds |   5s    |  0.5s - 15s  |
| Trackers Make Sound On Death          |   Toggles whether or not a sound effect plays if the tracked target dies.    | Toggle  |  True   | True / False |
| Trackers Reset After Each Round       |         Toggles whether trackers reset at the end of every meeting.          | Toggle  |  True   | True / False |
| ┗ Get More Uses From Completing Tasks | Toggles whether the maximum number of tracks increases upon task completion. | Toggle  |  False  | True / False |
