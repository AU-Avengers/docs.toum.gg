import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Plaguebearer.png')} alt="Icon" align="left" style={{height: 60}} />

# Plaguebearer

### _Infect Everyone to Become Pestilence!_

#### **Alignment:** Neutral Killing

The **Plaguebearer** must **infect** all other players to transform into **Pestilence**. The Plaguebearer's infection will spread to other players via interactions, including reporting infected bodies.

### Abilities

|                                             Button                                             |  Ability   |   Description    |        Type        |
| :--------------------------------------------------------------------------------------------: | :--------: | :--------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/InfectButton.png')} alt="Button" style={{width: 50}} /> | **Infect** | Infect a player. | Player Interaction |

### Options

| Option                             | Description                                                                                         |  Type   | Default |    Range     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Infect Cooldown                    | Cooldown for using the Infect ability.                                                              | Seconds |   25s   |   10 - 60s   |
| Announce Pestilence Transformation | Determines whether everyone will be notified that the Plaguebearer has transformed into Pestilence. | Toggle  |  True   | True / False |
