---
title: Better Maps
description: Settings for map mechanics.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/OtherButtons/AdminButton.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Better Maps

## Random Map Choice

| Option                 |                       Description                        |  Type  | Default |    Range     |
| ---------------------- | :------------------------------------------------------: | :----: | :-----: | :----------: |
| Enable Randomized Maps | Determines whether maps rotate at random each game. | Toggle |  False  | True / False |

---

## Global Better Maps

| Option                            |                                           Description                                            |    Type    |      Default      |                         Range                         |
| --------------------------------- | :----------------------------------------------------------------------------------------------: | :--------: | :---------------: | :---------------------------------------------------: |
| Use Camouflage Comms              |                       Calling a Comms sabotage will turn all players grey.                       |   String   | Globally Disabled | Globally Disabled / Globally Enabled / Per Map Change |
| Change Speed Multiplier           |                Determines if the speed multipliers are enabled/disabled or map-specific.                 |   String   |  Per Map Change   | Per Map Change / Globally Disabled / Globally Enabled |
| Change Crew Vision Multiplier     |           Determines if the Crewmate Vision multipliers are enabled/disabled or map-specific.            |   String   |  Per Map Change   | Per Map Change / Globally Disabled / Globally Enabled |
| Change Impostor Vision Multiplier |           Determines if the Impostor Vision multipliers are enabled/disabled or map-specific.            |   String   |  Per Map Change   | Per Map Change / Globally Disabled / Globally Enabled |
| Change Cooldown Offset            |                 Determines if the Cooldown changes are enabled/disabled or map-specific.                 |   String   |  Per Map Change   | Per Map Change / Globally Disabled / Globally Enabled |
| Change Short Tasks Offset         |            Determines if the change to short tasks count is enabled/disabled or map-specific.            |   String   |  Per Map Change   | Per Map Change / Globally Disabled / Globally Enabled |
| Change Long Tasks Offset          |            Determines if the change to long tasks count is enabled/disabled or map-specific.             |   String   |  Per Map Change   | Per Map Change / Globally Disabled / Globally Enabled |
| Speed Multiplier                  | Determines how much player Speed is increased (if higher than 1x) or reduced (if lower than 1x). | Multiplier |       1.00x       |                     0.25 - 1.50x                      |

---

## Randomized Door Mode

| Option               |                              Description                              |    Type    | Default |  Range   |
| -------------------- | :-------------------------------------------------------------------: | :--------: | :-----: | :------: |
| No Doors Chance      | The chance that the map will have no doors (removes door sabotage). | Percentage |   5%    | 0 - 100% |
| Skeld Doors Chance   |         The chance that the map will have Skeld-style doors.          | Percentage |   20%   | 0 - 100% |
| Polus Doors Chance   |         The chance that the map will have Polus-style doors.          | Percentage |   40%   | 0 - 100% |
| Airship Doors Chance |        The chance that the map will have Airship-style doors.         | Percentage |   15%   | 0 - 100% |
| Fungle Doors Chance  |         The chance that the map will have Fungle-style doors.         | Percentage |   20%   | 0 - 100% |
