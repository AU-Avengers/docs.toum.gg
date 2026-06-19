---
title: Diseased
description: Extend your killer's cooldown upon death!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Diseased.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Diseased

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
      Extend your killer's cooldown upon death!
    </div>

   <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Postmortem<br />
    </div>

 <p>
If killed, you force your killer's cooldown to be multiplied by a specified factor.
</p>
  </div>
</div>

---

## Options

| Option              |                   Description                    |    Type    | Default |   Range   |
| ------------------- | :----------------------------------------------: | :--------: | :-----: | :-------: |
| Cooldown Multiplier | The multiplier applied to the killer's cooldown. | Multiplier |   3x    | 1.5x - 5x |
