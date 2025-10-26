import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Investigator.png')} alt="Icon" align="left" style={{height: 60}} />

# Investigator

### _Find all evildoers by examining footprints!_

#### Alignment: Crewmate Investigative

The **Investigator** is able to see the footprints of other players during each round, helping them investigate whereabouts and alibis.

<sub>**Note:** Swooper footprints are concealed.</sub>

### Options

| Option               |                             Description                              |    Type    | Default |    Range     |
| -------------------- | :------------------------------------------------------------------: | :--------: | :-----: | :----------: |
| Footprint Size       |                   Changes how big footprints are.                    | Multiplier |   4x    |   1x - 10x   |
| Footprint Interval   |              Changes how often footprints are created.               |  Seconds   |   1s    |  0.5s - 6s   |
| Footprint Duration   |             Changes how long footprints are visible for.             |  Seconds   |   10s   |   1s - 15s   |
| Anonymous Footprints |    Determines if footprints are color coded based off the player.    |   Toggle   |  False  | True / False |
| Show Vent Footprints | Determines if footprints are visible from a player that's in a vent. |   Toggle   |  False  | True / False |
