import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Vampire.png')} alt="Icon" align="left" style={{height: 60}} />

# Vampire

### _Convert a Crewmate and Kill the Rest!_

#### **Alignment:** Neutral Killing

The **Vampire** wins by being the last killer alive, or being the last team remaining. They can **bite** players, converting others into Vampires, or killing them.

### Abilities

|                                              Button                                              | Ability  |              Description               |           Type            |
| :----------------------------------------------------------------------------------------------: | :------: | :------------------------------------: | :-----------------------: |
|   <img src={useBaseUrl('/img/NeutButtons/BiteButton.png')} alt="Button" style={{width: 50}} />   | **Bite** | Bite a player to convert or kill them. |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/VampVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent** |  If enabled, the Vampire(s) can vent.  | Basic Ability, if enabled |

### Options

| Option                          | Description                                                              |  Type   |               Default                |                                                                              Range                                                                               |
| ------------------------------- | ------------------------------------------------------------------------ | :-----: | :----------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Bite Cooldown                   | Cooldown for using the Bite ability.                                     | Seconds |                 25s                  |                                                                             10 - 60s                                                                             |
| Max Number of Vampires Per Game | Determines how many Vampires there can be per game.                      |  Count  |                  2                   |                                                                              2 - 5                                                                               |
| Vampires Have Impostor Vision   | Determines whether the Vampire(s) have Impostor vision.                  | Toggle  |                 True                 |                                                                           True / False                                                                           |
| New Vampire Can Assassinate     | Determines whether converted Vampires have assassin ability in meetings. | Toggle  |                 True                 |                                                                           True / False                                                                           |
| Valid Conversions             | Determines which factions can be converted.                              | String  | Crew, Neutral Benign & Neutral Evils | Crew, Neutral Benign & Neutral Evils / Crew & Lovers / Crew, Lovers & NBs / Crew, Lovers & NEs / Crew, Lovers, NBs & NEs / Crewmates / Crew & NBs / Crew & NEs / |
| Vampire Can Vent                | Determines whether the Vampire(s) can vent.                              | Toggle  |                 True                 |                                                                           True / False                                                                           |
