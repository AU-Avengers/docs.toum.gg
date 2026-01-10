import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Monarch.png')} alt="Icon" align="left" style={{height: 60}} />

# Monarch

### _Knight fellow crewmates!_

#### **Alignment:** Crewmate Power

The **Monarch** can **knight** other players to give them additional votes.

### Abilities

|                                             Button                                             |  Ability   |   Description    |        Type        |
| :--------------------------------------------------------------------------------------------: | :--------: | :--------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/KnightButton.png')} alt="Button" style={{width: 50}} /> | **Knight** | Knight a player. | Player Interaction |

### Options

| Option                           | Description                                                             |  Type   | Default |    Range     |
| -------------------------------- | ----------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Knight Cooldown                  | Cooldown for being able to knight someone.                              | Seconds |   20s   |   5 - 30s    |
| Maximum Knights                  | The maximum number of Knighted players.                                 |  Count  |    2    |  1 - 15 / ∞  |
| Votes Per Knight                 | The number of votes given to knighted players.                          |  Count  |    1    |    1 - 5     |
| Extra Votes Apply on Self        | Determines if the Monarch will also gain extra votes.                   | Toggle  |  False  | True / False |
| Knight Delay                     | The time it takes to knight a player after.                             | Seconds |   3s    |   1 - 10s    |
| Allow Round One Knighting        | Determines if the Monarch can knight during round one.                  | Toggle  |  False  | True / False |
| Inform Monarch if a Knight Dies  | Determines if the Monarch will be alerted when a Knight dies.           | Toggle  |  True   | True / False |
| Crew Knights Grant Kill Immunity | Determines whether the Monarch is given kill immunity if they have successfully knighted a Crewmate (and the Knighted player is still alive). | Toggle  |  True   | True / False |
