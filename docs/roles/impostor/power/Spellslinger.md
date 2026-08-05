---
title: Spellslinger
description: Hex everyone to bomb them all!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Spellslinger.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Spellslinger

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Hex Everyone to Bomb Them All!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Power<br />
    </div>

<p>
      The **Spellslinger** can **hex** a player, priming them for detonation. 
</p>
<p>
 When all non-Impostors are hexed, the Spellslinger can set off a **Hex Bomb** after a set amount of time to win! Once triggered, the only way to stop the bomb is to eliminate the Spellslinger before the timer ends.
</p>

  </div>
</div>

:::danger[Tip]

Spellslinger is a slower role by nature: sometimes it's worth sacrificing a Hex to kill off a Crewmate instead!

:::

---

## Abilities

|                                             Button                                              |   Ability    |                                            Description                                            |      Type       |
| :---------------------------------------------------------------------------------------------: | :----------: | :-----------------------------------------------------------------------------------------------: | :-------------: |
| <img src={useBaseUrl('/img/ImpButtons/TraitorSelect.png')} alt="Button" style={{width: 50}} />  |   **Hex**    |                            Hex a player, priming them for detonation.                             |  Basic Ability  |
| <img src={useBaseUrl('/img/CrewButtons/ExamineButton.png')} alt="Button" style={{width: 50}} /> | **Hex Bomb** | Begin the countdown for the hex bomb. If you are alive when the hex bomb triggers, impostors win! | Delayed Ability |

## Options

| Option                      | Description                                       |  Type   | Default |   Range   |
| --------------------------- | ------------------------------------------------- | :-----: | :-----: | :-------: |
| Hex Cooldown                | The cooldown for Hexing players.                  | Seconds |   25s   | 10 - 60s  |
| Max Hexes                   | The maximum number of times you can Hex per game. |  Uses   |    5    |  3 - 15   |
| Hex Bomb Countdown Duration | The countdown for Hex Bomb.                       | Seconds |  120x   | 30 - 180s |
