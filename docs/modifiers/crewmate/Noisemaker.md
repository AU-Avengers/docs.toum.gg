---
title: Noisemaker
description: Alert all players to your body upon death.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Noisemaker.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Noisemaker

<div className="role-header">

  <div className="role-info">
    <div className="role-tagline">
      Alert all players to your body upon death!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Postmortem<br />
    </div>

 <p>
If killed, you will show a red indicator and sound alert to everyone on the map.
</p>
  </div>
</div>

---

## Options

| Option            |                           Description                            |  Type   | Default |  Range   |
| ----------------- | :--------------------------------------------------------------: | :-----: | :-----: | :------: |
| Impostors Get Alert |          Determines if Impostors see the alert or not.           | Toggle  |  True   |   True / False    |
| Neutral Killers Get Alert  |       Determines if Neutral Killers see the alert or not.        | Toggle  |  True   |   True / False    |
| Comms Sabotage Prevents Aert    | Determines if Comms sabotage prevents the alert from triggering. | Toggle  |  False  |   N/A    |
| Only Triggers if a Body Exists        |    Determines if a body must exist for the alert to trigger.     | Toggle  |  True   |   True / False    |
| Alert Duration    |          Amount of time that the alert is visible for.           | Seconds |   5s    | 1s - 20s |
