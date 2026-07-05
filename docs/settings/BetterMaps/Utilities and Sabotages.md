---
title: "Utilities and Sabotages"
description: "Settings for utilities and sabotage adjustments."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/CrewButtons/FixButton.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Advanced Utilities & Sabotages

## Advanced Utilities

| Option                              |                                                  Description                                                   |  Type  | Default |    Range     |
| ----------------------------------- | :------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Tasks Required to Use Admin Table   |                               How many tasks are needed to use the Admin table.                                | Count  |    1    |    0 - 15    |
| Tasks Required to Use Cams          |                             How many tasks are needed to use the security cameras.                             | Count  |    2    |    0 - 15    |
| Tasks Required to Use Doorlog       |                                 How many tasks are needed to use the Doorlog.                                  | Count  |    0    |    0 - 15    |
| Tasks Required to Use Vitals        |                                  How many tasks are needed to use the Vitals.                                  | Count  |    3    |    0 - 15    |
| Tasks Are Checked on Portable Utils | Determines whether portable utilities (Admin, Cams, Vitals) will check for the required task count before use. | Toggle |  True   | True / False |

---

## Advanced Sabotages

| Option                               |                                                 Description                                                  |  Type  | Default |    Range     |
| ------------------------------------ | :----------------------------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Kill Anyone During Camouflage        |   Determines if Killers can kill anybody, including their own teammates, during Camouflage Comms sabotage.   | Toggle |  True   | True / False |
| Camouflage Kill Screens During Comms |      Determines if kill screens will show the killer as camouflaged during Camouflage Comms sabotages.       | Toggle |  True   | True / False |
| Camouflage Hides Player Size         |  Determines if all players become the same size during Camouflage Comms sabotage, ignoring size modifiers.   | Toggle |  True   | True / False |
| Camouflage Hides Player Speed        | Determines if all players become the same speed during Camouflage Comms sabotages, ignoring speed modifiers. | Toggle |  True   | True / False |
