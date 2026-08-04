---
title: Snitch
description: Complete your tasks to find the Impostors!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Snitch.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Snitch

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/SnitchBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Complete your tasks to find the Impostors!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Investigative<br />
    </div>

<p>
 The Snitch must race to complete their tasks in order to reveal the Impostors.
</p>
<p>
  Upon completing all tasks, the Impostors will be revealed to the Snitch with arrows and red names. However, the Snitch will also be revealed to the Impostors. The Snitch must survive to the next meeting and cannot be shot by the Impostors once revealed.
</p>

  </div>
</div>

:::important Strategy Guide

Completing tasks quickly is important, but staying alive is even more vital. Prioritise long or isolated tasks first, and try to path your way to the Emergency Button in the shortest way possible. Every second counts!

:::

---

### Options

| Option                            |                                                  Description                                                   |  Type  | Default |    Range     |
| --------------------------------- | :------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Snitch Reveals Neutral Killers    |                      Toggles whether Neutral Killers are revealed to the Snitch as well.                       | Toggle |  False  | True / False |
| Snitch Sees Traitor               |                          Toggles whether a turned Traitor is revealed to the Snitch.                           | Toggle |  True   | True / False |
| Snitch Sees Impostors In Meetings |                        Toggles whether or not they see reveal players during meetings.                         | Toggle |  True   | True / False |
| Tasks Remaining When Revealed     | How many tasks does the Snitch need to have left before Impostors are alerted to their existence and location. | Count  |    1    |    1 - 3     |
