---
title: Blackmailer
description: Silence the Crewmates During Meetings!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Blackmailer.png')} alt="Icon" align="left" style={{height: 60}} />

# Blackmailer

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/ImpostorBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Silence the Crewmates During Meetings!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Impostor Support <br />
    </div>

<p>
      The **Blackmailer** can stop a player from speaking in the next meeting by **_blackmailing_** them (marked with a black **M**). The Blackmailed player will also receive a notification before the meeting that they are blackmailed, and will not be able to use text-chat.
</p>

<p>
      Depending on settings, they may be visibly blackmailed to others with a red overlay on their nameplate and a small envelope with their character. On top of that, blackmailed players will not be able to vote until fewer or an equal number of people are alive than the Blackmailer settings allow.
</p>

  </div>
</div>

---

## Abilities

|                                              Button                                              |    Ability    |              Description               |        Type        |
| :----------------------------------------------------------------------------------------------: | :-----------: | :------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/BlackmailButton.png')} alt="Button" style={{width: 50}} /> | **Blackmail** | Silence a player for the next meeting. | Player Interaction |

## Options

| Option                                       | Description                                                                                    |  Type   | Default |  Range   |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------- | :-----: | :-----: | :------: |
| Number of Blackmail Uses Per Game            | Maximum times that Blackmailing is possible per game.                                          |  Uses   |    ∞    |  ∞ - 15  |
| Blackmail Cooldown                           | Cooldown for blackmailing players.                                                             | Seconds |   20s   | 1s - 30s |
| Max Players Alive Where Blackmailed Can Vote | Maximum players alive before the blackmailed victim can vote.                                  | Amount  |   10    |  1 - 15  |
| Blackmail Same Person Twice In A Row         | Determines if the Blackmailer can target the same person twice in a row.                       | Toggle  |  False  |   N/A    |
| OnlyTarget Sees Blackmail                    | Determines if only the blackmailed target sees the blackmail, or if everyone in the game does. | Toggle  |  False  |   N/A    |
| Blackmailer Can Kill with Teammate           | Determines if the Blackmailer can kill with a teammate, or if they must be solo.               | Toggle  |  True   |   N/A    |
