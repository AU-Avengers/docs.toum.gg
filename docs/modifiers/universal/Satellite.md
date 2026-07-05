---
title: "Satellite"
description: "Broadcast a signal to know where dead bodies are!"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Satellite.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Satellite

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
   Broadcast a signal to know where dead bodies are!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Universal Utility
    </div>

 <p>
 You can broadcast a signal to know where dead bodies are, indicated by arrows. If no bodies are found on the map, you will be notified.
</p>
  </div>
</div>

---

## Abilities

| Button                                                                                             | Ability   |                                      Description                                      |     Type      |
| -------------------------------------------------------------------------------------------------- | --------- | :-----------------------------------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/OtherButtons/BroadcastButton.png')} alt="Button" style={{width: 50}} /> | Broadcast | You can check for bodies on the map, which you can do a set number of times per game. | Basic Ability |

## Options

| Option                     | Description                                              |  Type   | Default |    Range     |
| -------------------------- | -------------------------------------------------------- | :-----: | :-----: | :----------: |
| Button Cooldown            | The cooldown for broadcasting to dead bodies.            | Seconds |   30s   |  2.5s - 60s  |
| Max Uses                   | Changes how many times a broadcast can be done.          |  Uses   |    1    |    1 - 3     |
| One Useage Per Round       | Determines if a broadcast can only be done once a round. | Toggle  |  True   | True / False |
| Allow Usage in First Round | Determines if you can Broadcast during round one.        | Toggle  |  True   | True / False |
