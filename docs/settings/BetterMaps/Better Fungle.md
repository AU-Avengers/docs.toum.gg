---
title: "Better Fungle"
description: "Settings for Fungle map adjustments."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/CrewButtons/FixButton.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Better Fungle

Settings for Fungle map adjustments.

| Option                            |                                       Description                                        |    Type    | Default |                              Range                               |
| --------------------------------- | :--------------------------------------------------------------------------------------: | :--------: | :-----: | :--------------------------------------------------------------: |
| Camouflage Comms                  |             If enabled, calling a Comms sabotage will turn all players grey.             |   Toggle   |  False  |                           True / False                           |
| Crew Vision Multiplier            | How much Crewmate Vision is increased (if higher than 1x) or reduced (if lower than 1x). | Multiplier |  1.00x  |                         0.25 **-** 1.50x                         |
| Change Impostor Vision Multiplier | How much Impostor Vision is increased (if higher than 1x) or reduced (if lower than 1x). | Multiplier |  1.00x  |                         0.25 **-** 1.50x                         |
| Change Cooldown Offset            |   How much Cooldowns are increased (if higher than 1x) or reduced (if lower than 1x).    |  Seconds   |  0.0s   |                         -2.5 **-** 0.0s                          |
| Change Short Tasks Offset         |     Determines if Short Tasks count will be increased or decreased, and by how much.     |   Count    |    0    |                            -5 **-** 5                            |
| Change Long Tasks Offset          |     Determines if Long Tasks count will be increased or decreased, and by how much.      |   Count    |    0    |                            -3 **-** 3                            |
| Door Type on Fungle               |                       Determines which type of doors are enabled.                        |   String   | Fungle  | Skeld / Polus / Airship / Fungle / Submerged / No Doors / Random |
| No Ladder Cooldown                |                  Determines if the cooldown to use ladders is removed.                   |   Toggle   |  True   |                           True / False                           |
| Change Sabotage Timers            |                    Determines if the Sabotage countdowns are changed.                    |   Toggle   |  True   |                           True / False                           |
| ┣ Reactor Sabotage Countdown      |              Determines how long the Reactor Sabotage countdown will last.               |  Seconds   |   60s   |                             15 - 90s                             |
| ┗ Mix-Up Sabotage Countdown       |          Determines how long the Mushroom Mix-Up Sabotage countdown will last.           |  Seconds   |   10s   |                             15 - 90s                             |
