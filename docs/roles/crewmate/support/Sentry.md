---
title: Sentry
description: Deploy cameras to monitor the map!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Sentry.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Sentry

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/SentryBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Deploy Cameras to Monitor the Map!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Support<br />
    </div>

<p>
      The **Sentry** can place additional cameras across the map, which can then be viewed from Security or by players with portable cameras.
</p>

  </div>
</div>

:::important[Strategy Guide]

Place cameras in areas where suspicious activity is more likely to happen but isn't covered by existing cameras, such as Dropship, Decontamination/Specimen, Medbay/Lab, and Electrical.

:::

---

## Abilities

|                                             Button                                             |  Ability   |                                                          Description                                                          |     Type      |
| :--------------------------------------------------------------------------------------------: | :--------: | :---------------------------------------------------------------------------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/CrewButtons/DeployButton.png')} alt="Button" style={{width: 50}} /> | **Deploy** |                         Deploy a camera at your current location. When it appears depends on settings                         | Basic Ability |
|  <img src={useBaseUrl('/img/OtherButtons/CamButton.png')} alt="Button" style={{width: 50}} />  |  **View**  | Access Security cameras from anywhere with a limited battery. Battery drains while viewing the cameras and does not recharge. | Basic Ability |

## Options

| Option                                    | Description                                                                                                       |  Type   |        Default        |                    Range                     |
| :---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | :-----: | :-------------------: | :------------------------------------------: |
| Placement Cooldown                        | Cooldown for using the Deploy ability.                                                                            | Seconds |          30s          |                   5 - 120s                   |
| Deployed Cameras Visibility               | Determines when placed cameras will become visible.                                                               | String  |      Immediately      |         Immediately / After Meeting          |
| ┗ Can Move While Placing Cameras          | If Cameras are set to become visible After Meeting, determines whether the Sentry can move while placing cameras. | Toggle  |         False         |                 True / False                 |
| Cameras Visible After                     | Determines how much delay there is before cameras are visible after being placed.                                 | Seconds |          3s           |                   0 - 10s                    |
| Instant Portable Cameras (Or After Tasks) | Determines whether the Sentry has access to Portable Cameras immediately, or if they must complete tasks first.   | String  | Only On Cam-less Maps | Always / After Tasks / Only On Cam-less Maps |
| Initial Cameras                           | Determines how many cameras the Sentry will have to start with.                                                   |  Count  |           2           |                  1 - 15 / ∞                  |
| Amount Of Rounds Cameras Last             | How many rounds placed cameras will last.                                                                         |  Count  |           2           |                  1 - 15 / ∞                  |
| Tasks Required Per Camera                 | How many tasks the Sentry must complete to earn additional cameras.                                               |  Count  |           2           |                 1 - 15 / Off                 |
| Max Cameras Placed At Once                | How many cameras in total can be placed at one time.                                                              |  Count  |           4           |                  1 - 20 / ∞                  |
| Portable Cameras Battery                  | Total charge of the portable camera battery. Drains during use and cannot be recharged.                           | Seconds |          90s          |                   0 - 120s                   |
| Blind Spots                               | Determines how many blind spots (areas where cameras cannot be placed) the Sentry will have, if any.              |  Count  |          Off          |                 1 - 10 / Off                 |
