---
title: Game Timer
description: Settings for the End Game Timer.
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/TimeLord.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Game Timer Settings

## Game Timer

Settings for the End Game Timer, which has a countdown for the duration of the game.

| Option                    |                                                 Description                                                  |  Type  |  Default   |          Range           |
| ------------------------- | :----------------------------------------------------------------------------------------------------------: | :----: | :--------: | :----------------------: |
| Game Timer                |                             Determines whether a timer is enabled for the game.                              | Toggle |   False    |       True / False       |
| ┣ Pause Timer in Meetings | Determines how many meetings the timer will continue to count down through before pausing in future meetings. | Count  |     5      |          1 - 10          |
| ┣ On Timer End            |                                   Determines the outcome of the timer ending.                                    | String | Game Draw  | Game Draw / Impostor Win |
| ┗ Game Time Limit         |                                             The set timer limit.                                             | Count  | 15 Minutes |      1 - 30 Minutes      |

