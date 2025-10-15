import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Inquisitor.png')} alt="Icon" align="left" style={{height: 60}} />

# Inquisitor

The Inquisitor is a Neutral Evil role that wins if their targets (Heretics) die. The only information provided is their roles, and it's up to the Inquisitor to identify those players (marked with a dark pink-ish **$** to the dead) and get them killed by any means neccesary.

|                                               Button                                               | Ability  |                                                                                                    Description                                                                                                     |        Type        |
| :------------------------------------------------------------------------------------------------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|  <img src={useBaseUrl('/img/NeutButtons/InquireButton.png')} alt="Button" style={{width: 50}} />   | Inquire  |                                                             Inquire a player, which will tell you if they are one of your targets within the meeting.                                                              | Player Interaction |
| <img src={useBaseUrl('/img/NeutButtons/InquisKillButton.png')} alt="Button" style={{width: 50}} /> | Vanquish | Vanquish a player to kill them. If they are a heretic, you will be told, and you can continue vanquishing. However, if the victim isn't a heretic, you will lose the ability to vanquish for the rest of the game. | Player Interaction |

### Options

| Option                               |                                Description                                |  Type   | Default |    Range     |
| ------------------------------------ | :-----------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Vanquish Cooldown                    |                     Cooldown for Vanquishing players.                     | Seconds |   25s   |   10 - 60s   |
| Allow Vanquish in First Round        |              Determins if Inquisitor can Vanquish round one.              | Toggle  |  False  | True / False |
| Inquisitor Continues Game in Final 3 | Determines if the game will continue if the Inquisitor is in the final 3. | Toggle  |  True   | True / False |
| Inquisitor Can't Inquire             |      Determines whether the Inquisitor can use the Inquire ability.       | Toggle  |  False  | True / False |
| Inquire Cooldown                     |                       Cooldown for Inquire ability.                       | Seconds |   25s   |   10 - 60s   |
| Max Nunber of Inquiries              |          Determines how many times Inquire ability can be used.           |  Uses   |    5    |    1 - 15    |
| Amount of Heretics Needed            |      Determines how many Heretic targets must be vanquished to win.       |  Count  |    3    |    3 - 5     |
