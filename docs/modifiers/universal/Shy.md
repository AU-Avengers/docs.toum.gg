---
title: "Shy"
description: "Blend in with the environment!"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Shy.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Shy

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
   Blend in with the environment!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Universal Visibility
    </div>

 <p>
 When standing still, you become transparent.
</p>
  </div>
</div>

---

## Options

| Option                     | Description                                                |  Type   | Default |  Range   |
| -------------------------- | ---------------------------------------------------------- | :-----: | :-----: | :------: |
| Transparency Delay         | How long it takes to start becoming transparent.             | Seconds |   5s    | 1s - 15s |
| Turn Transparency Duration | How long it takes to go from fully visible to transpacent. | Seconds |   5s    | 1s - 15s |
| Final Opacity              | The final transparency value for when Shy stays still.     | Percent |   20%   | 0% - 80% |
