---
title: Seer
description: Reveal alliances to find evildoers!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Seer.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Seer

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/SeerBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Reveal alliances to find evildoers!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Investigative<br />
   </div>

<p>
 The **Seer** can compare the alignments of other players, learning if players are friendly or enemies by using their **Intuit** and **Gaze** abilities, or **Reveal** if comparing alignments only.
</p>

  </div>
</div>

:::important Strategy Guide

As the Seer, compare players who have given each other alibis to build a reliable network of information. Mltiple comparisons over several rounds can quickly expose contradictions and hidden alliances.
:::

---

### Role Settings

| Option                                         | Description                                                       |  Type   | Default |    Range     |
| ---------------------------------------------- | ----------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Compare Players Instead of Checking Alignments | Determines whether the Seer will compare or reveal alignments.    | Toggle  |  True   | True / False |
| Reveal / Compare Cooldown                      | Cooldown for using the Reveal ability                             | Seconds |   20s   |   5 - 120s   |
| Max Uses of Reveal / Compare                   | Maximum number of times the Reveal / Compare ability can be used. |  Count  |    5    |  1 - 15 / ∞  |

### If Set to Compare Alignments

| Option                                  | Description                                                |  Type  | Default |    Range     |
| --------------------------------------- | ---------------------------------------------------------- | :----: | :-----: | :----------: |
| ┣ Neutral Benigns Shows Friends to All  | Determines if Neutral Benign roles will show as friendly.  | Toggle |  False  | True / False |
| ┣ Neutral Evils Shows Friends to All    | Determines if Neutral Evil roles will show as friendly.    | Toggle |  False  | True / False |
| ┗ Neutral Outliers Shows Friends to All | Determines if Neutral Outlier roles will show as friendly. | Toggle |  False  | True / False |

### If Set to Check (Reveal) Alignments

| Option                           | Description                                                                |  Type  | Default |    Range     |
| -------------------------------- | -------------------------------------------------------------------------- | :----: | :-----: | :----------: |
| ┣ Crewmate Killing Roles are Red | Determines if the names of CK roles will show as red when revealed.        | Toggle |  False  | True / False |
| ┣ Neutral Benign Roles Are Red   | Determines if the names of NB roles will show as red when revealed.        | Toggle |  False  | True / False |
| ┣ Neutral Evil Roles Are Red     | Determines if the names of NE roles will show as red when revealed.        | Toggle |  False  | True / False |
| ┣ Neutral Killing Roles Are Red  | Determines if the names of NK roles will show as red when revealed.        | Toggle |  True   | True / False |
| ┣ Neutral Outlier Roles Are Red  | Determines if the names of NO roles will show as red when revealed.        | Toggle |  False  | True / False |
| ┗ Traitor Swaps Colors           | Determines if the Traitor's name will turn red if they have been revealed. | Toggle |  True   | True / False |
