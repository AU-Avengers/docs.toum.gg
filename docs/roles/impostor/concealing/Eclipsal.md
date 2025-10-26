import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Eclipsal.png')} alt="Icon" align="left" style={{height: 60}} />

# Eclipsal

### _Block Out the light!_

#### **Alignment:** Impostor Concealing

The **Eclipsal** can **blind** nearby players, reducing their vision to only be able to see the map and prevent reporting. After a set duration, blinded players' vision will return to normal.

### Abilities

|                                            Button                                            |  Ability  |        Description        |      Type      |
| :------------------------------------------------------------------------------------------: | :-------: | :-----------------------: | :------------: |
| <img src={useBaseUrl('/img/ImpButtons/BlindButton.png')} alt="Button" style={{width: 50}} /> | **Blind** | Blind all nearby players. | Radius Ability |

### Options

| Option         |             Description              |    Type    | Default |   Range    |
| -------------- | :----------------------------------: | :--------: | :-----: | :--------: |
| Blind Cooldown |    Cooldown for blinding players.    |  Seconds   |   25s   | 10s - 60s  |
| Blind Duration |    Duration for blinding players.    |  Seconds   |   15s   | 10s - 60s  |
| Blind Radius   | Radius in which players are blinded. | Multiplier |   1x    | 0.25x - 5x |
