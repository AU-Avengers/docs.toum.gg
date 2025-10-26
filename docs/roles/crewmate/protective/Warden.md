import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Warden.png')} alt="Icon" align="left" style={{height: 60}} />

# Warden

### _Fortify Crewmates!_

#### **Alignment:** Crewmate Protective

The **Warden** can **fortify** players to prevent them from being interacted with. If anyone tries to interact with a Fortified player, the ability will not work and both the Warden and Fortified player will be alerted with a purple flash.

### Abilities

|                                             Button                                              |   Ability   |                         Description                          |        Type        |
| :---------------------------------------------------------------------------------------------: | :---------: | :----------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/FortifyButton.png')} alt="Button" style={{width: 50}} /> | **Fortify** | Fortify a player to prevent them from being interacted with. | Player Interaction |

### Options

| Option                | Description                                |  Type  |      Default       |                       Range                        |
| --------------------- | ------------------------------------------ | :----: | :----------------: | :------------------------------------------------: |
| Show Fortified Player | Determines who can see the Fortify shield. | String | Fortified + Warden | Fortified / Warden / Fortified + Warden / Everyone |
