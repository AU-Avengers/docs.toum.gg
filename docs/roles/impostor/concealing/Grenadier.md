import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Grenadier.png')} alt="Icon" align="left" style={{height: 60}} />
# Grenadier

The Grenadier is an Impostor Concealing role that can throw down a grenade that will blind all other players.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/ImpButtons/FlashButton.png')} alt="Button" style={{width: 50}} /> | Flash | Throw down a grenade flashing all players in it's radius. | Radius Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Max Flashes | Maximum times that Flashing is possible per game. | Uses | ∞ | ∞ - 15 |
| Flash Cooldown | Cooldown for flashing players. | Seconds | 25s | 10s - 60s |
| Flash Duration | Duration for flashing players. | Seconds | 10s | 10s - 60s |
| Flash Radius | Radius in which players are flashed. | Multiplier | 1x | 0.25x - 5x |
| Can Vent | Determines if the Grenadier can vent. | Toggle | True | N/A |
