---
title: Game Mechanics
description: Settings for game mechanics.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Engineer.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Game Mechanics

Settings for game mechanics.

| Option                               |                                                Description                                                 |  Type  |    Default    |                      Range                      |
| ------------------------------------ | :--------------------------------------------------------------------------------------------------------: | :----: | :-----------: | :---------------------------------------------: |
| Powerful Crew Continue the Game      |                      Determines if Crew Powers roles will continue the game in a 1v1.                      | Toggle |     True      |                  True / False                   |
| All Shields Flash Grey On Trigger    |                    If a shielded player is attacked, the indication flash will be grey.                    | Toggle |     False     |                  True / False                   |
| Cleaned/Dissolved Bodies Appear As   |                              Determines how cleaned bodies appear on vitals.                               | String | Missing (MIS) | Missing (MIS) / Dead (DED) / Disconnected (D/C) |
| Kill Animation Background Color      |                           Determines the background type during kill animations.                           | String |      Red      |           Red / Faction / Role Color            |
| Max Players Alive When Vents Disable | Determines how many players must be alive when vents become disabled. 2 is the default for 1v1 situations. | Count  |       2       |                     1 - 15                      |
| Ghostwalkers Can Fix Sabotages       |                  Determines whether the Haunter and/or Phantom is able to fix sabotages.                   | Toggle |     False     |                  True / False                   |
| Temp Save Cooldown Reset             |                      How much a cooldown is reset by if attacking a protected player.                      | Count  |      5s       |                     0 - 15s                     |
