import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Aurial.png')} alt="Icon" align="left" style={{height: 60}} />
# Aurial

The Aurial is a Crewmate Investigative role that will be alerted whenever a player near them uses one of their abilities.
Depending on how close a player uses an ability, the aurial will see a colored arrow pointing to the area the player was at while using said ability. Otherwise, only a white arrow is shown.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Radiate Colour Range | Range where arrows will be colored. | Multiplier | 0.5x | 0x - 1x |
| Max Radiate Range | Range where arrows will. | Multiplier | 1.5x | 1x - 5x |
| Sense Duration | How long the sense arrow stays on screen for. | Seconds | 10s | 1s - 15s |
