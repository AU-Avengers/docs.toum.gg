import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Tracker.png')} alt="Icon" align="left" style={{height: 60}} />
# Tracker

The Tracker is a Crewmate Investigative role that can track other players to see their general position across the map, getting colored arrows towards all tracked players.

### Abilities

| Button | Ability | Description | Type |
|----------|----------|:-----------------:|:------:|
| <img src={useBaseUrl('/img/CrewButtons/TrackButton.png')} alt="Button" style={{width: 50}} /> | Track | Places a tracking bug on a player, making it so that the player's location is visible to the Tracker, updating periodically | Player Interaction |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Track Cooldown | Cooldown for tracking players | Seconds | 20s | 1s - 30s |
| Max Number Of Tracks | The maximum number of tracking bugs the Tracker can place | Count | 5 | 1 - 15 |
| Arrow Update Interval | The interval at which the tracking arrows update their target location | Seconds | 5s | 0.5s - 15s |
| Tracker Arrows Make Sound On Death | Toggles whether or not a sound effect plays if the tracked target dies | Toggle | True | True / False |
| Tracker Arrows Reset After Each Round | Toggles whether tracking arrows reset at the end of every meeting | Toggle | True | True / False |
| ┗ Get More Uses From Completing Tasks | Toggles whether the maximum number of tracks increases upon task completion | Toggle | False | True / False |