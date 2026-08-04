---
title: "Roleblock Mechanics"
description: "Settings for the roleblocking mechanics."
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Barkeeper.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Roleblock Mechanics

Settings for the role-blocking abilities.

| Option                             |                                                                       Description                                                                        |  Type   | Default |    Range     |
| ---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Roleblock Affects Non-Role Actions |                      Prevents roleblocked players from any interactive actions, including tasks, sabotages, or any other use buttons.                      | Toggle  |  False  | True / False |
| Roleblock Duration                 |                                                        How long the roleblock affects will last.                                                         | Seconds |   15s   |   5 - 30s    |
| Invert Controls Of Roleblock       |                                      Whether roleblocked players will have their controls inverted while affected.                                       | Toggle  |  True   | True / False |
| Grant Hangover                     | Once a roleblock effect is over, any attempt to roleblock the player will not take effect. This does not prevent Poison or Sickening from taking effect. | Toggle  |  True   | True / False |
| Hangover Duration                  |                                                         How long the Hangover effects will last.                                                         | Seconds |   30s   |  15 - 120s   |
