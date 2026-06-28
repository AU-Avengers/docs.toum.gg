---
title: Bait
description: Force your killer to report your body!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Bait.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Bait

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
      Force your killer to report your body!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Postmortem
    </div>

 <p>
 If killed, you force your killer to automatically self-report.
</p>
  </div>
</div>

---

## Options

| Option    |                         Description                          |  Type   | Default |  Range   |
| --------- | :----------------------------------------------------------: | :-----: | :-----: | :------: |
| Min Delay | Minimum amount of time where bait will automatically report. | Seconds |   0s    | 0s - 15s |
| Max Delay | Maximum amount of time where bait will automatically report. | Seconds |   1s    | 0s - 15s |
