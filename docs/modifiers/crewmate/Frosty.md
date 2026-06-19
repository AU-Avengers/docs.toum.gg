---
title: Frosty
description: Slow down your killer upon death.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Frosty.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Frosty

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
      Slow down your killer upon death!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Postmortem<br />
    </div>

 <p>
If killed, you force your killer's movement to be temporarily slowed down.
</p>
  </div>
</div>
---
## Options

| Option            |                        Description                        |    Type    | Default |     Range     |
| ----------------- | :-------------------------------------------------------: | :--------: | :-----: | :-----------: |
| Chill Duration    |            How long the killer is chilled for.            |  Seconds   |   10s   |   0s - 15s    |
| Chill Start Speed | The speed multiplier applied to the killer while chilled. | Multiplier |  0.75x  | 0.25x - 0.95x |
