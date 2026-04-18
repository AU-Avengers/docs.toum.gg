import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Officer.png')} alt="Icon" align="left" style={{height: 60}} />

# Officer

### _Reload and shoot the killers!_

#### **Alignment:** Crewmate Killing

The **Officer** can **shoot** players with limited ammo. They must **load** bullets, which only last one round unless they are added within 10 seconds.

### Abilities

|                                                Button                                                |  Ability  |                                                    Description                                                    |        Type        |
| :--------------------------------------------------------------------------------------------------: | :-------: | :---------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/OfficerLoadButton.png')} alt="Button" style={{width: 50}} />  | **Load**  |                                Load a bullet into your gun, allowing you to shoot.                                | Player Interaction |
| <img src={useBaseUrl('/img/CrewButtons/OfficerShootButton.png')} alt="Button" style={{width: 50}} /> | **Shoot** | Shoot a player to kill them. If the player is considered "innocent," then you will put away your gun temporarily. | Player Interaction |

### Options

| Option                                          |                                          Description                                          |  Type   | Default |    Range     |
| ----------------------------------------------- | :-------------------------------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Shoot Cooldown                                  |                                Cooldown for shooting a player.                                | Seconds |   5s    |  2.5s - 30s  |
| Load Cooldown                                   |                                 Cooldown for loading bullets.                                 | Seconds |   30s   | 2.5s - 120s  |
| Can Self Report                                 |                     Determines if the Officer can report their own kills.                     | Toggle  |  False  | True / False |
| Allow Shooting in First Round                   |               Determines if the Officer can shoot in the first round of a game.               | Toggle  |  False  | True / False |
| Officer Can only Shoot Players That Hvae Killed |        Determines whether the Officer can only shoot a player that has killed someone.        | Toggle  |  True   | True / False |
| Crewmate Killing Roles Are Innocent             | Determines whether the Officer will consider Crew Killing roles as innocent (cannot be shot). | Toggle  |  True   | True / False |
| Maximum Bullets in Total                        |                 The maximum number of bullets the Officer can have in total.                  |  Count  |    9    |    3 - 15    |
| Maximum Bullets at Once                         |                The maximum number of bullets the Officer can have at one time.                |  Count  |    3    |    2 - 9     |
| Number of Rounds to Shoot Again After Misfire   |                    How many rounds the Officer must wait after a misfire.                     |  Count  |    1    |    1 - 5     |
