---
title: Investigator
description: See everyone's footprints!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Investigator.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Investigator

<div className="role-header">
   <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/InvestigatorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      See everyone's footprints!
    </div>

    <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Utility<br />
    </div>

 <p>
The **Investigator** can see the footprints of other players during each round, helping them investigate whereabouts and alibis.

**Note:** Swooper footprints are concealed!

</p>
  </div>
</div>
---

| Option                             |                             Description                              |    Type    | Default  |      Range      |
| ---------------------------------- | :------------------------------------------------------------------: | :--------: | :------: | :-------------: |
| Footprint Added Based On           |           Changes how the footprint interval is measured.            |   String   | Distance | Distance / Time |
| ┗ Footprint Interval: **Distance** |              Changes how often footprints are created.               | Multiplier |   0.5    |     0.5 - 3     |
| ┗ Footprint Interval: **Time**     |              Changes how often footprints are created.               |  Seconds   |    1s    |    0.5s - 6s    |
| Footprint Size                     |                   Changes how big footprints are.                    | Multiplier |    4x    |    1x - 10x     |
| Footprint Duration                 |             Changes how long footprints are visible for.             |  Seconds   |   10s    |    1s - 15s     |
| Anonymous Footprints               |    Determines if footprints are color-coded based on the player.    |   Toggle   |  False   |  True / False   |
| Show Vent Footprints               | Determines if footprints are visible from a player that's in a vent. |   Toggle   |  False   |  True / False   |
