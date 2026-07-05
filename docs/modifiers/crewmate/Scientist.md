---
title: "Scientist"
description: "Use vitals on-the-go."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Scientist.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Scientist

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
     Use vitals on-the-go!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Utility<br />
    </div>

 <p>
 You are able to access Vitals anytime, anywhere, with a limited battery charge.
</p>
  </div>
</div>

---

## Options

| Option           |                                Description                                |  Type   | Default |  Range   |
| ---------------- | :-----------------------------------------------------------------------: | :-----: | :-----: | :------: |
| Move With Vitals |            Determines if you can move around with vitals open.            | Toggle  |  True   |   N/A    |
| Starting Charge  |                 The amount of charge given initially.                 | Seconds |   20s   | 0s - 30s |
| Round Charge     |                The amount of charge given after every meeting.                | Seconds |   15s   | 0s - 30s |
| Task Charge      |             The amount of charge given after a task is completed.             | Seconds |   10s   | 0s - 30s |
| Display Cooldown |                      The cooldown for accessing Vitals.                      | Seconds |   15s   | 0s - 30s |
| Display Duration | The maximum duration for the Vitals Button, given that there's enough charge. | Seconds |   15s   | ∞ - 30s  |
