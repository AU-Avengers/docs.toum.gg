import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Lover.png')} alt="Icon" align="left" style={{height: 60}} />

# Lovers

#### Universal Alliance

As a lover, you can chat with your other lover (signified with a pink **♥**) during the round, and you can win with your lover if you are both a part of the final 3 players, or you can win with your original win condition.

### Options

| Option                              |                                     Description                                     |    Type    | Default |    Range     |
| ----------------------------------- | :---------------------------------------------------------------------------------: | :--------: | :-----: | :----------: |
| Both Lovers Die and Revive Together | Determines if both Lovers will die if one is killed, and if both will be revived if one is. |   Toggle   |  True   | True / False |
| Loving Another Killing Probability   |     Determines whether a Killing role can be Lovers with another Killing role.      | Percentage |   20%   |   0 - 100%   |
| Neutral Roles Can Be Lovers         |                   Determines if two Neutral roles can be Lovers.                    |   Toggle   |  True   | True / False |
| Lover Can Kill Faction Teammates    |               Determines if a Lover can kill their faction teammates.               |   Toggle   |  False  | True / False |
| Lovers Can Kill One Another         |                      Determines if Lovers can kill each other.                      |   Toggle   |  False  | True / False |
