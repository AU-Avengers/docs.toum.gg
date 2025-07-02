import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Veteran.png')} alt="Icon" align="left" style={{height: 60}} />
# Veteran

The Veteran is a Crewmate Killing role that can go on alert and kill anyone who interacts with them.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/CrewButtons/AlertButton.png')} alt="Button" style={{width: 50}} /> | Alert | When the Veteran is on alert, any player who interacts with them will be instantly killed, with the exception of Pestilence and shielded players, who will ignore the attack. | Basic Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Alert Cooldown | Cooldown for alerting. | Seconds | 25s | 10s - 60s |
| Alert Duration | Duration for alerting. | Seconds | 25s | 10s - 60s |
| Max Alerts | Maximum alerts that can be used each game. | Uses | 5 | 1 - 15 |
| Killed On Alert | Determines if the Veteran can die on alert. | Toggle | False | True / False |
| Task Uses | Determines if doing tasks gives more uses. | Toggle | True | True / False |
