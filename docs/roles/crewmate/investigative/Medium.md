import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Medium.png')} alt="Icon" align="left" style={{height: 60}} />

# Medium

### _Become one with the ghosts!_

#### **Alignment:** Crewmate Investigative

The **Medium** can become a ghost temporarily by using their **Mediate** ability, projecting their spirit outside of their body to investigate and discover clues. While Mediating, the Medium's body is left behind, still and unprotected, but their spirit can pass through walls and see other ghosts. Once time is up, their spirit will return to their body, and they can no longer see ghosts of other players.

### Abilities

|                                             Button                                              |   Ability   |                          Description                          |     Type      |
| :---------------------------------------------------------------------------------------------: | :---------: | :-----------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/CrewButtons/MediateButton.png')} alt="Button" style={{width: 50}} /> | **Mediate** | Project your spirit outside your body for some time to uncover clues. Once time is up, return to your mortal flesh, and ghosts will disappear. | Basic Ability |

### Options

| Option                              |                               Description                               |  Type   |      Default      |                       Range                        |
| ----------------------------------- | :---------------------------------------------------------------------: | :-----: | :---------------: | :------------------------------------------------: |
| Mediate Cooldown                    |                   Cooldown for using the Mediate ability.                   | Seconds |        25s        |                      10 - 60s                       |
| Mediate Duration                    |                   How long the Mediate ability will last for.               | Seconds |        15s        |                      5 - 20s                       |
| Spirit Speed When Mediating         |        How fast the spirit of the Medium can move while Mediating.           | Multiplier |        3.5x        |                      1.5 - 10x                       |
|  Time Before Spirit is Visible to Others                    |                   How long before the Medium's spirit becomes visible to all players.     | Seconds |        2.5s        |      0.5 - 20s                |
| Medium Can Identify                    |                   Determines who the Medium can identify/see when Mediating.                   | String |        Nobody        |                      Nobody / Living / Ghosts / Living + Ghosts                     |
| Arrow Visibility                    |  Determines who will see the location indicator arrow during Mediate.   | String  | Medium + Mediated |            Medium / Mediated / Neither             |
| Who is Revealed                     |         Determines which ghosts will be revealed to the Medium.         | String  |    Oldest Dead    | Oldest Dead / Newest Dead / Random Dead / All Dead |
