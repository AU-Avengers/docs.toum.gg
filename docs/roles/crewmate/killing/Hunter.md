---
title: Hunter
description: Hunt the Impostors!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Hunter.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Hunter

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/HunterBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
     Hunt the Impostors!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Killing<br />
    </div>

<p>
The **Hunter** can **Stalk** players and will be alerted by a brief green flash if the stalked player uses an ability of any kind (the player's name will also turn black). The Hunter then has the option to kill the player at any point during the game, without consequence if they kill a fellow crewmate (as long as they are not an alerted Veteran).
</p>

  </div>
</div>

:::important[Strategy Guide]

It can be tempting to want to immediately kill anybody that triggers your alert, but bear in mind that there are _many_ interactive Crewmate roles. Only shoot if you suspect the interaction was suspicious, or run the risk of killing a fellow Crewmate!

:::

---

### Abilities

|                                               Button                                               |  Ability  |                                                            Description                                                             |        Type        |
| :------------------------------------------------------------------------------------------------: | :-------: | :--------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|   <img src={useBaseUrl('/img/CrewButtons/StalkButton.png')} alt="Button" style={{width: 50}} />    | **Stalk** | Stalk any player of your choosing. If they use any ability while stalked, they’re added to the Hunter's hitlist and can be killed. | Player Interaction |
| <img src={useBaseUrl('/img/CrewButtons/HunterKillButton.png')} alt="Button" style={{width: 50}} /> | **Kill**  |                                        Kill any player that has been added to your hitlist.                                        | Player Interaction |

### Options

| Option                                  |                                      Description                                       |  Type   |    Default    |            Range             |
| --------------------------------------- | :------------------------------------------------------------------------------------: | :-----: | :-----------: | :--------------------------: |
| Hunter Kill Cooldown                    |                             Cooldown for killing a player.                             | Seconds |      25s      |          10s - 60s           |
| Hunter Stalk Cooldown                   |                            Cooldown for stalking a player.                             | Seconds |      20s      |          10s - 30s           |
| Hunter Stalk Duration                   |                            Duration for stalking a player.                             | Seconds |      25s      |           5s - 60s           |
| Initial Stalk Uses                     |                  How many Stalk abilities the Hunter will start with.                  |  Count  |       5       |          1 - 30 / ∞          |
| Tasks Required for Additional Stalk Use |            How many tasks must be completed to earn additional Stalk uses.             |  Count  |       1       |         1 - 15 / Off         |
| Stalk Triggered By                      |                    Determines what will trigger the Hunter's alert.                    | String  | All Abilities | All Abilities / Interactions |
| Hunter Sees Interaction Type            | Determines if the Hunter will know the type of interaction that triggers their alert.  | Toggle  |     True      |         True / False         |
| Hunter Kills Last Voter if Voted Out    | Determines if the Hunter will kill the last player to vote them if they are voted out. | Toggle  |     True      |         True / False         |
| Hunter Can Report Who They've Killed    |          Determines if the Hunter is able to report bodies they have killed.           | Toggle  |     False     |         True / False         |
