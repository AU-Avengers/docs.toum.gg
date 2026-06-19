---
title: Assassin
description: Guess players in the meeting!
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Assassin.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Assassin

<div className="role-header">

  <div className="role-info">
    <div className="role-tagline">
      Guess players in the meeting!
    </div>

    <div className="role-alignment">
      <strong>&#8226; Alignment:</strong> Assailant<br />
    </div>
    <p>

The **Assassin** is a modifier that allows Neutral Killers and Impostors to guess players' roles during meetings.

</p>
  </div>
</div>

---

## Options

| Option                                       |                                                     Description                                                      |    Type    | Default |    Range     |
| -------------------------------------------- | :------------------------------------------------------------------------------------------------------------------: | :--------: | :-----: | :----------: |
| Number of Impostor Assassins                 |                            Determines how many Impostors will have the Assassin ability.                             |   Count    |    1    |    0 - 4     |
| ┗ Impostor Assassin Chance                   |                        The chance of having an Impostor/Impostors with the Assassin ability.                         | Percentage |  100%   |   0 - 100%   |
| Number of Neutral Assassins                  |                             Determines how many Neutrals will have the Assassin ability.                             |   Count    |    1    |    0 - 5     |
| ┗ Neutral Assassin Chance                    |                              The chance of having a Neutral with the Assassin ability.                               | Percentage |  100%   |   0 - 100%   |
| Assassin Can Kill More Than Once Per Meeting |                   Determines if the Assassin role(s) can guess multiple times in the same meeting.                   |   Toggle   |  True   | True / False |
| Assassin Can Guess "Crewmate"                |                            Determines if the Assassin has the option to guess "Crewmate".                            |   Toggle   |  False  | True / False |
| Assassin Can Guess Crew Investigative Roles  |                     Determines if the Assassin has the option to guess Crew Investigative roles.                     |   Toggle   |  False  | True / False |
| Assassin Can Guess Neutral Benign Roles      |                       Determines if the Assassin has the option to guess Neutral Benign roles.                       |   Toggle   |  True   | True / False |
| Assassin Can Guess Neutral Evil Roles        |                        Determines if the Assassin has the option to guess Neutral Evil roles.                        |   Toggle   |  True   | True / False |
| Assassin Can Guess Neutral Killing Roles     |                      Determines if the Assassin has the option to guess Neutral Killing roles.                       |   Toggle   |  True   | True / False |
| Assassin Can Guess Neutral Killing Roles     |                      Determines if the Assassin has the option to guess Neutral Killing roles.                       |   Toggle   |  True   | True / False |
| Assassin Can Guess Neutral Outlier Roles     |                      Determines if the Assassin has the option to guess Neutral Outlier roles.                       |   Toggle   |  True   | True / False |
| Assassin Can Guess Impostor Roles            |                          Determines if the Assassin has the option to guess Impostor roles.                          |   Toggle   |  True   | True / False |
| Assassin Can Guess Crewmate Modifiers        |                        Determines if the Assassin has the option to guess Crewmate Modifiers.                        |    True    |  True   | True / False |
| Assassin Can Guess Crew Utility Modifiers    | Determines if the Assassin has the option to guess Crew Utility Modifiers (Investigator, Operative, Scientist, Spy). |   Toggle   |  False  | True / False |
| Assassin Can Guess Other Faction Modifiers   |     Determines if the Assassin has the option to guess modifiers from other factions (e.g., Disperser, Underdog).     |    True    |  True   | True / False |
| Assassin Can Guess Alliances                 |             Determines if the Assassin has the option to guess Alliances (Crewpostor, Egotist, Lovers).              |   Toggle   |  True   | True / False |
