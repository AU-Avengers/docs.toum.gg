---
title: Amnesiac
description: Remember a Role of a Deceased Player!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Amnesiac.png')} alt="Icon" align="left" style={{height: 60}} />

# Amnesiac

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Remember a Role of a Deceased Player!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Benign <br />
    </div>

<p>
      The **Amnesiac** must **remember** who they are by finding a dead body and taking the role of the dead player. If the dead body's role is a unique role, they will remember the base faction's role instead.
</p>

  </div>
</div>

:::note[Strategy Guide]

While Amnesiac's tasks don't count towards the task bar, it's always a good idea to complete some in case you pick up a Crewmate role to give yourself a head start!

:::

---

## Abilities

| Button                                                                                           | Ability      |             Description              |        Type        |
| ------------------------------------------------------------------------------------------------ | ------------ | :----------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/RememberButton.png')} alt="Button" style={{width: 50}} /> | **Remember** | Remember of the role of a dead body. | Player Interaction |

## Options

| Option                             | Description                                                                                           |  Type   |     Default     |                     Range                      |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------- | :-----: | :-------------: | :--------------------------------------------: |
| Inherit Faction Modifiers          | Determines whether the Amnesiac will also remember faction modifiers from a body.                     | Toggle  |      True       |                  True / False                  |
| Show Arrow Pointing to Dead Bodies | Determines whether the Amnesiac will see arrows pointing to dead bodies.                              | Toggle  |      True       |                  True / False                  |
| Time After Death Arrow Appears     | Determines how long after a player dies before the Amnesiac arrow appears.                            | Seconds |       5s        |                    0 - 15s                     |
| Can Be Impostor Assassin           | Determines whether the Amnesiac will become an Impostor Assassin if remembering an Impostor role.     | String  | If Imp Assassin |      Always / Never / If Imp is Assassin       |
| Can be Neutral Killing Assassin    | Determines whether the Amnesiac will become a Neutral Assassin if remembering a Neutral Killing role. | String  |     Always      | Always / Never / If Neutral Killer is Assassin |
