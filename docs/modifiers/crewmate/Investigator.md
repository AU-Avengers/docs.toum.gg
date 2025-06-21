import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Investigator.png')} alt="Icon" align="left" style={{height: 60}} />
# Investigator

#### Crewmate Utility

The Investigator can see player's footprints throughout the game. Swooper footprints are hidden.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Footprint Size | Changes how big footprints are. | Multiplier | 4x | 1x - 10x |
| Footprint Interval | Changes how often footprints are created. | Seconds | 1s | 0.5s - 6s |
| Footprint Duration | Changes how long footprints are visible for. | Seconds | 10s | 1s - 15s |
| Anonymous Footprints | Determines if footprints are color coded based off the player. | Toggle | False | N/A |
| Show Vent Footprints | Determines if footprints are visible from a player that's in a vent. | Toggle | False | N/A |
