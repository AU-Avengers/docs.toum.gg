import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Vigilante.png')} alt="Icon" align="left" style={{height: 60}} />
# Vigilante

The Vigilante is a Crewmate Killing role that can guess players roles in meetings. If they guess correctly, the other player will die. If they guess incorrectly and the Vigi has no safe shots, they will die.

If an Imitator uses Vigilante, they will not have safe shots.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/OtherButtons/Guess.png')} alt="Button" style={{width: 50}} /> | Guess | Guess a player's role | Targetted Meeting Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Max Guesses | Maximum amount of successful guesses that can be done. | Amount | 5 | 1 - 15 |
| Multi Guess | Determines if the Vigi can guess more than once in a meeting. | Toggle | True | True / False |
| Guess NBs | Determines if the Vigi can guess Neutral Benign roles. | Toggle | True | True / False |
| Guess NEs | Determines if the Vigi can guess Neutral Evil roles. | Toggle | True | True / False |
| Guess NKs | Determines if the Vigi can guess Neutral Killing roles. | Toggle | True | True / False |
| Guess Killer Mods | Determines if the Vigi can guess killer modifiers. | Toggle | True | True / False |
| Guess Alliances | Determines if the Vigi can guess alliances. | Toggle | True | True / False |
| Safe Shots | Maximum amount of safe shots available. | Amount | 3 | 0 - 3 |
