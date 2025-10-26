import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Medium.png')} alt="Icon" align="left" style={{height: 60}} />

# Medium

### _Communicate with the dead!_

#### **Alignment:** Crewmate Support

The **Medium** can see ghosts of players who died during the round by using their **Mediate** ability. The Medium and the ghost will be alerted with a purple flash and see an arrow showing their locations to each other at all times.

### Abilities

|                                             Button                                              |   Ability   |                          Description                          |     Type      |
| :---------------------------------------------------------------------------------------------: | :---------: | :-----------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/CrewButtons/MediateButton.png')} alt="Button" style={{width: 50}} /> | **Mediate** | Communicate with the dead, which may lead you to the killers. | Basic Ability |

### Options

| Option                              |                               Description                               |  Type   |      Default      |                       Range                        |
| ----------------------------------- | :---------------------------------------------------------------------: | :-----: | :---------------: | :------------------------------------------------: |
| Mediate Cooldown                    |                   Cooldown for using the Mediate ability.                   | Seconds |        10s        |                      0 - 60s                       |
| Reveal Appearance of Mediate Target | Determines whether the Medium can see the true appearance of the ghost. | Toggle  |       True        |                    True / False                    |
| Arrow Visibility                    |  Determines who will see the location indicator arrow during Mediate.   | String  | Medium + Mediated |            Medium / Mediated / Neither             |
| Who is Revealed                     |         Determines which ghosts will be revealed to the Medium.         | String  |    Oldest Dead    | Oldest Dead / Newest Dead / Random Dead / All Dead |
