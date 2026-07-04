---
title: Better Mira HQ
description: Settings for Mira HQ map adjustments.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/CrewButtons/FixButton.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Better Mira HQ

Settings for Mira HQ map adjustments.

| Option                            |                                       Description                                        |    Type    |    Default     |                                           Range                                           |
| --------------------------------- | :--------------------------------------------------------------------------------------: | :--------: | :------------: | :---------------------------------------------------------------------------------------: |
| Camouflage Comms                  |             If enabled, calling a Comms sabotage will turn all players grey.             |   Toggle   |      True      |                                       True / False                                        |
| Crew Vision Multiplier            | How much Crewmate Vision is increased (if higher than 1x) or reduced (if lower than 1x). | Multiplier |     1.00x      |                                     0.25 **-** 1.50x                                      |
| Change Impostor Vision Multiplier | How much Impostor Vision is increased (if higher than 1x) or reduced (if lower than 1x). | Multiplier |     1.00x      |                                     0.25 **-** 1.50x                                      |
| Change Cooldown Offset            |   How much Cooldowns are increased (if higher than 1x) or reduced (if lower than 1x).    |  Seconds   |      0.0s      |                                      -2.5 **-** 0.0s                                      |
| Change Short Tasks Offset         |     Determines if Short Tasks count will be increased or decreased, and by how much.      |   Count    |       0        |                                        -5 **-** 5                                         |
| Change Long Tasks Offset          |     Determines if Long Tasks count will be increased or decreased, and by how much.      |   Count    |       0        |                                        -3 **-** 3                                         |
| Door Type on Skeld                |                       Determines which type of doors are enabled.                        |   String   |    Mira HQ     | Skeld / Polus / Airship / Fungle / Submerged / No Doors (removes door sabotages) / Random |
| Mira HQ Vent Network              |                   Determines the pathing of the existing vent network.                   |   String   | Interconnected |                          Interconnected / Tri-Group / Quad-Group                          |
| Themed Map Decor                  |                      Determines which decor is applied to the map.                       |   String   |   Automatic    |                             Automatic / No Decor / Halloween                              |
| Change Sabotage Timers            |                    Determines if the Sabotage countdowns are changed.                    |   Toggle   |      True      |                                       True / False                                        |
| ┣ Oxygen Sabotage Countdown       |                 Determines how long the O2 Sabotage countdown will last.                 |  Seconds   |      45s       |                                         15 - 90s                                          |
| ┗ Reactor Sabotage Countdown      |              Determines how long the Reactor Sabotage countdown will last.               |  Seconds   |      45s       |                                         15 - 90s                                          |
