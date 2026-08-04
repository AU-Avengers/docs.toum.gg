---
title: Cleric
description: Save the Crewmates!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Cleric.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Cleric

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ClericBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Save the Crewmates!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Protective<br />
    </div>

<p>
      The **Cleric** can protect other players by **Cleansing** their negative effects, as well as placing **Barriers** on them to prevent interactions.
</p>

  </div>
</div>

:::important[Strategy Guide]

Barriers are most effective on players who are likely to be targeted or holding important information. If you suspect a player has been affected by a negative ability, cleansing them may provide you with more information on the roles at play during meetings!

:::

---

## Abilities

|                                             Button                                              |   Ability   |                                                Description                                                |        Type        |
| :---------------------------------------------------------------------------------------------: | :---------: | :-------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/BarrierButton.png')} alt="Button" style={{width: 50}} /> | **Barrier** |                              Prevent a Crewmate from being interacted with.                               | Player Interaction |
| <img src={useBaseUrl('/img/CrewButtons/CleanseButton.png')} alt="Button" style={{width: 50}} /> | **Cleanse** | Remove all negative effects on a player, e.g., Douse, Hack, Infect, Blackmail, Blind, Flash, and Hypnosis. | Player Interaction |

## Options

| Option                          |                           Description                           |  Type   | Default |                    Range                     |
| ------------------------------- | ------------------------------------------------------------- | :-----: | :-----: | :------------------------------------------: |
| Barrier Cooldown                |               Cooldown for using the Barrier ability.               | Seconds |   25s   |                   10 - 60s                   |
| Barrier Duration                |   How long the Barrier effect will last on the chosen player.   | Seconds |  0.25s  |                   10 - 60s                   |
| Cleanse Cooldown                |               Cooldown for using the Cleanse ability.               | Seconds |   25s   |                   10 - 60s                   |
| Show Barriered Player           |             Determines who sees the Barrier shield.             | String  | Cleric  | Sheriff / Target / Sheriff & Target / No One |
| Cleric Gets Attack Notification | Determines whether the Cleric is notified of attempted attacks. | Toggle  |  True   |                 True / False                 |
