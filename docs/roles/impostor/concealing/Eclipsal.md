import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Eclipsal.png')} alt="Icon" align="left" style={{height: 60}} />
# Eclipsal

The Eclipsal is an Impostor Concealing role that can hinder the vision of all crewmates and neutrals alike, given that they are near the Eclipsal.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/ImpButtons/BlindButton.png')} alt="Button" style={{width: 50}} /> | Blind | Blinding players causes their fog of war to overtake their screen, only letting them see the map and prevents reporting. After a while, they will regain their vision and have vision like normal. | Radius Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Blind Cooldown | Cooldown for blinding players. | Seconds | 25s | 10s - 60s |
| Blind Duration | Duration for blinding players. | Seconds | 25s | 10s - 60s |
| Blind Radius | Radius in which players are blinded. | Multiplier | 1x | 0.25x - 5x |
