---
title: "Telepath"
description: "Know when your teammate kills."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Telepath.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Telepath

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
     Know when your teammate kills!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Impostor Postmortem
    </div>

 <p>
You will be alerted whenever your teammate kills, guesses, or dies!

</p>
  </div>
</div>

---

## Options

| Option                                  | Description                                                                        |  Type   | Default |  Range  |
| --------------------------------------- | ---------------------------------------------------------------------------------- | :-----: | :-----: | :-----: |
| Know Where Teammate Kills               | Determines if you know **where** your teammate **kills**.                          | Toggle  |  True   |   N/A   |
| When When Teammate Dies                 | Determines if you know **when** your teammate **dies**.                            | Toggle  |  True   |   N/A   |
| Know Where Teammate Dies                | Determines if you know **where** your teammate **dies**.                           | Toggle  |  True   |   N/A   |
| Dead Body Arrow Duration                | Determines how long the Telepath arrows are visible.                                              | Seconds |  2.50s  | 0s - 5s |
| Know When Teammate Guesses Successfully | Determines if you know when your teammate guesses successfully during a meeting.   | Toggle  |  True   |   N/A   |
| Know When Teammate Fails To Guess       | Determines if you know when your teammate guesses unsuccessfully during a meeting. | Toggle  |  True   |   N/A   |
