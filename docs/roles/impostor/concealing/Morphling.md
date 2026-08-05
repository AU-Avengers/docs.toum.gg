---
title: Morphling
description: Transform into Crewmates!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Morphling.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Morphling

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Transform into Crewmates!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Concealing <br />
    </div>

<p>
      The **Morphling** can **Sample** another player and **Morph** into the player to disguise themselves temporarily.

</p>

  </div>
</div>

:::danger[Strategy Guide]

Sample a player that has already been accused of being suspicious to frame them and get them voted out!

:::

---

### Abilities

|                                            Button                                             |  Ability   |                                  Description                                   |        Type        |
| :-------------------------------------------------------------------------------------------: | :--------: | :----------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/SampleButton.png')} alt="Button" style={{width: 50}} /> | **Sample** |            Take a DNA sample of a player to morph into them later.             | Player Interaction |
| <img src={useBaseUrl('/img/ImpButtons/MorphButton.png')} alt="Button" style={{width: 50}} />  | **Morph**  | Morph into the appearance of the sampled player, which can be cancelled early. |   Basic Ability    |

### Options

| Option               |                       Description                       |  Type   | Default |              Range              |
| -------------------- | :-----------------------------------------------------: | :-----: | :-----: | :-----------------------------: |
| Samples Per Game     | The number of times that Sampling is possible per game. |  Uses   |    ∞    |           5 - 15 / ∞            |
| Morph Uses Per Round | The maximum times that Morphing is possible per round.  |  Uses   |    ∞    |           1 - 15 / ∞            |
| Morph Cooldown       |   The cooldown for sampling or morphing into players.   | Seconds |   25s   |            10s - 60s            |
| Morph Duration       |         The duration for morphing into players.         | Seconds |   10s   |            10s - 60s            |
| Morphling Can Vent   |          Determines if the Morphling can vent.          | String  | Always  | Always / Never / Unless Morphed |
