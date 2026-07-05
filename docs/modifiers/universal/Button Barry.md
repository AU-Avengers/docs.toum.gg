---
title: "Button Barry"
description: "Call a meeting from anywhere."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/ButtonBarry.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Button Barry

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
     Call a meeting from anywhere!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Universal Utility
    </div>

 <p>
You can use your ability to call an Emergency Meeting from anywhere on the map.

</p>
  </div>
</div>

---

## Abilities

| Button                                                                                         | Ability |                     Description                     |     Type      |
| ---------------------------------------------------------------------------------------------- | ------- | :-------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/OtherButtons/BarryButton.png')} alt="Button" style={{width: 50}} /> | Button  | Call an emergency meeting from anywhere on the map. | Basic Ability |

## Options

| Option                     | Description                                                            |  Type   | Default |    Range     |
| -------------------------- | ---------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Button Cooldown            | The cooldown for calling a meeting.                                    | Seconds |   30s   |  2.5s - 60s  |
| Max Uses                   | Changes how many times a meeting can be called from anywhere.          |  Uses   |    1    |    1 - 3     |
| Ignore Sabotage            | Determines if sabotages are ignored when attempting to call a meeting. | Toggle  |  True   | True / False |
| Allow Usage in First Round | Determines if you can use Button Barry during round one.               | Toggle  |  False  | True / False |
