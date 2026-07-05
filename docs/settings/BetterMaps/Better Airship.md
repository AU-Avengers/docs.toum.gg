---
title: "Better Airship"
description: "Settings for Airship map adjustments."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/CrewButtons/FixButton.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Better Airship

Settings for Airship map adjustments.

| Option                            |                                       Description                                        |    Type    |  Default  |                                           Range                                           |
| --------------------------------- | :--------------------------------------------------------------------------------------: | :--------: | :-------: | :---------------------------------------------------------------------------------------: |
| Camouflage Comms                  |             If enabled, calling a Comms sabotage will turn all players grey.             |   Toggle   |   True    |                                       True / False                                        |
| Crew Vision Multiplier            | How much Crewmate Vision is increased (if higher than 1x) or reduced (if lower than 1x). | Multiplier |   1.00x   |                                     0.25 **-** 1.50x                                      |
| Change Impostor Vision Multiplier | How much Impostor Vision is increased (if higher than 1x) or reduced (if lower than 1x). | Multiplier |   1.00x   |                                     0.25 **-** 1.50x                                      |
| Change Cooldown Offset            |   How much Cooldowns are increased (if higher than 1x) or reduced (if lower than 1x).    |  Seconds   |   0.0s    |                                      -2.5 **-** 0.0s                                      |
| Change Short Tasks Offset         |     Determines if Short Tasks count will be increased or decreased, and by how much.      |   Count    |     0     |                                        -5 **-** 5                                         |
| Change Long Tasks Offset          |     Determines if Long Tasks count will be increased or decreased, and by how much.      |   Count    |     0     |                                        -3 **-** 3                                         |
| Door Type on Airship              |                       Determines which type of doors are enabled.                        |   String   |  Airship  | Skeld / Polus / Airship / Fungle / Submerged / No Doors (removes door sabotages) / Random |
| Spawn Mode                        |              Determines how players will spawn at the start of each round.               |   String   |  Normal   |                 Normal / Everyone Has Same Spawns / Forced Spawn Location                 |
| ┗ Spawn At                        |       Determines where players will spawn if **Forced Spawn Location** is enabled.       |   String   | Main Hall |              Main Hall / Kitchen / Cargo Bay / Engine Room / Brig / Records               |
| No Ladder Cooldown                |                  Determines if the cooldown to use ladders is removed.                   |   Toggle   |   True    |                                       True / False                                        |
| Change Sabotage Timers            |                    Determines if the Sabotage countdowns are changed.                    |   Toggle   |   True    |                                       True / False                                        |
| ┗ Crash Course Sabotage Countdown |            Determines how long the Crash Course Sabotage countdown will last.            |  Seconds   |    90s    |                                         15 - 90s                                          |
