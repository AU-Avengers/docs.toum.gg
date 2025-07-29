import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Traitor.png')} alt="Icon" align="left" style={{height: 60}} />
# Traitor

The Traitor is an Impostor Killing role that spawns after a meeting, in which the spawn conditions are suitable. The Traitor will never be a Mayor, and must be a crewmate. The Traitor sets out to win the game for the fallen Impostors, and kill off the crew.

Similar to the Imitator, the Traitor can turn into a better impostor role, and they must still be guessed as Traitor.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/ImpButtons/TraitorSelect.png')} alt="Button" style={{width: 50}} /> | Change Role | The Traitor can change their role to one of the provided role cards, or gamble on the random. Once they select a role, they stay as that role until they die. | Basic Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Latest Spawn | Minimum amount of players that must be alive before Traitor can spawn. | Amount | 5 | 3 - 15 |
| NK Stops Spawn | Determines if a Neutral Killer's existence prevents the Traitor from spawning. | Toggle | False | N/A |
| Remove Existing Roles | Determines if the roles from the previous impostors aren't possible for Traitor to pick. | Toggle | True | N/A |
