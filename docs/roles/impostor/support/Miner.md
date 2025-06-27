import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Miner.png')} alt="Icon" align="left" style={{height: 60}} />
# Miner

The Miner is an Impostor Support role that can create vents around the map that connect together.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/ImpButtons/MineButton.png')} alt="Button" style={{width: 50}} /> | Mine | Place a vent where you are standing. These vents won't connect to already existing vents on the map but with each other. | Basic Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Max Vents | Maximum times that Mining is possible per game. | Uses | ∞ | ∞ - 15 |
| Mine Cooldown | Cooldown for creating vents. | Seconds | 25s | 10s - 60s |
| Mine Delay | Delay for creating vents. | Seconds | 3s | 0s - 10s |
| ┗ Mine Visibility | Changes when Miner vents are visible to others. | Immediate / After Use | Immediately | N/A |
| Can Kill | Determines if the Miner can kill with a teammate, or if they must be solo. | Toggle | True | N/A |
