---
title: Executioner
description: Get your target voted out to win!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Executioner.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Executioner

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Get Your Target Voted Out to Win!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral evil<br />
    </div>

<p>
      The **Executioner** wins by getting their target (signified by a brown **X**) ejected in a meeting.

</p>
<p>
      If enabled, when the Executioner wins, they may leave the game in victory and be able to taunt another player, choosing to kill someone from the players who voted for the Executioner's target.
</p>

  </div>
</div>

:::note[TIP]

Sometimes waiting for the right opportunity to frame your target is more effective than throwing a random accusation at them, especially if they have already been cleared or have an alibi.

:::

---

## Abilities

|                                               Button                                               |   Ability   |                                                                 Description                                                                  | Type |
| :------------------------------------------------------------------------------------------------: | :---------: | :------------------------------------------------------------------------------------------------------------------------------------------: | :--: |
| <img src={useBaseUrl('/img/NeutButtons/ExeTormentButton.png')} alt="Button" style={{width: 50}} /> | **Torment** | If enabled, after winning, the Executioner can choose someone to Torment (kill) from a menu of those who voted for the Executioner's target. | Menu |

## Options

| Option                                                           | Description                                                                 |  Type  |      Default      |                      Range                      |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------- | :----: | :---------------: | :---------------------------------------------: |
| On Target Death, Executioner Becomes                             | Determines what role the Executioner becomes if their target dies.          | String |      Jester       | Jester / Crew / Amnesiac / Survivor / Mercenary |
| Executioner Can Button                                           | Determines whether the Executioner can use the Emergency Button.            | Toggle |       True        |                  True / False                   |
| Executioner Win                                                  | Determines what happens if the Executioner wins.                            | String | Leaves & Torments |     Leaves & Torments / Ends Game / Nothing     |
| ┗ Hide Role on Win Notification (if Leaves & Tormets or Nothing) | Determines whether the Executioner win notification is hidden upon victory. | Toggle |       False       |                  True / False                   |
