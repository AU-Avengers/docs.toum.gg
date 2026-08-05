---
title: Pestilence
description: Horseman of the Apocalypse!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Pestilence.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Pestilence

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Horseman of the Apocalypse!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Killing <br />
    </div>

<p>
      The **Pestillence** wins by being the last killer alive. They are invincible to all interactions and attacks, instantly killing anybody who interacts with them. They can only be defeated by being exiled or guessing incorrectly during meetings.

</p>
<p>
      If enabled, there is a chance that Pestilence will spawn without first being the Plaguebearer.

</p>

  </div>
</div>

---

## Abilities

|                                              Button                                              | Ability  |           Description            |           Type            |
| :----------------------------------------------------------------------------------------------: | :------: | :------------------------------: | :-----------------------: |
| <img src={useBaseUrl('/img/NeutButtons/PestKillButton.png')} alt="Button" style={{width: 50}} /> | **Kill** |          Kill players.           |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/PestVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent** | If enabled, Pestilence can vent. | Basic Ability, if enabled |

## Options

| Option                             | Description                                                                                         |  Type   | Default |    Range     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Instant Pestilence Chance          | Determines the chance for Pestilence to spawn immediately.                                          | Percent |   0%    |   0 - 100%   |
| Infect Cooldown                    | Cooldown for using the Infect ability.                                                              | Seconds |   25s   |   10 - 60s   |
| Announce Pestilence Transformation | Determines whether everyone will be notified that the Plaguebearer has transformed into Pestilence. | Toggle  |  True   | True / False |
| Pestilence Kill Cooldown           | Cooldown for actively killing players.                                                              | Seconds |   25s   |   5 - 120s   |
| Pestilence Can Vent                | Determines whether Pestilence can vent.                                                             | Toggle  |  False  | True / False |
