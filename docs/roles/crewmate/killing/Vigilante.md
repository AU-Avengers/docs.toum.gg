---
title: Vigilante
description: Kill the evildoers by guessing their roles!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Vigilante.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Vigilante

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/CrewmateBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Kill the Impostors by Guessing Their Roles!
    </div>

   <div className="role-alignment">
      <b>&#8226; Alignment:</b> Crewmate Killing<br />
    </div>

<p>
      The **Vigilante** can **_guess_** evil roles during meetings to kill evil players. If they guess correctly, the evil player will die. If they guess incorrectly, and the Vigilante has no safe shots, the Vigilante will die.
</p>

  </div>
</div>

:::important[Strategy Guide]

Information is your best friend! The more you know, the better chance you have at shooting evildoers correctly. Sometimes, patience is key over gambling with a risky shot.

<sub>**Note:** If an **Imitator** uses Vigilante, they will not have safe shots.</sub>

:::

---

### Abilities

|                                          Button                                          |  Ability  |      Description      |           Type           |
| :--------------------------------------------------------------------------------------: | :-------: | :-------------------: | :----------------------: |
| <img src={useBaseUrl('/img/OtherButtons/Guess.png')} alt="Button" style={{width: 50}} /> | **Guess** | Guess a player's role | Targeted Meeting Ability |

### Options

| Option                               | Description                                                        |  Type  | Default |    Range     |
| ------------------------------------ | ------------------------------------------------------------------ | :----: | :-----: | :----------: |
| Number of Guesses                    | The maximum number of successful guesses that can be taken.            | Amount |    5    |    1 - 15    |
| Can Guess More Than Once Per Meeting | Determines if the Vigilante can guess more than once in a meeting. | Toggle |  True   | True / False |
| Can Guess Neutral Benign Roles       | Determines if the Vigilante can guess Neutral Benign roles.        | Toggle |  True   | True / False |
| Can Guess Neutral Evil Roles         | Determines if the Vigilante can guess Neutral Evil roles.          | Toggle |  True   | True / False |
| Can Guess Neutral Killing Roles      | Determines if the Vigilante can guess Neutral Killing roles.       | Toggle |  True   | True / False |
| Can Guess Neutral Outlier Roles      | Determines if the Vigilante can guess Neutral Outlier roles.       | Toggle |  True   | True / False |
| Can Guess Killer Modifiers           | Determines if the Vigilante can guess Killer modifiers.            | Toggle |  True   | True / False |
| Can Guess Alliance Modifiers         | Determines if the Vigilante can guess Alliance modifiers.                   | Toggle |  True   | True / False |
| Safe Shots Available                 | Maximum amount of safe shots available.                            | Amount |    3    |    0 - 3     |
