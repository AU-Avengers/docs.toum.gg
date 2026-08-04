---
title: Swapper
description: Swap votes to save the Crew!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Swapper.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Swapper

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Swap Votes to Save the Crew!
    </div>

   <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Power<br />
    </div>

<p>
      The **Swapper** can **swap** the votes of two players in a meeting. 
</p>
<p>
 The 2 chosen players will visually swap positions at the end of a meeting. If Player 1 received the most votes and they are swapped with Player 2, then Player 2 will be ejected.
</p>
  </div>
</div>

:::important[Strategy Guide]

Pay close attention to voting patterns and interactions throughout each meeting. Spotting false alibis or accusations can help you swap a fellow Crewmate to safety and send an evildoer to their doom!

:::

---

### Abilities

|                                            Button                                             | Ability  |                            Description                             | Type                     |
| :-------------------------------------------------------------------------------------------: | :------: | :----------------------------------------------------------------: | ------------------------ |
| <img src={useBaseUrl('/img/OtherButtons/SwapActive.png')} alt="Button" style={{width: 50}} /> | **Swap** | Swaps the positions of two chosen players at the end of a meeting. | Targeted Meeting Ability |

### Options

| Option          |                    Description                     |  Type  | Default |    Range     |
| --------------- | :------------------------------------------------: | :----: | :-----: | :----------: |
| Can Call Button | Whether the Swapper can call an emergency meeting. | Toggle |  True   | True / False |
