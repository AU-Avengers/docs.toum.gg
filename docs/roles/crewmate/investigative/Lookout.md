---
title: Lookout
description: Keep your eyes wide open!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Lookout.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Lookout

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/LookoutBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Keep your eyes wide open!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Investigative<br />
  </div>

<p>
The <strong>Lookout</strong> can <strong>watch</strong> other players during rounds, and will discover which roles interacted with the watched players during meetings.
</p>

  </div>
</div>

:::important Strategy Guide

Watch players who are likely to attract attention, such as confirmed Crew, important/powerful claims, or frequent targets. Learning which roles interact with a player can help identify protective roles and even potential killers.

:::

---

### Abilities

|                                            Button                                             |  Ability  |                                                   Description                                                    |        Type        |
| :-------------------------------------------------------------------------------------------: | :-------: | :--------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/WatchButton.png')} alt="Button" style={{width: 50}} /> | **Watch** | Watch a player, or multiple. In the next meeting, you will know which roles interacted with each watched player. | Player Interaction |

### Options

| Option                                 |                                                 Description                                                  |  Type   | Default |      Range      |
| -------------------------------------- | :----------------------------------------------------------------------------------------------------------: | :-----: | :-----: | :-------------: |
| Watch Cooldown                         |                                       Cooldown for watching a player.                                        | Seconds |   20s   |    1s - 30s     |
| Watched Player Feedback Reveals        | Determines whether the Lookout's feedback reveals the players or roles that have interacted with the target. | String  | Players | Players / Roles |
| Initial Players That Can be Watched    |                                     Maximum players that can be watched.                                     |  Count  |    5    |     1 - 15      |
| See Indirect Attacks                   |                         Determines if the Lookout will know about indirect attacks, e.g., bombs.                          | Toggle  |  False  |  True / False   |
| Lookout Watches Reset After Each Round |                               Determines if uses are reset each round or not.                                | Toggle  |  True   |  True / False   |
| ┗ Get More Uses From Completing Task   |                                  Determines if doing tasks gives more uses.                                  | Toggle  |  False  |  True / False   |
