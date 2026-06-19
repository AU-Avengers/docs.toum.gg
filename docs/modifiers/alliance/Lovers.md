---
title: Lovers
description: You are in love...
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Lover.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Lovers

<div className="role-header">
  
  <div className="role-info">
    <div className="role-tagline">
      You are in love...
    </div>

  <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Universal Alliance<br />
    </div>

<p>
 As a **Lover**, you aim to win with your sweetheart (signified with a pink **♥**) by both being in the final 3 players.

During rounds, you can chat with your Lover in a private chat to share information, but during meetings, messages are public as normal.

**Note:** This alliance does not replace your original win condition—you can also still win by achieving that condition (e.g., task wins as Crew).

</p>

  </div>
</div>

---

## Options

| Option                              |                                         Description                                         |    Type    | Default |    Range     |
| ----------------------------------- | :-----------------------------------------------------------------------------------------: | :--------: | :-----: | :----------: |
| Both Lovers Die and Revive Together | Determines if both Lovers will die if one is killed, and if both will be revived if one is. |   Toggle   |  True   | True / False |
| Loving Another Killer Probability  |         Determines whether a Killing role can be Lovers with another Killing role.          | Percentage |   20%   |   0 - 100%   |
| Neutral Roles Can Be Lovers         |                       Determines if two Neutral roles can be Lovers.                        |   Toggle   |  True   | True / False |
| Lover Can Kill Faction Teammates    |                   Determines if a Lover can kill their faction teammates.                   |   Toggle   |  False  | True / False |
| Lovers Can Kill One Another         |                          Determines if Lovers can kill each other.                          |   Toggle   |  True  | True / False |
