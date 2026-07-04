---
title: Better Polus
description: Settings for Polus map adjustments.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/CrewButtons/FixButton.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Better Polus

Settings for Polus map adjustments.

| Option                                  |                                                       Description                                                       |    Type    |  Default  |                                           Range                                           |
| --------------------------------------- | :---------------------------------------------------------------------------------------------------------------------: | :--------: | :-------: | :---------------------------------------------------------------------------------------: |
| Camouflage Comms                        |                            If enabled, calling a Comms sabotage will turn all players grey.                             |   Toggle   |   True    |                                       True / False                                        |
| Crew Vision Multiplier                  |                How much Crewmate Vision is increased (if higher than 1x) or reduced (if lower than 1x).                 | Multiplier |   1.00x   |                                     0.25 **-** 1.50x                                      |
| Change Impostor Vision Multiplier       |                How much Impostor Vision is increased (if higher than 1x) or reduced (if lower than 1x).                 | Multiplier |   1.00x   |                                     0.25 **-** 1.50x                                      |
| Change Cooldown Offset                  |                   How much Cooldowns are increased (if higher than 1x) or reduced (if lower than 1x).                   |  Seconds   |   0.0s    |                                      -2.5 **-** 0.0s                                      |
| Change Short Tasks Offset               |                     Determines if Short Tasks count will be increased or decreased, and by how much.                     |   Count    |     0     |                                        -5 **-** 5                                         |
| Change Long Tasks Offset                |                     Determines if Long Tasks count will be increased or decreased, and by how much.                     |   Count    |     0     |                                        -3 **-** 3                                         |
| Door Type on Polus                      |                                       Determines which type of doors are enabled.                                       |   String   |   Polus   | Skeld / Polus / Airship / Fungle / Submerged / No Doors (removes door sabotages) / Random |
| Adjusted Polus Vent Network             |                            Determines if the existing vent network is changed.                             |   Toggle   |   False   |                                       True / False                                        |
| Vitals Moved To Lab                     |                                   Determines if Vitals are moved from Office to Lab.                                    |   Toggle   |   True    |                                       True / False                                        |
| Cold Temp Moved To Death Valley         | Determines if the Cold Temperature task is moved from Lab to Death Valley (outside between the Comms and O2 buildings). |   Toggle   |   True    |                                       True / False                                        |
| Reboot Wifi and Chart Course Swapped    |             Determines if the Reboot Wifi and Chart Course task locations are swapped (Comms and Dropship).             |   Toggle   |   True    |                                       True / False                                        |
| Move Bathroom Vent Outside the Stalls   |                      Determines if the vent inside the Lab bathroom is moved away from the stalls.                      |   Toggle   |   True    |                                       True / False                                        |
| Themed Map Decor                        |                                      Determines which decor is applied to the map.                                      |   String   | Automatic |                             Automatic / No Decor / Halloween                              |
| Change Sabotage Timers                  |                                   Determines if the Sabotage countdowns are changed.                                    |   Toggle   |   True    |                                       True / False                                        |
| ┗ Seismic Stabilizer Sabotage Countdown |                        Determines how long the Seismic Stabilizer Sabotage countdown will last.                         |  Seconds   |    60s    |                                         15 - 90s                                          |
