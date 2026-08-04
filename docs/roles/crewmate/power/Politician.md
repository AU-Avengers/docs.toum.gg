---
title: Politician
description: Campaign to become the Mayor!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Politician.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Politician

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Campaign to Become the Mayor!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Power<br />
    </div>

<p>
The **Politician** must successfully **campaign** at least half of the Crewmates in order to reveal themselves as **The Mayor**. 
Campaigned players will be visible to the Politician with cyan coloured names.
</p>
  </div>
</div>

:::important Strategy Guide

Try to campaign those you know/think are definitely fellow Crewmates. Without their votes, you'll never be elected as the Mayor!

:::

---

### Abilities

|                                              Button                                              |   Ability    |                  Description                   |           Type           |
| :----------------------------------------------------------------------------------------------: | :----------: | :--------------------------------------------: | :----------------------: |
| <img src={useBaseUrl('/img/CrewButtons/CampaignButton.png')} alt="Button" style={{width: 50}} /> | **Campaign** |               Campaign a player.               |    Player Interaction    |
|  <img src={useBaseUrl('/img/OtherButtons/RevealClean.png')} alt="Button" style={{width: 50}} />  |  **Reveal**  | Reveal yourself as the Mayor during a meeting. | Targeted Meeting Ability |

### Options

| Option                               |                                                        Description                                                        |  Type   | Default |    Range     |
| ------------------------------------ | :-----------------------------------------------------------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Campaign Cooldown                    |                                         Cooldown for being able to jail someone.                                          | Seconds |   25s   |   10 - 60s   |
| Prevent Campaigning on Failed Reveal | If the Politician attempts to reveal without enough crew campaigned, they will not be able to Campaign in the next round. | Toggle  |  True   | True / False |
