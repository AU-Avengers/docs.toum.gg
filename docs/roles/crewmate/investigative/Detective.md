import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Detective.png')} alt="Icon" align="left" style={{height: 60}} />
# Detective

The Detective is a Crewmate Investigative role that can inspect a crime scene and examine players to see if they were at the crime scene, flashing red if they were there.

### Abilities

| Button | Ability | Description | Type |
|----------|----------|:-----------------:|:------:|
| <img src={useBaseUrl('/img/CrewButtons/InspectButton.png')} alt="Button" style={{width: 50}} /> | Inspect | Inspect a crime to gain insight on who was near it | Crime Scene Interaction |
| <img src={useBaseUrl('/img/CrewButtons/ExamineButton.png')} alt="Button" style={{width: 50}} /> | Examine | Examine a player to see if they were near one of the crime scenes that was investigated earlier | Player Interaction |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Examine Cooldown | Cooldown for examining a player | Seconds | 25s | 10s - 60s |
| Show Detective Reports | Toggle for whether the Detective gets reports about the bodies they report | Toggle | True | True / False |
| ┗ Time Where Detective Will Have Faction | How early should the Detective report to get the body's faction | Seconds | 30s | 0s - 60s |
| ┗ Time Where Detective Will Have Role | How early should the Detective report to get the body's role | Seconds | 7.5s | 0s - 60s |