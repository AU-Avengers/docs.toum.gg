import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Operative.png')} alt="Icon" align="left" style={{height: 60}} />
# Operative

#### Crewmate Utility

Use cameras at anytime, anywhere with a limited battery charge.

### Options

| Option | Description | Type | Default | Min/Max |
|----------|:-----------------:|:------:|:------:|:------:|
| Move On Mira | Determines if you can move around while the Mira Doorlog is open. | Toggle | True | N/A |
| Starting Charge | Amount of charge given right off the bat. | Seconds | 20s | 0s - 30s |
| Round Charge | Amount of charge given after every meeting. | Seconds | 10s | 0s - 30s |
| Task Charge | Amount of charge given after a task is completed. | Seconds | 7.5s | 0s - 30s |
| Display Cooldown | Cooldown for the Security Button. | Seconds | 15s | 0s - 30s |
| Display Duration | Maximum duration for the Security Button, given that there's enough charge. | Seconds | 15s | ∞ - 30s |