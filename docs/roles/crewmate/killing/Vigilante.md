import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Vigilante.png')} alt="Icon" align="left" style={{height: 60}} />

# Vigilante

### _Kill the Impostors by Guessing Their Roles!_

#### **Alignment:** Crewmate Killing

The **Vigilante** can **guess** evil roles during meetings to kill evil players. If they guess correctly, the evil player will die. If they guess incorrectly and the Vigilante has no safe shots, the Vigilante will die.

**Note:** If an Imitator uses Vigilante, they will not have safe shots.

### Abilities

|                                          Button                                          |  Ability  |      Description      |           Type            |
| :--------------------------------------------------------------------------------------: | :-------: | :-------------------: | :-----------------------: |
| <img src={useBaseUrl('/img/OtherButtons/Guess.png')} alt="Button" style={{width: 50}} /> | **Guess** | Guess a player's role | Targetted Meeting Ability |

### Options

| Option                               | Description                                                        |  Type  | Default |    Range     |
| ------------------------------------ | ------------------------------------------------------------------ | :----: | :-----: | :----------: |
| Number of Guesses                    | Maximum amount of successful guesses that can be taken.            | Amount |    5    |    1 - 15    |
| Can Guess More Than Once Per Meeting | Determines if the Vigilante can guess more than once in a meeting. | Toggle |  True   | True / False |
| Can Guess Neutral Benign Roles       | Determines if the Vigilante can guess Neutral Benign roles.        | Toggle |  True   | True / False |
| Can Guess Neutral Evil Roles         | Determines if the Vigilante can guess Neutral Evil roles.          | Toggle |  True   | True / False |
| Can Guess Neutral Killing Roles      | Determines if the Vigilante can guess Neutral Killing roles.       | Toggle |  True   | True / False |
| Can Guess Neutral Outlier Roles      | Determines if the Vigilante can guess Neutral Outlier roles.       | Toggle |  True   | True / False |
| Can Guess Killer Modifiers           | Determines if the Vigilante can guess killer modifiers.            | Toggle |  True   | True / False |
| Can Guess Alliances                  | Determines if the Vigilante can guess alliances.                   | Toggle |  True   | True / False |
| Safe Shots Available                 | Maximum amount of safe shots available.                            | Amount |    3    |    0 - 3     |
