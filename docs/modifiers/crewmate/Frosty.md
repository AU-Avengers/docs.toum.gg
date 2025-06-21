import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Frosty.png')} alt="Icon" align="left" style={{height: 60}} />
# Frosty

#### Crewmate Postmortem

After you die, your killer will be slowed down!

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Chill Duration | How long the killer is chilled for. | Seconds | 10s | 0s - 15s |
| Chill Start Speed | The speed multiplier applied to the killer while chilled. | Multiplier | 0.75x | 0.25x - 0.95x |
