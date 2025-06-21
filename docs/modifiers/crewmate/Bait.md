import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Bait.png')} alt="Icon" align="left" style={{height: 60}} />
# Bait

#### Crewmate Postmortem

After you die, your killer will self-report, reporting your body.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Min Delay | Minimum amount of time where bait will automatically report. | Seconds | 0s | 0s - 15s |
| Max Delay | Maximum amount of time where bait will automatically report. | Seconds | 1s | 0s - 15s |
