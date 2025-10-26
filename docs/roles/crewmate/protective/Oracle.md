import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Oracle.png')} alt="Icon" align="left" style={{height: 60}} />

# Oracle

### _Reflect Attacks onto Others!_

#### **Alignment:** Crewmate Protective

The **Oracle** can use their **Confess** ability on another player to find out if they are evil. During a meeting, the Oracle will be given the names of three players (including the chosen Confessor) as potential Evils. If the Oracle dies before the meeting, the chosen Confessor will reveal their faction to everybody during the meeting (depending on the accuracy setting).

The Oracle can also protect players during meetings with their **Bless** ability, preventing them from being guessed or ejected.

### Abilities

|                                             Button                                              |   Ability   |                                                                                   Description                                                                                    |        Type        |
| :---------------------------------------------------------------------------------------------: | :---------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|  <img src={useBaseUrl('/img/CrewButtons/BlessButton.png')} alt="Button" style={{width: 50}} />  |  **Bless**  |                                                   Blessing a player prevents any harm from being done to them in the meeting.                                                    | Player Interaction |
| <img src={useBaseUrl('/img/CrewButtons/ConfessButton.png')} alt="Button" style={{width: 50}} /> | **Confess** | Make a player Confess in a meeting, giving a vision of three possible evils (including the confessor), or reveal their faction to everyone with set accuracy if the Oracle dies. | Player Interaction |

### Options

| Option                          | Description                                                                               |    Type    | Default |    Range     |
| ------------------------------- | ----------------------------------------------------------------------------------------- | :--------: | :-----: | :----------: |
| Confess Cooldown                | Cooldown on using the Confess ability.                                                    |  Seconds   |   20s   |   1 - 30s    |
| Bless Cooldown                  | Cooldown for Blessing another player.                                                     |  Seconds   |   25s   |   10 - 60s   |
| Reveal Accuracy                 | Determines the accuracy of the faction reveal on a Confessed player when the Oracle dies. | Percentage |   80%   |   0 - 100%   |
| Neutral Benign Show Up As Evil  | Determines whether Neutral Benign roles are revealed as Evil.                             |   Toggle   |  False  | True / False |
| Neutral Evil Show Up As Evil    | Determines whether Neutral Evil roles are revealed as Evil.                               |   Toggle   |  False  | True / False |
| Neutral Killing Show Up As Evil | Determines whether Neutral Killing roles are revealed as Evil.                            |   Toggle   |  True   | True / False |
