import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Jailor.png')} alt="Icon" align="left" style={{height: 60}} />

# Jailor

### _Jail and execute the evils!_

#### **Alignment:** Crewmate Power

The **Jailor** can **jail** other players. During a meeting, everyone will see who is jailed. The Jailor can privately talk with the jailed player using the private chatbox. The Jailor can then decide whether to execute the jailed player (unless the Jailor is an **Imitator**). If the player is a Crewmate, the Jailor will lose the ability to Jail.

### Abilities

|                                             Button                                              |   Ability   |         Description          |           Type           |
| :---------------------------------------------------------------------------------------------: | :---------: | :--------------------------: | :----------------------: |
|  <img src={useBaseUrl('/img/CrewButtons/JailButton.png')} alt="Button" style={{width: 50}} />   |  **Jail**   |        Jail a player.        |    Player Interaction    |
| <img src={useBaseUrl('/img/OtherButtons/ExecuteClean.png')} alt="Button" style={{width: 50}} /> | **Execute** | Execute the detained player. | Targeted Meeting Ability |

### Options

| Option                          | Description                                                               |  Type   | Default |    Range     |
| ------------------------------- | ------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Jail Cooldown                   | Cooldown for being able to jail someone.                                  | Seconds |   20s   |   1 - 30s    |
| Max Number of Executes          | The maximum number of times the Jailor can successfully Execute.          |  Count  |    3    |    1 - 5     |
| Jail Same Person Twice In A Row | Determines whether the Jailor can Jail the same person twice in a row.    | Toggle  |  False  | True / False |
| Jailee Can Use Public Chat      | Determines whether the jailed player can use the public chat in meetings. | Toggle  |  False  | True / False |
