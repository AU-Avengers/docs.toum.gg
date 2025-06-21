import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Scientist.png')} alt="Icon" align="left" style={{height: 60}} />
# Scientist

#### Crewmate Utility

Access Vitals anytime, anywhere with a limited battery charge.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Move With Vitals | Determines if you can move around with vitals open. | Toggle | True | N/A |
| Starting Charge | Amount of charge given right off the bat. | Seconds | 20s | 0s - 30s |
| Round Charge | Amount of charge given after every meeting. | Seconds | 15s | 0s - 30s |
| Task Charge | Amount of charge given after a task is completed. | Seconds | 10s | 0s - 30s |
| Display Cooldown | Cooldown for the Vitals Button. | Seconds | 15s | 0s - 30s |
| Display Duration | Maximum duration for the Vitals Button, given that there's enough charge. | Seconds | 15s | ∞ - 30s |
