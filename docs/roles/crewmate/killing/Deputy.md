---
title: Deputy
description: Camp Crewmates to catch their killer!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Deputy.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Deputy

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/DeputyBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Camp Crewmates to Catch Their Killer!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Killing<br />
    </div>

<p>
The **Deputy** can **_Camp_** other players in hopes of avenging their death. 
</p>
<p>
Once a camped player dies, the Deputy is alerted to their death with a red flash. In the following meeting, the Deputy may then attempt to shoot the killer of the camped player. If successful, the killer dies and if not, nothing happens.
</p>
  </div>
</div>

:::important Strategy Guide

Try to **camp** players that you believe are likely to be targeted, such as confirmed Crewmates. This way, you have a higher chance of correctly shooting an evildoer in the meeting.

:::

---

### Abilities

|                                            Button                                            |  Ability  |                                                                  Description                                                                  |           Type            |
| :------------------------------------------------------------------------------------------: | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------: |
| <img src={useBaseUrl('/img/CrewButtons/CampButton.png')} alt="Button" style={{width: 50}} /> | **Camp**  |            Camp a player to be alerted once they die. After their death, you may attempt to shoot the killer in the next meeting.             |    Player Interaction     |
|   <img src={useBaseUrl('/img/OtherButtons/Shoot.png')} alt="Button" style={{width: 50}} />   | **Shoot** | If your shot is successful, in which the player selected is the killer and isn't invincible, the killer dies. Otherwise, nothing will happen. | Targeted Meeting Ability |

### Options

| Option                                 |                                             Description                                             |  Type  |    Default    |                  Range                   |
| -------------------------------------- | :-------------------------------------------------------------------------------------------------: | :----: | :-----------: | :--------------------------------------: |
| Warn Killer Upon Killing Camped Target | Determines whether the Killer will be alerted that the player they killed was Camped by the Deputy. | Toggle |     True      |               True / False               |
| Reveal Deputy Upon Successful Shot     |           Determines whether the Deputy is revealed after shooting a killer successfully.           | String | Reveal Deputy | Reveal Deputy / Announce Role / Disabled |
