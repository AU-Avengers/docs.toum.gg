import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Satellite.png')} alt="Icon" align="left" style={{height: 60}} />
# Satellite

#### Universal Utility

You can broadcast a signal to know where dead bodies are.

If no bodies are found on the map, you will be notified, but otherwise, you will get an arrow to all dead bodies.

### Abilities

| Button | Ability | Description | Type |
|----------|----------|:-----------------:|:------:|
| <img src={useBaseUrl('/img/OtherButtons/BroadcastButton.png')} alt="Button" style={{width: 50}} /> | Broadcast | You can check for bodies on the map, which you can do a set number of times per game. | Basic Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Button Cooldown | The cooldown for broadcasting to dead bodies. | Seconds | 30s | 2.5s - 60s |
| Max Uses | Changes how many times a broadcast can be done. | Uses | 1 | 1 - 3 |
| One Use Per Round | Determines if a broadcast can only be done once a round. | Toggle | True | True / False |
| First Round Use | Determines if you can broadcast round one. | Toggle | True | True / False |
