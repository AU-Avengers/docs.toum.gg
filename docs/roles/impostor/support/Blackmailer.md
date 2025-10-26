import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Blackmailer.png')} alt="Icon" align="left" style={{height: 60}} />

# Blackmailer

### _Silence Crewmates During Meetings!_

#### **Alignment:** Impostor Support

The **Blackmailer** can stop a player from speaking in the next meeting by **blackmailing** them (marked with a black **M**).

The blackmailed player will recieve a notification before the meeting that they are blackmailed, and will not be able to use text-chat.

Depending on settings, they may be visibly blackmailed to others with a red overlay on their nameplate and a small envelope with their character. On top of that, blackmailed players will not be able to vote until less or equal amount of people are alive than the Blackmailer settings allow.

### Abilities

|                                              Button                                              |    Ability    |              Description               |        Type        |
| :----------------------------------------------------------------------------------------------: | :-----------: | :------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/BlackmailButton.png')} alt="Button" style={{width: 50}} /> | **Blackmail** | Silence a player for the next meeting. | Player Interaction |

### Options

| Option                                       | Description                                                                                    |  Type   | Default |  Range   |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------- | :-----: | :-----: | :------: |
| Number of Blackmail Uses Per Game            | Maximum times that Blackmailing is possible per game.                                          |  Uses   |    ∞    |  ∞ - 15  |
| Blackmail Cooldown                           | Cooldown for blackmailing players.                                                             | Seconds |   20s   | 1s - 30s |
| Max Players Alive Where Blackmailed Can Vote | Maximum players alive before the blackmailed victim can vote.                                  | Amount  |   10    |  1 - 15  |
| Blackmail Same Person Twice In A Row         | Determines if the Blackmailer can target the same person twice in a row.                       | Toggle  |  False  |   N/A    |
| OnlyTarget Sees Blackmail                    | Determines if only the blackmailed target sees the blackmail, or if everyone in the game does. | Toggle  |  False  |   N/A    |
| Blackmailer Can Kill with Teammate           | Determines if the Blackmailer can kill with a teammate, or if they must be solo.               | Toggle  |  True   |   N/A    |
