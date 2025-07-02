import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Hunter.png')} alt="Icon" align="left" style={{height: 60}} />
# Hunter

The Hunter is a Crewmate Killing role that can stalk players during the round. If a stalked player uses an ability, they can be killed by the Hunter at any point in the game. The Hunter is not punished for killing Crewmates either.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/CrewButtons/StalkButton.png')} alt="Button" style={{width: 50}} /> | Stalk | Stalk any player of your choosing. If they use any ability while stalked, they’re added to the Hunter's hitlist and can be killed. | Player Interaction |
| <img src={useBaseUrl('/img/CrewButtons/HunterKillButton.png')} alt="Button" style={{width: 50}} /> | Kill | Kill any player that has been added to your hitlist. | Player Interaction |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Kill Cooldown | Cooldown for killing a player. | Seconds | 25s | 10s - 60s |
| Stalk Cooldown | Cooldown for stalking a player. | Seconds | 20s | 10s - 30s |
| Stalk Duration | Duration for stalking a player. | Seconds | 25s | 5s - 60s |
| Max Stalks | Maximum players that can be stalked per game. | Uses | 5 | 1 - 15 |
| Task Gains | Determines if uses are gained from completing tasks. | Toggle | True | True / False |
| Retribution | Determines if the Hunter gets revenge on the last player to vote them by killing them. | Toggle | True | True / False |
| Report Body | Determines if the Hunter can report players they have killed. | Toggle | False | True / False |
