---
title: "Rotting"
description: "Your body rots away upon death."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Rotting.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Rotting

<div className="role-header">
   <img
    className="role-banner"
    src="https://github.com/AU-Avengers/docs.toum.gg/blob/main/static/img/Modifiers/Rotting.png?raw=true"  />

  <div className="role-info">
    <div className="role-tagline">
     Your body rots away upon death.
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Postmortem<br />
    </div>

 <p>
 After a set amount of time, your body will rot away, preventing you from being reported.
</p>
  </div>
</div>

---

## Options

| Option                     |           Description           |  Type   | Default |  Range   |
| -------------------------- | :-----------------------------: | :-----: | :-----: | :------: |
| Time Before Body Rots Away | The time before a body rots away. | Seconds |   5s    | 0s - 25s |
