import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Seer.png')} alt="Icon" align="left" style={{height: 60}} />
# Seer

The Seer is a Crewmate Investigative role that can reveal the alliance of other players.

### Abilities

| Button | Ability | Description | Type |
|----------|----------|:-----------------:|:------:|
| <img src={useBaseUrl('/img/CrewButtons/SeerButton.png')} alt="Button" style={{width: 50}} /> | Reveal | Reveals the alliance of a player, showing red or green based on whether or not they are good | Player Interaction |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Seer Cooldown | Cooldown for revealing a player | Seconds | 25s | 10s - 60s |
| Crewmate Killing Roles Are Red | Toggles whether Crewmate Killing roles appear as evil to the seer | Toggle | False | True / False |
| Neutral Benign Roles Are Red | Toggles whether Neutral Benign roles appear as evil to the seer | Toggle | False | True / False |
| Neutral Evil Roles Are Red | Toggles whether Neutral Evil roles appear as evil to the seer | Toggle | False | True / False |
| Neutral Killing Roles Are Red | Toggles whether Neutral Killing roles appear as evil to the seer | Toggle | True | True / False |
| Traitor Swaps Colors | Toggles whether a turned Traitor appears to change alliances to the Seer | Toggle | True | True / False |