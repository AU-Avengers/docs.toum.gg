import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Noisemaker.png')} alt="Icon" align="left" style={{height: 60}} />
# Noisemaker

#### Crewmate Postmortem

After your death, you will show a red body indicator to everyone on the map.

### Options

| Option | Description | Type | Default | Min/Max |
|----------|:-----------------:|:------:|:------:|:------:|
| Impostors Alerted | Determines if impostors see the alert or not. | Toggle | True | N/A |
| Neutrals Alerted | Determines if neutral killers see the alert or not. | Toggle | True | N/A |
| Comms Affected | Determines if Comms sabotage prevents the alert from triggering. | Toggle | False | N/A |
| Body Check | Determines if a body must exist for the alert to trigger. | Toggle | True | N/A |
| Alert Duration | Amount of time that the alert is visible for. | Seconds | 5s | 1s - 20s |