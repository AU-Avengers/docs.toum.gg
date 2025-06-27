import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Trapper.png')} alt="Icon" align="left" style={{height: 60}} />
# Trapper

The Trapper is a Crewmate Investigative role that can place traps around the map. If someone stays in it for enough time and enough players go through, they will get a list of their roles in the next meeting in random order.

### Abilities

| Button | Ability | Description | Type |
|----------|----------|:-----------------:|:------:|
| <img src={useBaseUrl('/img/CrewButtons/TrapButton.png')} alt="Button" style={{width: 50}} /> | Trap | Places down a trap down that detects and stores the roles of people within its range after a few seconds | Targetless |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Trap Cooldown | Cooldown for placing traps | Seconds | 20s | 1s - 30s |
| Min Amount Of Time In Trap To Register | How long should a player be within the trap's range to gather their role info | Seconds | 5s | 0s - 15s |
| Max Number Of Traps | The maximum number of traps the Trapper can place | Count | 5 | 1 - 15 |
| Trap Size | The range of the traps | Multiplier | 0.25x | 0.05x - 1x |
| Traps Removed After Each Round | Toggles whether trap positions reset at the end of every meeting | Toggle | True | True / False |
| ┗ Get More Uses From Completing Tasks | Toggles whether the maximum number of traps increases upon task completion | Toggle | False | True / False |
| Minimum Number Of Roles Required To Trigger Trap | The minimum threshold of roles the traps much have gathered before the info is presented to the Trapper | Count | 3 | 1 - 15 |