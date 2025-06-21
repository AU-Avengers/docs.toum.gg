import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Blackmailer.png')} alt="Icon" align="left" style={{height: 60}} />
# Blackmailer

The Blackmailer is an Impostor Support role that can stop a player from speaking (marked with a black **M**) in the next meeting.

On top of that, blackmailed players will not be able to vote until less or equal amount of people are alive than the blackmailer settings allow.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/ImpButtons/BlackmailButton.png')} alt="Button" style={{width: 50}} /> | Blackmail | Silence a player for the next meeting. They will be unable to speak, and blackmail will be visible to other players only if the setting is enabled | Player Interaction |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Max Blackmails | Maximum times that Blackmailing is possible per game. | Uses | ∞ | ∞ - 15 |
| Blackmail Cooldown | Cooldown for blackmailing players. | Seconds | 20s | 1s - 30s |
| Max Alive For Voting | Maximum players alive before the blackmailed victim can vote. | Amount | 10 | 1 - 15 |
| Blackmail In A Row | Determines if the Blackmailer can target the same person twice in a row | Toggle | False | N/A |
| Client-Side Blackmail | Determines if only the blackmailed target sees the blackmail or if everyone in the game does. | Toggle | False | N/A |
| Can Kill | Determines if the Blackmailer can kill with a teammate, or if they must be solo. | Toggle | True | N/A |
