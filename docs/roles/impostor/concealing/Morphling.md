import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Morphling.png')} alt="Icon" align="left" style={{height: 60}} />

# Morphling

### _Transform into Crewmates!_

#### **Alignment:** Impostor Concealing

The **Morphling** can **Sample** another player and **Morph** into the player to disguise themselves temporarily.

### Abilities

|                                            Button                                             |  Ability   |                                  Description                                   |        Type        |
| :-------------------------------------------------------------------------------------------: | :--------: | :----------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/ImpButtons/SampleButton.png')} alt="Button" style={{width: 50}} /> | **Sample** |            Take a DNA sample of a player to morph into them later.             | Player Interaction |
| <img src={useBaseUrl('/img/ImpButtons/MorphButton.png')} alt="Button" style={{width: 50}} />  | **Morph**  | Morph into the appearance of the sampled player, which can be cancelled early. |   Basic Ability    |

### Options

| Option         |                       Description                        |  Type   | Default |   Range   |
| -------------- | :------------------------------------------------------: | :-----: | :-----: | :-------: |
| Max Samples    |    Maximum times that Sampling is possible per game.     |  Uses   |    ∞    |  ∞ - 15   |
| Max Morphs     |    Maximum times that Morphing is possible per round.    |  Uses   |    ∞    |  ∞ - 15   |
| Cooldown       | Cooldown for sampling players and morphing into players. | Seconds |   25s   | 10s - 60s |
| Morph Duration |           Duration for morphing into players.            | Seconds |   10s   | 10s - 60s |
| Can Vent       |          Determines if the Morphling can vent.           | Toggle  |  True   |    N/A    |
