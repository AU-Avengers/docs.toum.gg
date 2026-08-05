---
title: Mirrorcaster
description: Reflect attacks onto others!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Mirrorcaster.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Mirrorcaster

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Reflect Attacks Onto Others!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Protective <br />
    </div>

<p>
      The **Mirrorcaster** can cast a **Magic Mirror** on a player to protect them. If the player is attacked directly, the Mirrorcaster will be notified, and they can attempt to **unleash** the absorbed attack onto another player.
</p>

  </div>
</div>

:::important[Strategy Guide]

Try to predict who is most likely to be targeted by interactions and attacks, and watch out to see exactly what type of attack has been absorbed.

<sub>**Note:** Arsonist, Veteran, Pestilence, Bomber, and some other roles ignore the Magic Mirror.</sub>
:::

---

### Abilities

|                                               Button                                                |     Ability      |                                   Description                                    |        Type        |
| :-------------------------------------------------------------------------------------------------: | :--------------: | :------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/MagicMirrorButton.png')} alt="Button" style={{width: 50}} /> | **Magic Mirror** |                        Place a Magic Miorror on a player.                        | Player Interaction |
|   <img src={useBaseUrl('/img/CrewButtons/UnleashButton.png')} alt="Button" style={{width: 50}} />   |   **Unleash**    | If the Mirror is shattered by an attack, unleash the attack onto another player! | Player Interaction |

### Options

| Option                            |                                     Description                                      |  Type   |        Default        |                  Range                  |
| --------------------------------- | :----------------------------------------------------------------------------------: | :-----: | :-------------------: | :-------------------------------------: |
| Who Gets Murder Attempt Indicator |                       Determines who can see the attack alert.                       | String  | Mirrorcaster + Killer |  Mirrorcaster / Mirrorcaster + Killer   |
| Magic Mirror Cooldown             |                 Cooldown for placing the Magic Mirror onto a player.                 | Seconds |          0s           |                 0 - 60s                 |
| Magic Mirror Duration             |              How long the Magic Mirror will protect the chosen player.               | Seconds |          30s          |                10 - 60s                 |
| Unleash Cooldown                  |                        Cooldown for using the Unleash attack.                        | Seconds |          15s          |                 0 - 60s                 |
| Information Received Upon Attack  | Determines the information the Mirrorcaster will receive when the Mirror is smashed. | String  |     Subalignment      | Role / Faction / Subalignment / Nothing |
| Accumulate Multiple Unleashes     |       Determines whether the Mirrorcaster can stack multiple Unleash attacks.        | Toggle  |         False         |              True / False               |
| Max Number of Magic Mirrors       |                     How many Magic Mirrors the Mirrorcaster has.                     |  Count  |           5           |                 1 - 15                  |
