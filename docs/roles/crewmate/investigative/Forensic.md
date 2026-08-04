---
title: Forensic
description: Investigate crime scenes and uncover clues!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Forensic.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Forensic

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ForensicBanner.png"
    alt="Forensic Banner"
  />

  <div className="role-info">
    <div className="role-tagline">
      Investigate crime scenes and uncover clues!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Investigative<br />
      <strong>&#8226; Aliases:</strong> Detective (TOU:R)
    </div>

<p>
      The <strong>Forensic</strong> can <strong>inspect</strong> crime scenes
      and <strong>examine</strong> players to see if they were at the scene.
</p>
<p>
      When examining a player, the screen will flash red if the player was
      near the crime scene.
    </p>

  </div>
</div>

:::important Strategy Guide

Try to visit crime scenes quickly before information becomes stale. If a body is found in a low-traffic area, the evidence is often far more reliable than information gathered from a crowded location.

:::

---

### Abilities

| Button                                                                                          | Ability     |                                           Description                                            |          Type           |
| ----------------------------------------------------------------------------------------------- | ----------- | :----------------------------------------------------------------------------------------------: | :---------------------: |
| <img src={useBaseUrl('/img/CrewButtons/InspectButton.png')} alt="Button" style={{width: 50}} /> | **Inspect** |                        Inspect a crime to gain insight on who was nearby.                        | Crime Scene Interaction |
| <img src={useBaseUrl('/img/CrewButtons/ExamineButton.png')} alt="Button" style={{width: 50}} /> | **Examine** | Examine a player to see if they were near one of the crime scenes that was investigated earlier. |   Player Interaction    |

### Options

| Option                                  |                                Description                                |  Type   | Default |    Range     |
| --------------------------------------- | :-----------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Examine Cooldown                        |                      Cooldown for examining a player                      | Seconds |   25s   |  10s - 60s   |
| Show Forensic Reports                   | Toggle for whether the Forensic gets reports about the bodies they report | Toggle  |  True   | True / False |
| ┗ Time Where Forensic Will Have Role    |        How early should the Forensic report to get the body's role        | Seconds |  7.5s   |   0s - 60s   |
| ┗ Time Where Forensic Will Have Faction |      How early should the Forensic report to get the body's faction       | Seconds |   30s   |   0s - 60s   |
