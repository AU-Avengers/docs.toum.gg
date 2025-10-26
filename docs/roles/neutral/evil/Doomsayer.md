import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Doomsayer.png')} alt="Icon" align="left" style={{height: 60}} />

# Doomsayer

### _Guess Roles to Win!_

#### **Alignment:** Neutral Evil

The **Doomsayer** wins by guessing a set amount of players' roles. If specified, they may **observe** players and will receive a list of potential roles of the observed player in the next meeting.

The Doomsayer will not die if they **guess** incorrectly. They will receive a notification of an incorrect guess(es), though it will not confirm which was wrong specifically.

### Abilities

|                                             Button                                              |   Ability   |                                  Description                                   |           Type           |
| :---------------------------------------------------------------------------------------------: | :---------: | :----------------------------------------------------------------------------: | :----------------------: |
| <img src={useBaseUrl('/img/NeutButtons/ObserveButton.png')} alt="Button" style={{width: 50}} /> | **Observe** | Observe a player, gaining a hint in the next meeting what their role could be. |    Player Interaction    |
|    <img src={useBaseUrl('/img/OtherButtons/Guess.png')} alt="Button" style={{width: 50}} />     |  **Guess**  |                          Guess the role of a player.                           | Targeted Meeting Ability |

### Options

| Option                                       | Description                                                            |  Type   |      Default      |                  Range                  |
| -------------------------------------------- | ---------------------------------------------------------------------- | :-----: | :---------------: | :-------------------------------------: |
| Observe Cooldown                             | Cooldown for using the Observe ability.                                | Seconds |        20s        |                 1 - 30s                 |
| Number of Guesses Needed to Win                | How many correct guesses required to win.                              |  Count  |         3         |                  2 - 5                  |
| Doomsayer Can Guess Crew Investigative Roles | Determines whether the Doomsayer can guess CI roles.                   | Toggle  |       False       |              True / False               |
| Doomsayer Guesses All Roles at Once          | Determines if the Doomsayer must make all guesses in one round to win. | Toggle  |       False       |              True / False               |
| Doomsayer Can't Observe                      | Determines whether the Doomsayer cannot use the Observe ability.       | Toggle  |       False       |              True / False               |
| Doomsayer Win                                | Determines what happens when the Doomsayer meets their win condition.  | String  | Leaves in Victory | Leaves in Victory / Ends Game / Nothing |
