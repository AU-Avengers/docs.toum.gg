---
title: Role Settings
description: Settings for game modes and role assignment.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Traitor.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Role Settings

Settings for game modes and role assignment.

| Option                |                          Description                          |    Type    |  Default  |                 Range                  |
| --------------------- | :-----------------------------------------------------------: | :--------: | :-------: | :------------------------------------: |
| Current Game Mode     |               Determines the active game mode.                |   String   |  Normal   | Normal / Hide and Seek / Cultist (N/A) |
| Role Assignment Type  |              Determines how roles are assigned.               |   String   | Role List |   Role List / Min/Max List / Vanilla   |
| Reduce Impostor Steak | Reduces the chance of being Impostor multiple times in a row. |   Toggle   |   True    |              True / False              |
| ┗ Reduction Chance    |          The percentage your chances are reduced by.          | Percentage |    15%    |                0 - 100%                |

---

## Role List

Roles are sorted into the following buckets when using Role Slots:

| Bucket               |                               Roles Included                                |
| -------------------- | :-------------------------------------------------------------------------: |
| **Common Crew**      |                 Investigative, Protective or Support Roles.                 |
| **Common Impostor**  |                        Concealing or Support Roles.                         |
| **Common Neutral**   |                            Benign or Evil Roles.                            |
| **Special Crew**     |                          Killing and Power Roles.                           |
| **Special Impostor** |                          Killing and Power Roles.                           |
| **Special Neutral**  |                         Killing and Outlier Roles.                          |
| **Wildcard Neutral** |                       Benign, Evil or Outlier Roles.                        |
| **Random**           |           Any roles for the specified faction (e.g. Random Crew).           |
| **Any**              | Any enabled role may spawn, with chances for multiple/varied killing roles. |

---

## Min / Max List

Using the Minimum - Maximum List allows you to determine how many of specific Neutral role types can spawn in each game. Other roles (Crew and Impostor) will be randomised based on what roles are enabled.
