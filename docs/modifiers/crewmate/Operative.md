---
title: Operative
description: Use security systems on-the-go.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Operative.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Operative

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
     Use security systems on-the-go!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Utility<br />
    </div>

 <p>
Use cameras at any time, anywhere, with a limited battery charge.
</p>
  </div>
</div>

---

## Options

| Option                        |                                 Description                                 |  Type   | Default |  Range   |
| ----------------------------- | :-------------------------------------------------------------------------: | :-----: | :-----: | :------: |
| Move While Using Mira Doorlog |      Determines if you can move around while the Mira Doorlog is open.      | Toggle  |  True   |   N/A    |
| Starting Charge               |                  Amount of charge given right off the bat.                  | Seconds |   20s   | 0s - 30s |
| Battery Charged Each Round    |                 Amount of charge given after every meeting.                 | Seconds |   10s   | 0s - 30s |
| Battery Charged Per Task      |              Amount of charge given after a task is completed.              | Seconds |  7.5s   | 0s - 30s |
| Security Display Cooldown     |                      Cooldown for the Security Button.                      | Seconds |   15s   | 0s - 30s |
| Max Security Display Duration | Maximum duration for the Security Button, given that there's enough charge. | Seconds |   15s   | ∞ - 30s  |
