---
title: "Deadly Quota"
description: "Meet your quota or lose."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/DeadlyQuota.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Deadly Quota

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
     Meet your quota or lose!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Impostor Passive
    </div>

 <p>
You must meet your kill quota or lose the game, even if the Impostors win.
</p>
  </div>
</div>

---

## Options

| Option                              |                                      Description                                      |  Type  | Default |    Range     |
| ----------------------------------- | :-----------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Minimum Kill Quota                  |                The minimum number of kills required to meet the quota.                | Count  |    2    |    1 - 5     |
| Maximum Kill Quota                  |                         The maximum number of kills required.                         | Count  |    4    |    1 - 5     |
| Meeting Kills Count Towards Quota   | Determines if correct guesses during a meeting will count towards the required quota. | Toggle |  True   | True / False |
| Temporary Shield Until Quota Is Met |  Determines if the player will have a temporary shield until they meet their quota.   | Toggle |  False  | True / False |
| Remove Quota Upon Death             |                    Removes the required quota if the player dies.                     | Toggle |  True   | True / False |
