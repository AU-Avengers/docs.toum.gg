import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Venerer.png')} alt="Icon" align="left" style={{height: 60}} />
# Venerer

The Venerer is an Impostor Concealing role that can kill players to gain new abilities, preventing others from catching them! However, the ability will be used immediately as they receive it, which will stack up.

On top of that, the Venerer's visibility modifiers (Like Giant, Mini, Flash) will not be visible when their ability is active.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/ImpButtons/CamouflageButton.png')} alt="Button" style={{width: 50}} /> | Camouflage | Stage 1 of the abilities. You will appear as a gray bean for all players, allowing you to sneak away from kills. | Basic Ability |
| <img src={useBaseUrl('/img/ImpButtons/CamoSprintButton.png')} alt="Button" style={{width: 50}} /> | Sprint | Stage 2 of the abilities. You will gain the speed of the Flash while hidden from camo. | Basic Ability |
| <img src={useBaseUrl('/img/ImpButtons/CamoSprintFreezeButton.png')} alt="Button" style={{width: 50}} /> | Freeze | The Final Stage of the abilities. You will slow down players around you in a radius, as well as being fast and hidden from camo. | Basic Ability |

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Cooldown | Cooldown for the Ability. | Seconds | 25s | 10s - 60s |
| Duration | Duration for the Ability. | Seconds | 10s | 5s - 15s |
| Sprint Speed | Speed multiplier applied with Sprint active. | Multiplier | 1.25x | 1.05x - 2.5x |
| Min Freeze Speed | Speed multiplier for players around the Venerer while Freeze is active. | Multiplier | 0.25x | 0.05x - 0.75x |
| Freeze Radius | Radius in which players are frozen around the Venerer while Freeze is active. | Multiplier | 1x | 0.25x - 5x |
