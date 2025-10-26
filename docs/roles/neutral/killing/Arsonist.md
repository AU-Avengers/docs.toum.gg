import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Arsonist.png')} alt="Icon" align="left" style={{height: 60}} />

# Arsonist

### _Douse Players and Ignire the Light!_

#### **Alignment:** Neutral Killing

The **Arsonist** must **douse** and **ignite** players within their radius and wins by being the last killer alive.

If Legacy Arsonist is active, they must douse players individually, but can ignite one target to kill all doused players on the map at once.

### Abilities

|                                              Button                                              |  Ability   |               Description               |        Type        |
| :----------------------------------------------------------------------------------------------: | :--------: | :-------------------------------------: | :----------------: |
|  <img src={useBaseUrl('/img/NeutButtons/DouseButton.png')} alt="Button" style={{width: 50}} />   | **Douse**  |       Douse a player in gasoline.       | Player Interaction |
|  <img src={useBaseUrl('/img/NeutButtons/IgniteButton.png')} alt="Button" style={{width: 50}} />  | **Ignite** |          Kill doused players.           | Player Interaction |
| <img src={useBaseUrl('/img/NeutButtons/ArsoVentButton.png')} alt="Button" style={{width: 50}} /> |  **Vent**  | If enabled, the Arsonist can use vents. | Player Interaction |


### Options

| Option                  | Description                                                                                        |  Type   | Default |    Range     |
| ----------------------- | -------------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Douse Cooldown          | Cooldown for using the Douse ability.                                                              | Seconds |   25s   |   10 - 60s   |
| Douse From Interactions | Determines whether Douses will spread via interactions between players within a radius.            | Toggle  |  True   | True / False |
| Legacy Mode (No Radius) | Enables Legacy Arsonist; douse individually and ignite all doused players at once from one target. | Toggle  |  True   | True / False |
| Arsonist Can Vent       | Determines whether the Arsonist can use vents.                                                     | Toggle  |  False  | True / False |
