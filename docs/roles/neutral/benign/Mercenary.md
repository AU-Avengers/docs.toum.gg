---
title: Mercenary
description: Bribe the Crewmates!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Mercenary.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Mercenary

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Bribe the Crewmates!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral <br />
    </div>

<p>
      The **Mercenary** can only win by bribing players, allowing them to gain multiple win conditions.

</p>
<p>
      The Mercenary must **__guard__** a player and wait for them to be interacted with, which will give the Mercenary gold to **__bribe__** players with. If a bribed player wins, the Mercenary will win with them.

</p>

  </div>
</div>

:::note[Tip]

Aim to **_bribe_** as many factions as you can to have a higher chance of being on a winning team.

:::

---

## Abilities

| Button                                                                                        | Ability   |                         Description                          |        Type        |
| --------------------------------------------------------------------------------------------- | --------- | :----------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/GuardButton.png')} alt="Button" style={{width: 50}} /> | **Guard** |  Guard a player, earning gold if they are interacted with.   | Player Interaction |
| <img src={useBaseUrl('/img/NeutButtons/BribeButton.png')} alt="Button" style={{width: 50}} /> | **Bribe** | Bribe a player, winning alongside them if they win the game. | Player Interaction |

## Options

| Option                      | Description                                                        |  Type   | Default |    Range     |
| --------------------------- | ------------------------------------------------------------------ | :-----: | :-----: | :----------: |
| Guard Cooldown              | Cooldown for using the Guard ability.                              | Seconds |   25s   |   10 - 60s   |
| Max Number of Guards        | The maximum number of Guard uses.                                  |  Count  |    6    |    1 -15     |
| Bribe Cost                  | How many Golds are required per Bribe.                             |  Count  |    2    |    1 -15     |
| Guarding Stops Attacks      | Determines whether Guarding a player will stop attacks.            | Toggle  |  True   | True / False |
| ┗ Gold Given From An Attack | Determines how much gold is earned if a bribed player is attacked. |  Count  |    2    |    0 - 3     |
