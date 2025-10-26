import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Transporter.png')} alt="Icon" align="left" style={{height: 60}} />

# Transporter

### _Swap the locations of players!_

#### Alignment: Crewmate Support

The **Transporter** can transport two players, dead or alive, to swap their locations.

**Note:** A red flash indicates that one target is an invalid choice, such as being on a ladder or zipline.

### Abilities

|                                              Button                                               |    Ability    |                  Description                   |        Type        |
| :-----------------------------------------------------------------------------------------------: | :-----------: | :--------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/TransportButton.png')} alt="Button" style={{width: 50}} /> | **Transport** | Select two players and switch their locations. | Player Interaction |

### Options

| Option                                    | Description                                                                 |  Type   | Default |    Range     |
| ----------------------------------------- | --------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Transport Cooldown                        | Cooldown for using the Transport ability.                                   | Seconds |   25s   |   10 - 60s   |
| Max Uses                                  | The maximum times the Transporter can use their ability.                    |  Count  |    5    |    1 - 15    |
| Move While Using Transport Menu (KB ONLY) | Determines whether the Transporter can move while using the Transport menu. | Toggle  |  True   | True / False |
| Can Use Vitals                            | Determines whether the Transporter can use Vitals.                          | Toggle  |  True   | True / False |
| Get More Uses From Completing Tasks       | Determines if doing tasks earns more Transports.                            | Toggle  |  True   | True / False |
