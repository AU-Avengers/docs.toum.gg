import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Escapist.png')} alt="Icon" align="left" style={{height: 60}} />
# Escapist

The Escapist is an Impostor Concealing role that can mark a location and then recall (teleport) to that location.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/ImpButtons/MarkButton.png')} alt="Button" style={{width: 50}} /> | Mark | Mark a location for later use. | Basic Ability |
| <img src={useBaseUrl('/img/ImpButtons/RecallButton.png')} alt="Button" style={{width: 50}} /> | Recall | Recall to the marked location. | Basic Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Max Recalls | Maximum times that Recalling is possible per game. | Uses | ∞ | ∞ - 15 |
| Recall Cooldown | Cooldown for recalling to a location. | Seconds | 25s | 10s - 60s |
| Can Vent | Determines if the Escapist can vent. | Toggle | True | N/A |
