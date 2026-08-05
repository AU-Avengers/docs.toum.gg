---
title: Scavenger
description: Hunt down your prey!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Scavenger.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Scavenger

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Hunt Down Your Prey!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Killing <br />
    </div>

<p>
      
The **Scavenger** must kill their targets (this will be the closest player to the Scavenger when their target resets). If they kill their target, they get a reduced kill cooldown, but if they don't, their cooldown is increased significantly.
</p>

  </div>
</div>

---

## Options

| Option                                     |                             Description                              |    Type    | Default |   Range    |
| ------------------------------------------ | :------------------------------------------------------------------: | :--------: | :-----: | :--------: |
| Scavenge Duration                          |                    How long Scavenging lasts for.                    |  Seconds   |   25s   | 10s - 60s  |
| Scavenge Duration Increase Per Kill        |              The increased Scavenge duration per kill.               |  Seconds   |   10s   |  5s - 15s  |
| Scavenge Kill Cooldown On Correct Kill     |            The Kill Cooldown given after a correct kill.             |  Seconds   |   10s   |  5s - 15s  |
| Kill Cooldown Multiplier On Incorrect Kill | The multiplier applied to the Kill Cooldown after an incorrect kill. | Multiplier |   3x    | 1.25x - 5x |
