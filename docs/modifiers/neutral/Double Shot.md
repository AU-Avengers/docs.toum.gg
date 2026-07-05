---
title: "Double Shot"
description: "Get a second chance when guessing."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/DoubleShot.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Double Shot

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
     Get a second chance when guessing!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Neutral Assailant
    </div>

 <p>
If you make an incorrect guess on a player during a meeting, you get a second chance to live, but cannot guess that player again in the same meeting.

</p>
  </div>
</div>

---

### Options

| Option             |                          Description                           |    Type    | Default |  Range   |
| ------------------ | :------------------------------------------------------------: | :--------: | :-----: | :------: |
| Double Shot Amount | Determines how many players can have the Double Shot modifier. |   Count    |    1    |  0 - 5   |
| Double Shot Chance |     Determines the chance of Double Shot being a modifier.     | Percentage |   50%   | 0 - 100% |
