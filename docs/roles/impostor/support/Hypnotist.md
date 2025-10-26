import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Hypnotist.png')} alt="Icon" align="left" style={{height: 60}} />

# Hypnotist

### _Hypnotise Crewmates!_

#### **Alignment:** Impostor Support

The **Hypnotist** can **hypnotize** players (marked with a red **@**). During a meeting, they can release **Mass Hysteria**, which makes all hypnotised players see different visuals applied to players in the following round.

### Abilities

|                                              Button                                              |      Ability      |                                                     Description                                                      |        Type        |
| :----------------------------------------------------------------------------------------------: | :---------------: | :------------------------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/HypnotiseButton.png')} alt="Button" style={{width: 50}} /> |   **Hypnotise**   | Hypnotise a player, causing them to see the game differently than non-hypnotised players if mass hysteria is active. | Player Interaction |
| <img src={useBaseUrl('/img/OtherButtons/HysteriaClean.png')} alt="Button" style={{width: 50}} /> | **Mass Hysteria** |    Cause all hypnotised players to have different visuals applied to players on their screen the following round.    |  Meeting Ability   |

### Options

| Option                           |                                  Description                                   |  Type   | Default |   Range   |
| -------------------------------- | :----------------------------------------------------------------------------: | :-----: | :-----: | :-------: |
| Hypnotise Cooldown               |                   Cooldown for hypnotising players players.                    | Seconds |   25s   | 10s - 60s |
| Hypnotist Can Kill With Teammate | Determines if the Hypnotist can kill with a teammate, or if they must be solo. | Toggle  |  True   |    N/A    |
