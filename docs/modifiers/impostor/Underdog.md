---
title: "Underdog"
description: "Kill faster as a solo Impostor."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Underdog.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Underdog

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
     Kill faster as a solo Impostor!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Impostor Postmortem
    </div>

 <p>
If your teammate dies or you are a solo Impostor, your cooldown is reduced, allowing you to kill faster.

</p>
  </div>
</div>

---

## Options

| Option                               | Description                                                                         |  Type   | Default |   Range    |
| ------------------------------------ | ----------------------------------------------------------------------------------- | :-----: | :-----: | :--------: |
| Kill Cooldown Bonus                  | The amount of time trimmed off your kill cooldown.                                  | Seconds |   5.0s    | 2.5s - 10s |
| Increased Kill Cooldown When 2+ Imps | Determines if your kill cooldown is increased if there are multiple impostors alive. | Toggle  |  false  |    N/A     |
