import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Traitor.png')} alt="Icon" align="left" style={{height: 60}} />

# Traitor

### _Betray the Crewmates!_

#### **Alignment:** Impostor Power

If all Impostors die, one Crewmate may become the **Traitor** after a meeting, depending on set conditions. The Traitor sets out to win the game for the fallen Impostors and kill off the Crew. Only Crewmates can become the Traitor, with the exception of the Mayor.

Similar to the Imitator and Ambassador, the Traitor can **change roles** to become become another Impostor role from a menu selection. They can still be guessed by the Vigilante or Neutral Assassins as Traitor.

### Abilities

|                                             Button                                             |     Ability     |                                                                          Description                                                                          |     Type      |
| :--------------------------------------------------------------------------------------------: | :-------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/ImpButtons/TraitorSelect.png')} alt="Button" style={{width: 50}} /> | **Change Role** | The Traitor can change their role to one of the provided role cards, or gamble on the random. Once they select a role, they stay as that role until they die. | Basic Ability |

### Options

| Option                                         |                                       Description                                        |  Type  | Default |    Range     |
| ---------------------------------------------- | :--------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Minimum People Alive When Traitor Can Spawn    |          Minimum amount of players that must be alive before Traitor can spawn.          | Amount |    5    |    3 - 15    |
| Traitor Won't Spawn if Neutral Killer is Alive |      Determines if a Neutral Killer's existence prevents the Traitor from spawning.      | Toggle |  False  | True / False |
| Disable Existing Impostor Roles                | Determines if the roles from the previous Impostors aren't possible for Traitor to pick. | Toggle |  False  | True / False |
