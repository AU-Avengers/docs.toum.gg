import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Engineer.png')} alt="Icon" align="left" style={{height: 60}} />

# Role Settings

#### Settings for game modes and role assignments.

| Option                |                          Description                          |    Type    |  Default  |                 Range                  |
| --------------------- | :-----------------------------------------------------------: | :--------: | :-------: | :------------------------------------: |
| Current Game Mode     |               Determines the active game mode.                |   String   |  Normal   | Normal / Hide and Seek / Cultist (N/A) |
| Role Assignment Type  |              Determines how roles are assigned.               |   String   | Role List |   Role List / Min/Max List / Vanilla   |
| Reduce Impostor Steak | Reduces the chance of being Impostor multiple times in a row. | Percentage |    15%    |                0 - 100%                |
| ┗ Reduction Chance    |          The percentage by which your chances are reduced.          | Percentage |    15%    |                0 - 100%                |

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

## Min / Max List

Using the Minimum - Maximum List allows you to determine how many of specific Neutral role types can spawn each game. Other roles (Crew and Impostor) will be randomised based on what roles are enabled.
