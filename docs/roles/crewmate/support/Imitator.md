---
title: Imitator
description: Use dead roles to benefit the Crew!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Imitator.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Imitator

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Use Dead Roles To Benefit The Crew!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Support<br />
    </div>

<p>The **Imitator** can use the roles of dead players. During meetings, the Imitator can select a dead player and will **imitate** the target's role and abilities in the next round.</p>
<p>All Crewmate roles are able to be imitated, except for Politician and Mayor. Roles like Jailor, Prosecutor and Swapper cannot use their meeting abilities, and Vigilante will not get safe shots.</p>

  </div>
</div>

:::important[Strategy Guide]

Pay close attention to potential role claims that may be useful later in the game. Imitating powerful roles is a great opportunity to help save the Crew!
:::

<sub>**Note:** Certain roles are inaccessible if there are multiple living Imitators.</sub>

---

## Abilities

|                                              Button                                              |   Ability   |            Description            |           Type           |
| :----------------------------------------------------------------------------------------------: | :---------: | :-------------------------------: | :----------------------: |
| <img src={useBaseUrl('/img/OtherButtons/ImitateSelect.png')} alt="Button" style={{width: 50}} /> | **Imitate** | Selects a dead player to Imitate. | Targeted Meeting Ability |

## Options

| Option                        |                                                    Description                                                     |  Type  |          Default          |                        Range                         |
| ----------------------------- | :----------------------------------------------------------------------------------------------------------------: | :----: | :-----------------------: | :--------------------------------------------------: |
| Imitate Neutral Counterparts  | Determines whether the Imitator can also imitate dead Neutral roles, taking on a Crew role with similar abilities. | Toggle |           True            |                     True / False                     |
| Imitate Impostor Counterparts |   Determines whether the Imitator can also imitate dead Impostors, taking on a Crew role with similar abilities.   | Toggle |           True            |                      True False                      |
| Imitate Basic Crewmate        |                        Determines whether the Imitator can imitate the basic Crewmate role.                        | Toggle |           True            |                     True / False                     |
| Imitator Must Be Guessed As   |                    Determines which role or roles the Imitator can be guessed as by Assassins.                     | String | Imitator or Imitated Role | Imitator / Imitated Role / Imitator or Imitated Role |

---

### Imitated Counterparts

| Neutral Role | Imitated Counterpart |     | Impostor Role | Imitated Counterpart |
| :----------: | :------------------: | :-: | :-----------: | :------------------: |
|   Amnesiac   |        Mystic        |     |  Ambassador   |      Vigilante       |
|   Arsonist   |        Cleric        |     |   Ambusher    |        Sonar         |
|     Chef     |       Forensic       |     |  Blackmailer  |         Spy          |
|  Doomsayer   |      Vigilante       |     |    Bomber     |       Trapper        |
| Executioner  |        Snitch        |     |   Escapist    |     Transporter      |
|    Fairy     |     Mirrorcaster     |     |   Hypnotist   |       Lookout        |
|    Glitch    |       Lookout        |     |    Janitor    |       Forensic       |
|  Inquisitor  |       Sheriff        |     |     Miner     |       Plumber        |
|    Jester    |       Engineer       |     |   Scavenger   |     Investigator     |
|  Mercenary   |        Warden        |     | Spellslinger  |        Cleric        |
|  Pestilence  |       Veteran        |     |  Undertaker   |       Altruist       |
| Plaguebearer |        Aurial        |     |    Venerer    |        Hunter        |
|    Medusa    |        Medium        |     |    Warlock    |       Veteran        |
|   Vampire    |         Seer         |     |               |                      |
|   Werewolf   |        Hunter        |     |               |                      |
