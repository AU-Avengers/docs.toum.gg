import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Undertaker.png')} alt="Icon" align="left" style={{height: 60}} />
# Undertaker

The Undertaker is an Impostor Support role that can drag dead bodies around the map.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/ImpButtons/DragButton.png')} alt="Button" style={{width: 50}} /> | Drag | Drag a dead body, if allowed through settings you can also take it into a vent. | Dead Body Interaction |
| <img src={useBaseUrl('/img/ImpButtons/DropButton.png')} alt="Button" style={{width: 50}} /> | Drop | Drop the dragged dead body, stopping it from being dragged any further. | Dead Body Interaction |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Drag Cooldown | Cooldown for dragging dead bodies. | Seconds | 25s | 10s - 60s |
| Drag Speed | Speed multiplier applied while dragging a dead boddy. | Multiplier | 0.75x | 0.25x - 1x |
| Affected Speed | Determines if dragging speed is affected by body size. | Toggle | True | N/A |
| Can Vent | Determines if the Undertaker can vent. | Toggle | True | N/A |
| Vent With Body | Determines if you can vent while holding a body. | Toggle | False | N/A |
| Can Kill | Determines if the Janitor can kill with a teammate, or if they must be solo. | Toggle | True | N/A |
