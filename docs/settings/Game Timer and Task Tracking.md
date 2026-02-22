import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/DeadlyQuota.png')} alt="Icon" align="left" style={{height: 60}} />

# End Game Timer

Settings for the End Game Timer, which has a countdown for the duration of the game, and task tracking, which is displayed on player names.

| Option                    |                                                 Description                                                  |  Type  |  Default   |          Range           |
| ------------------------- | :----------------------------------------------------------------------------------------------------------: | :----: | :--------: | :----------------------: |
| Game Timer                |                             Determines whether a timer is enabled for the game.                              | Toggle |   False    |       True / False       |
| ┣ Pause Timer in Meetings | Determines how many meetings the timer will count down through before pausing in future meetings thereafter. | Count  |     5      |          1 - 10          |
| ┣ On Timer End            |                                   Determines the outcome of the timer ending.                                    | String | Game Draw  | Game Draw / Impostor Win |
| ┗ Game Time Limit         |                                             The set timer limit.                                             | Count  | 15 Minutes |      1 - 30 Minutes      |

# Task Tracking

| Option                    |                           Description                            |  Type  | Default |    Range     |
| ------------------------- | :--------------------------------------------------------------: | :----: | :-----: | :----------: |
| See Tasks During Round    |   Determines if players can see the task count during rounds.    | Toggle |  False  | True / False |
| See Tasks During Meetings |  Determines if players can see the task count during meetings.   | Toggle |  False  | True / False |
| See Tasks When Dead       | Determines if players can see the task count when they are dead. | Toggle |  False  | True / False |
