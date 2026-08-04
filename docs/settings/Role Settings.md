---
title: Role Settings
description: Settings for game modes and role assignment.
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Traitor.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Role Settings

Settings for game modes and role assignment.

| Option                |                          Description                          |    Type    |  Default  |                   Range                    |
| --------------------- | :-----------------------------------------------------------: | :--------: | :-------: | :----------------------------------------: |
| Current Game Mode     |               Determines the active game mode.                |   String   |  Normal   |   Normal / Hide and Seek / Cultist (N/A)   |
| Role Assignment Type  |              Determines how roles are assigned.               |   String   | Role List | Role List / Min/Max List / Draft / Vanilla |
| Reduce Impostor Steak | Reduces the chance of being Impostor multiple times in a row. |   Toggle   |   True    |                True / False                |
| ┗ Reduction Chance    |          The percentage your chances are reduced by.          | Percentage |    15%    |                  0 - 100%                  |

---

## Role List

Roles are sorted into the following buckets when using Role Slots:

|        Bucket        |                               Roles Included                                |
| :------------------: | :-------------------------------------------------------------------------: |
|   **Common Crew**    |                 Investigative, Protective or Support Roles.                 |
| **Common Impostor**  |                        Concealing or Support Roles.                         |
|  **Common Neutral**  |                            Benign or Evil Roles.                            |
|   **Special Crew**   |                          Killing and Power Roles.                           |
| **Special Impostor** |                          Killing and Power Roles.                           |
| **Special Neutral**  |                         Killing and Outlier Roles.                          |
| **Wildcard Neutral** |                       Benign, Evil or Outlier Roles.                        |
|      **Random**      |           Any roles for the specified faction (e.g., Random Crew).           |
|       **Any**        | Any enabled role may spawn, with chances for multiple/varied killing roles. |

---

## Min / Max List

Using the Minimum - Maximum List allows you to determine how many of specific Neutral role types can spawn in each game. Other roles (Crew and Impostor) will be randomised based on which roles are enabled.

---

## Draft Mode

Settings for the Draft game mode.

| Option                      | Description                                                                                                                               |  Type   | Default |                Range                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------------------------------: |
| Draft Recap Displays        | How the recap is displayed at the end of the draft, showing either all selected roles, all factions, or all alignments, or nothing at all. | String  | Faction | Faction / Alignment / Role / Nothing |
| Draft Sidebar Displays      | The draft choices are displayed as a sidebar instead of a recap.                                                                          | String  | Faction | Faction / Alignment / Role / Nothing |
| Use Role List For Pool      | Determines whether the draft will use the set role list to create the roles pool.                                                             | Toggle  |  False  |             True / False             |
| Offered Role Picks Per Turn | How many role choices each player will get.                                                                                               |  Count  |    3    |                1 - 9                 |
| Show Random Role Pick       | Whether there will be a Random option when choosing roles.                                                                                | Toggle  |  True   |             True / False             |
| Turn Duration               | How long a player gets to choose their role.                                                                                              | Seconds |   10s   |               5 - 60s                |
| Concurrent Picks Per Turn   | Whether multiple players can choose their roles at the same time.                                                                         |  Count  |    1    |                1 - 2                 |
| Shuffles Per Player         | Whether players can choose to shuffle their draft choices for new ones.                                                                   |  Count  |    1    |                0 - 3                 |

---

## Role Settings

> <big> **Impostor Settings**</big>
>
> Settings for Impostor role spawns.

| Option               |                  Description                  | Type  | Default | Range |
| -------------------- | :-------------------------------------------: | :---: | :-----: | :---: |
| Max Impostors Total  |    How many Impostors can spawn in total.     | Count |    2    | 1 - 5 |
| Max Concealing Roles | How many Impostor Concealing roles can spawn. | Count |    2    | 0 - 5 |
| Max Killing Roles    |  How many Impostor Killing roles can spawn.   | Count |    2    | 0 - 5 |
| Max Power Roles      |   How many Impostor Power roles can spawn.    | Count |    2    | 0 - 5 |
| Max Support Roles    |  How many Impostor Support roles can spawn.   | Count |    2    | 0 - 5 |

> <big> **Neutral Settings**</big>
>
> Settings for Neutral role spawns.

| Option             |                Description                | Type  | Default | Range  |
| ------------------ | :---------------------------------------: | :---: | :-----: | :----: |
| Max Neutrals Total |   How many Neutrals can spawn in total.   | Count |    3    | 0 - 10 |
| Max Benign Roles   | How many Neutral Benign roles can spawn.  | Count |    0    | 0 - 10 |
| Max Evil Roles     |  How many Neutral Evil roles can spawn.   | Count |    1    | 0 - 10 |
| Max Killing Roles  | How many Neutral Killing roles can spawn. | Count |    1    | 0 - 10 |
| Max Outlier Roles  | How many Neutral Outlier roles can spawn. | Count |    0    | 0 - 10 |

> <big> **Crewmate Settings**</big>
>
> Settings for Crewmate role spawns.

| Option                  |                   Description                    | Type  | Default | Range  |
| ----------------------- | :----------------------------------------------: | :---: | :-----: | :----: |
| Max Investigative Roles | How many Crewmate Investigative roles can spawn. | Count |    5    | 0 - 15 |
| Max Killing Roles       |    How many Crewmate Killing roles can spawn.    | Count |    3    | 0 - 15 |
| Max Power Roles         |     How many Crewmate Power roles can spawn.     | Count |    2    | 0 - 10 |
| Max Proetective Roles   |  How many Crewmate Protective roles can spawn.   | Count |    2    | 0 - 15 |
| Max Support Roles       |    How many Crewmate Support roles can spawn.    | Count |    3    | 0 - 15 |
