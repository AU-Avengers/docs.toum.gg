import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/DoubleShot.png')} alt="Icon" align="left" style={{height: 60}} />

# Assassin Options

Settings for the Assassin (guessing) ability.

| Option                                       |                                                     Description                                                      |    Type    | Default |    Range     |
| -------------------------------------------- | :------------------------------------------------------------------------------------------------------------------: | :--------: | :-----: | :----------: |
| Number of Impostor Assassins                 |                            Determines how many Impostors will have the Assassin ability.                             |   Count    |    1    |    0 - 4     |
| ┗ Impostor Assassin Chance                   |                        The chance of having an Impostor/Impostors with the Assassin ability.                         | Percentage |  100%   |   0 - 100%   |
| Number of Neutral Assassins                  |                             Determines how many Neutrals will have the Assassin ability.                             |   Count    |    1    |    0 - 5     |
| ┗ Neutral Assassin Chance                    |                              The chance of having a Neutral with the Assassin ability.                               | Percentage |  100%   |   0 - 100%   |
| Amnesiac Turned Impostor Gets Ability        |                 Determines if an Amnesiac who picks up an Impostor role gains the Assassin ability.                  |   Toggle   |  True   | True / False |
| Amnesiac Turned Neutral Killing Gets Ability |              Determines if an Amnesiac who picks up a Neutral Killing role gains the Assassin ability.               |   Toggle   |  True   | True / False |
| Traitor Gets Ability                         |                               Determines whether the Traitor has the Assassin ability.                               |   Toggle   |  True   | True / False |
| Number of Assassin Kills                     |                            How many shots/guesses an Assassin can take through the game.                             |   Count    |    5    |    1 - 15    |
| Assassin Can Kill More Than Once Per Meeting |                   Determines if the Assassin role(s) can guess multiple times in the same meeting.                   |   Toggle   |  True   | True / False |
| Non-Basic Vanilla Roles Are Guessable        |                     Determines if the Assassin has the option to shoot non-basic Vanilla roles.                      |   Toggle   |  True   | True / False |
| Assassin Can Guess "Crewmate"                |                            Determines if the Assassin has the option to guess "Crewmate".                            |   Toggle   |  False  | True / False |
| Assassin Can Guess Crew Investigative Roles  |                     Determines if the Assassin has the option to guess Crew Investigative roles.                     |   Toggle   |  False  | True / False |
| Assassin Can Guess Neutral Benign Roles      |                       Determines if the Assassin has the option to guess Neutral Benign roles.                       |   Toggle   |  True   | True / False |
| Assassin Can Guess Neutral Evil Roles        |                        Determines if the Assassin has the option to guess Neutral Evil roles.                        |   Toggle   |  True   | True / False |
| Assassin Can Guess Neutral Killing Roles     |                      Determines if the Assassin has the option to guess Neutral Killing roles.                       |   Toggle   |  True   | True / False |
| Assassin Can Guess Neutral Killing Roles     |                      Determines if the Assassin has the option to guess Neutral Killing roles.                       |   Toggle   |  True   | True / False |
| Assassin Can Guess Impostor Roles            |                          Determines if the Assassin has the option to guess Impostor roles.                          |   Toggle   |  True   | True / False |
| Assassin Can Guess Crewmate Modifiers        |                        Determines if the Assassin has the option to guess Crewmate Modifiers.                        |    True    |  True   | True / False |
| Assassin Can Guess Crew Utility Modifiers    | Determines if the Assassin has the option to guess Crew Utility Modifiers (Investigator, Operative, Scientist, Spy). |   Toggle   |  False  | True / False |
| Assassin Can Guess Alliances                 |             Determines if the Assassin has the option to guess Alliances (Crewpostor, Egotist, Lovers).              |   Toggle   |  True   | True / False |
