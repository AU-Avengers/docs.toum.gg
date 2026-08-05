---
title: Jester
description: Be suspicious and get voted out to win!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Jester.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Jester

<div className="role-header">
  <img
    className="role-banner"
    src={useBaseUrl('/img/RoleBanners/JesterBanner.png')} />

  <div className="role-info">
    <div className="role-tagline">
      Be Suspicious and Get Voted Out to Win!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Evil<br />
    </div>

<p>
      The **Jester** wins by getting themselves ejected in a meeting.
</p>
<p>
      If enabled, when the Jester wins, they may leave the game in victory and **haunt** another player, choosing to kill someone from the players who voted for them.
</p>

  </div>
</div>

:::note[Strategy Guide]

Although it can be tempting to act like a clown, that's usually a very obvious tell that will get you assassinated before it gets you voted out! Try to be more suspicious with your pathing and movement instead.

:::

---

## Abilities

|                                               Button                                                |  Ability  |                                                                  Description                                                                  |            Type            |
| :-------------------------------------------------------------------------------------------------: | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------: |
| <img src={useBaseUrl('/img/NeutButtons/JesterPokeButton.png')} alt="Button" style={{width: 50}} />  | **Poke**  | Poking a player will cause a fake interaction, which certain roles (Warden, Cleric, Lookout, Herbalist, etc) and Sixth Sense will be aware of. |     Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/JesterVentButton.png')} alt="Button" style={{width: 50}} />  | **Vent**  |                                If enabled, the Jester can use vents, but cannot move from one vent to another.                                | Basic Ability (if enabled) |
| <img src={useBaseUrl('/img/NeutButtons/JesterHauntButton.png')} alt="Button" style={{width: 50}} /> | **Haunt** |      If enabled, after winning, the Jester can Haunt a player (choosing someone to kill from a menu of those that voted for the Jester).      |     Player Interaction     |

## Options

| Option                            | Description                                                                                                                                                             |  Type   |  Default  |            Range             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :-------: | :--------------------------: |
| Can Use Button                    | Determines whether the Jester can use the Emergency Button.                                                                                                             | Toggle  |   True    |         True / False         |
| Can Hide in Vents                 | Determines whether the Jester can use vents.                                                                                                                            | Toggle  |   True    |         True / False         |
| Vent Cooldown                     | How long the Jester must wait between using vents.                                                                                                                      | Seconds |    15s    |           0 - 25s            |
| Vent Duration                     | How long the Jester can stay in a vent.                                                                                                                                 | Seconds |    45s    |        2.5 - 60s / ∞         |
| Can Poke Others                   | Whether the Jester has the Poke ability.                                                                                                                                | Toggle  |   True    |         True / False         |
| ┗ Poke Cooldown                   | The time between being able to use the Poke ability.                                                                                                                    | Seconds |    25s    |           5 - 120s           |
| Has Impostor Vision               | Determines whether the Jester has Impostor Vision.                                                                                                                      | Toggle  |   True    |         True / False         |
| Survivor Scatter Mechanic Enabled | Determines whether the Scatter mechanic is enabled, which forces the Jester to move a certain distance within a set time. If they don't move far enough, they will die. | Toggle  |   False   |         True / False         |
| Survivor Scatter Timer            | Scatter timer duration.                                                                                                                                                 | Seconds |    25s    |           10 - 60s           |
| After Win Type                    | Determines what happens if the Jester wins.                                                                                                                             | String  | Ends Game | Ends Game / Haunts / Nothing |
