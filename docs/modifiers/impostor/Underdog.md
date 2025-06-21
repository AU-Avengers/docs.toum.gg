import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Underdog.png')} alt="Icon" align="left" style={{height: 60}} />
# Underdog

#### Impostor Passive

Your kill cooldown is lower if you're solo or your teammate is dead.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Cooldown Bonus | Amount of time trimmed off your kill cooldown. | Seconds | 5s | 2.5s - 10s |
| Extra Imp Cooldown | Increase kill cooldown if there's multiple impostors alive. | Toggle | false | N/A |
