---
title: Traitor
description: Betray the Crewmates!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Bomber.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Traitor

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Betray the Crewmates!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Power<br />
    </div>

<p>
      If all Impostors die, one Crewmate may become the **Traitor** after a meeting, depending on set conditions. The Traitor sets out to win the game for the fallen Impostors and kill off the Crew.

</p>
<p>
      Similar to the Imitator and Ambassador, the Traitor can **change roles** to become another Impostor role from a menu selection.
</p>

  </div>
</div>

:::danger[TIP]

Only Crewmates can become the Traitor, with the exception of the Mayor.

:::

---

### Abilities

|                                             Button                                             |     Ability     |                                                                          Description                                                                          |        Type         |
| :--------------------------------------------------------------------------------------------: | :-------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------: |
| <img src={useBaseUrl('/img/ImpButtons/TraitorSelect.png')} alt="Button" style={{width: 50}} /> | **Change Role** | The Traitor can change their role to one of the provided role cards, or gamble on the random. Once they select a role, they stay as that role until they die. | Basic Ability, Menu |

### Options

| Option                                         | Description                                                                              |  Type  |       Default       |                  Range                   |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- | :----: | :-----------------: | :--------------------------------------: |
| Minimum People Alive When Traitor Can Spawn    | Minimum number of players that must be alive before Traitor can spawn.                   | Amount |          5          |                  3 - 15                  |
| Traitor Won't Spawn if Neutral Killer is Alive | Determines if a Neutral Killer's existence prevents the Traitor from spawning.           | Toggle |        False        |               True / False               |
| Disable Existing Impostor Roles                | Determines if the roles from the previous Impostors aren't possible for Traitor to pick. | Toggle |        False        |               True / False               |
| Traitor Must Be Guessed As                     | Determines what role the Traitor can be guessed as.                                      | String | Traitor or New Role | Traitor / New Role / Traitor or New Role |
| Traitor Becomes Assassin                       | Determines whether the Traitor has the Assassin ability.                                 | Toggle |        True         |               True / False               |
