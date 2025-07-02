import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Sheriff.png')} alt="Icon" align="left" style={{height: 60}} />
# Sheriff

The Sheriff is a Crewmate Killing that can shoot a player to attempt to kill them. If the Sheriff doesn't die to misfire, they will lose the ability to shoot.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/CrewButtons/SheriffShootButton.png')} alt="Button" style={{width: 50}} /> | Shoot | Shoot a player to kill them, misfiring if they aren't a Impostor or one of the other selected shootable factions | Player Interaction |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Kill Cooldown | Cooldown for killing a player. | Seconds | 25s | 10s - 60s |
| Report Body | Determines if the Sheriff can report players they have killed. | Toggle | False | True / False |
| Round One Shot | Determines if the Sheriff can shoot round one. | Toggle | False | True / False |
| Shoot NE | Determines if the Sheriff can successfully shoot Neutral Evil roles. | Toggle | True | True / False |
| Shoot NK | Determines if the Sheriff can successfully shoot Neutral Killing roles. | Toggle | True | True / False |
| Misfire Kills | Who dies from a misfire. | String | Sheriff | Sheriff / Target / Sheriff & Target / No One |
