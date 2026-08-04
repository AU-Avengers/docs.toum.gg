---
title: "Overclocker"
description: "Decrease your cooldowns temporarily!"
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Overclocker.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Overclocker

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
     Decrease your cooldowns temporarily!
    </div>

  <div className="role-alignment">
    <strong>&#8226; Alignment:</strong> Assailant Utility
    </div>

 <p>
You may decrease your cooldowns at the cost of longer cooldowns once your Overclock is over. After an additional round, your cooldowns will normalize.

</p>
  </div>
</div>

---

### Options

| Option                         |                                                                 Description                                                                  |    Type    | Default |    Range     |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :-----: | :----------: |
| Overclock Cooldown             |                                              The cooldown between using the Overclock ability.                                               |  Seconds   |   5s    |   5 - 120s   |
| Overclock Duration             |                                              How long the Overclock ability lasts when active.                                               |  Seconds   |   50s   |  20 - 120s   |
| Allow Overclock in First Round |                                        Whether the Overclock ability can be used in the first round.                                         |   Toggle   |  False  | True / False |
| Overclock Uses                 |                                              How many times the Overclock ability can be used.                                               |   Count    |    2    |    1 - 5     |
| Overclock Cooldown Multiplier  |                           The cooldown multiplier applied to all buttons when the Overclock ability is activated.                            | Multiplier |   2x    |   1.1 - 3x   |
| Underclock Cooldown Multiplier | The multiplier applied when you become Underclocked; the effect is applied once your Overclock use is complete and carries into the next round. | Multiplier |  0.5x   |  0.2 - 0.9x  |
