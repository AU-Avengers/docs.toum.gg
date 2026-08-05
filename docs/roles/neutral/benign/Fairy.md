---
title: Fairy
description: Protect your target with your life!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Fairy.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Fairy

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
     Protect your target with your life!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Benign<br />
      <b>&#8226; Alias:</b> Guardian Angel (TOU:R)
    </div>

<p>
      The **Fairy** must **protect** their target (signified by a light blue **★**) from getting killed or ejected. 
    </p>
      <p>
      They can give their target a temporary shield to protect them from being killed during rounds. The Guardian Angel wins if their target does.

</p>

  </div>
</div>

:::note[Strategy Guide]

Time your **_protects_** for moments when your target may be more vulnerable, such as being isolated or during sabotages.

:::

---

## Abilities

| Button                                                                                          | Ability     |              Description               |     Type      |
| ----------------------------------------------------------------------------------------------- | ----------- | :------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/NeutButtons/ProtectButton.png')} alt="Button" style={{width: 50}} /> | **Protect** | Protect your target from being killed. | Basic Ability |

## Options

| Option                         | Description                                                                                           |  Type   |    Default     |                        Range                        |
| ------------------------------ | ----------------------------------------------------------------------------------------------------- | :-----: | :------------: | :-------------------------------------------------: |
| Protect Cooldown               | Cooldown for using the Protect ability.                                                               | Seconds |      25s       |                      10 - 60s                       |
| Protect Duration               | How long the Protect shield will last.                                                                | Seconds |      10s       |                       5 - 15s                       |
| Max Number of Protect          | Max number of times the Fairy can Protect their target.                                               |  Count  |       5        |                       1 - 15                        |
| Show Protected Player          | Determines who can see the Protect shield.                                                            | String  | Target + Fairy |         Target / Target + Fairy / Everyone          |
| On Target Death, Fairy Becomes | Determines what role the Fairy will become if their target dies.                                      | String  |    Amnesiac    | Amnesiac / Survivor / Mercenary / Jester / Crewmate |
| Target Knows Fairy Exists      | Determines if the target knows they have a Fairy (signified by a light blue **★** by their own name). | Toggle  |      True      |                    True / False                     |
| Fairy Knows Target Roles       | Determines if the Fairy knows the role of their target.                                               | Toggle  |      True      |                    True / False                     |
| Odds of Target Being Evil      | The chance of the target being an Evil role.                                                          | Percent |      20%       |                      0 - 100%                       |
