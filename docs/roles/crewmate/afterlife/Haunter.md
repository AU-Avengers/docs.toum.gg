---
title: Haunter
description: Complete all your tasks without getting caught to reveal Impostors!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Haunter.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Haunter

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/HaunterBanner.png"  />

  <div className="role-info">
    <div className="role-tagline">
      Complete all your tasks without getting caught to reveal Impostors!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Afterlife<br />
    </div>

<p>
The **Haunter** is the ghost of a crewmate who must complete their tasks without being caught to reveal the Impostors to the living.
</p>
<p>
When a certain number of tasks remain, the Impostor(s) will be alerted, and they will know the location of the Haunter. The Haunter must make it to the next meeting without being clicked to reveal the Impostor(s).
</p>

  </div>
</div>

:::important[Strategy Guide]

To avoid trouble heading your way, you should prioritize long tasks first, and then finish as many as you can that are close to one another to lessen the risk of being clicked.
:::

---

### Options

| Option                      |                                                         Description                                                         |  Type  | Default  |              Range              |
| --------------------------- | :-------------------------------------------------------------------------------------------------------------------------: | :----: | :------: | :-----------------------------: |
| Tasks Left Before Clickable |                How many tasks does the Haunter need to have left before they can be caught by other players                 | Count  |    3     |              0 - 5              |
| Tasks Left Before Alerted   | How many tasks does the Haunter need to have left before Impostors are alerted to the existence and location of the Haunter | Count  |    1     |             0 - 15              |
| Reveal Neutral Roles        |                            Toggles whether or not Neutrals are also revealed alongside Impostors                            | Toggle |  False   |           True/False            |
| Can Be Clicked By           |                                      Controls who can click the Haunter to catch them                                       | String | Non-Crew | Everyone / Non-Crew / Imps Only |
