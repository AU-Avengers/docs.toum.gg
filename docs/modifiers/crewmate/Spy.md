---
title: Spy
description: Snoop around and find stuff out.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Spy.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Spy

<div className="role-header">
    <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/SpyBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
     Snoop around and find stuff out!
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Crewmate Utility
    </div>

 <p>
 The Spy gains extra information when using the Admin table, seeing the locations of all living players across the map, identified by their colours, making it easier to track and verify locations when giving alibis.
 
 The map will update whenever a player moves from one area to another, including through vent systems, as long as they are in a named location (they will not be visible outside or in hallways).
</p>
  </div>
</div>

---

## Abilities

| Button                                                                                         | Ability |                           Description                           | Type |
| ---------------------------------------------------------------------------------------------- | ------- | :-------------------------------------------------------------: | :--: |
| <img src={useBaseUrl('/img/OtherButtons/AdminButton.png')} alt="Button" style={{width: 50}} /> | Admin   | Opens up the Admin table for a set total duration between uses. | Menu |

## Options

| Option                     | Description                                                                       |  Type   | Default |                   Range                    |
| -------------------------- | --------------------------------------------------------------------------------- | :-----: | :-----: | :----------------------------------------: |
| Who Sees Bodies On Admin   | Determines who sees bodies on Admin.                                              | String  | Nobody  | Nobody / Spy / Everyone But Spy / Everyone |
| Portable Admin             | Changes if the Spy Role and/or/nor the Modifier has access to the Portable Admin. | String  |  Both   |      Role / Modifier / Both / Neither      |
| ┣ Move With Portable Admin | Determines if you can move around with Portable Admin open.                       | Toggle  |  True   |                True / False                |
| ┣ Starting Charge          | Amount of charge given right off the bat.                                         | Seconds |   20s   |                  0s - 30s                  |
| ┣ Round Charge             | Amount of charge given after every meeting.                                       | Seconds |   15s   |                  0s - 30s                  |
| ┣ Task Charge              | Amount of charge given after a task is completed.                                 | Seconds |   10s   |                  0s - 30s                  |
| ┣ Display Cooldown         | Cooldown for the Portable Admin Button.                                           | Seconds |   15s   |                  0s - 30s                  |
| ┗ Display Duration         | Maximum duration for the Portable Admin Button, given that there's enough charge. | Seconds |   15s   |                  ∞ - 30s                   |
