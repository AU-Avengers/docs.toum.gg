import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Snitch.png')} alt="Icon" align="left" style={{height: 60}} />
# Snitch

The Snitch is a Crewmate Investigative role that can reveal the Impostors to themselves by finishing all their tasks. Upon completing all tasks, the Impostors will be revealed to the Snitch with an arrow and their red name.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Snitch Reveals Neutral Killers | Toggles whether Neutral Killers are revealed to the Snitch as well | Toggle | True | True / False |
| Snitch Sees Traitor | Toggles whether a turned Traitor is revealed to the Snitch | Toggle | True | True / False |
| Snitch Sees Impostors In Meetings | Toggles whether or not they see reveal players during meetings | Toggle | True | True / False |
| Snitch Sees Revealed Players' Roles | Toggles whether or not the Snitch can see the roles of the players they reveal | Toggle | False | True / False |
| Tasks Remaining When Revealed | How many tasks does the Snitch need to have left before Impostors are alerted to their existence and location | Count | 1 | 1 - 3 |