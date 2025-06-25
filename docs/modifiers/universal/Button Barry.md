import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/ButtonBarry.png')} alt="Icon" align="left" style={{height: 60}} />
# Button Barry

#### Universal Utility

You can button from anywhere on the map to call an emergency meeting.

### Abilities

| Button | Ability | Description | Type |
|----------|----------|:-----------------:|:------:|
| <img src={useBaseUrl('/img/OtherButtons/BarryButton.png')} alt="Button" style={{width: 50}} /> | Button | You can trigger an emergency meeting from across the map, which you may do a set number of times. | Basic Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Button Cooldown | The cooldown for calling a meeting. | Seconds | 30s | 2.5s - 60s |
| Max Uses | Changes how many times a meeting can be called from anywhere. | Uses | 1 | 1 - 3 |
| Ignore Sabotage | Determines if sabotages are ignored when attempting to call a meeting. | Toggle | True | True / False |
| First Round Use | Determines if you can barry button round one. | Toggle | False | True / False |
