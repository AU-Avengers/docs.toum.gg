import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Lookout.png')} alt="Icon" align="left" style={{height: 60}} />
# Lookout

The Lookout is a Crewmate Investigative role that can watch other players during rounds. During meetings they will see all roles who interact with each watched player.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/CrewButtons/WatchButton.png')} alt="Button" style={{width: 50}} /> | Watch | Watch a player or multiple, the next meeting you will know which players interacted with the watched ones. | Player Interaction |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Watch Cooldown | Cooldown for watching a player. | Seconds | 20s | 1s - 30s |
| Max Watches | Maximum players that can be watched. | Uses | 5 | 1 - 15 |
| Reset Each Round | Determines if uses are reset each round or not. | Toggle | True | N/A |
| Task Uses | Determines if doing tasks gives more uses. | Toggle | False | N/A |
