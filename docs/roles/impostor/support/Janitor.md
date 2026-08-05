---
title: Janitor
description: Clean Bodies to Hide Kills and Crime Scenes!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Janitor.png')} alt="Icon" align="left" style={{height: 60}} />

# Janitor

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Clean Bodies to Hide Kills and Crime Scenes!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Support <br />
    </div>

<p>
      The **Janitor** can **_clean_** dead bodies, making them disappear to clear evidence (besides the victim's pet, if any).
</p>
<p>
      If the clean delay is not 0 seconds, then the Janitor must stay next to the body while cleaning, otherwise a use is wasted (if there's a set limit).
</p>

  </div>
</div>

:::danger[TIP]

Try to avoid sticking with your Impostor partner at all times, otherwise you'll easily be suspected as the cleaning duo!

:::

---

## Abilities

|                                            Button                                            |  Ability  |                            Description                            |         Type          |
| :------------------------------------------------------------------------------------------: | :-------: | :---------------------------------------------------------------: | :-------------------: |
| <img src={useBaseUrl('/img/ImpButtons/CleanButton.png')} alt="Button" style={{width: 50}} /> | **Clean** | Clean a dead body, making it disappear and making it unreportable. | Dead Body Interaction |

## Options

| Option                                |                                 Description                                  |  Type   | Default |   Range   |
| ------------------------------------- | :--------------------------------------------------------------------------: | :-----: | :-----: | :-------: |
| Clean Uses Per Games                  |              Maximum times that Cleaning is possible per game.               |  Uses   |    ∞    |  ∞ - 15   |
| Clean Cooldown                        |                      Cooldown for cleaning dead bodies.                      | Seconds |   40s   | 10s - 60s |
| Clean Delay                           |                       Delay for cleaning dead bodies.                        | Seconds |  2.5s   | 0s - 15s  |
| Reset Kill & Clean Cooldowns Together |        Determines if the Kill button and Clean button reset together.        | Toggle  |  False  |    N/A    |
| Janitor Can Kill With Teammate        | Determines if the Janitor can kill with a teammate, or if they must be solo. | Toggle  |  True   |    N/A    |
