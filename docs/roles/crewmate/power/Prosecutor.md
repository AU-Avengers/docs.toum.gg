---
title: Prosecutor
description: Exile players of your choosing!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Prosecutor.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Prosecutor

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ProsecutorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Exile Players of Your Choosing!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Power <br />
        </div>

<p>
      The **Prosecutor** can choose to exile a player during a meeting, casting their vote to overpower all others. They can also see who voted for who, even if voting is anonymous.
</p>
<p>
      **Note:** An **Imitator** Prosecutor cannot use the Prosecute ability, but can still see votes.
</p>

  </div>
</div>

:::important Strategy Guide

The Prosecutor may also die if they incorrectly prosecute a fellow Crewmate, so be certain about who you want to exile!

:::

---

|    Ability    |                                         Description                                          |           Type           |
| :-----------: | :------------------------------------------------------------------------------------------: | :----------------------: |
| **Prosecute** | Exile any player of your choosing, throwing five votes on them and ignoring all other votes. | Targeted Meeting Ability |

### Options

| Option                                     |                                       Description                                        |  Type  | Default |    Range     |
| ------------------------------------------ | :--------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Prosecutor Dies When They Exile a Crewmate | If a Crewmate is prosecuted, the Prosecutor will die after the meeting as a consequence. | Toggle |  True   | True / False |
| Max Prosecutions                           |      The maximum number of times the Prosecutor can successfully Prosecute someone.      | Count  |    2    |    1 - 5     |
