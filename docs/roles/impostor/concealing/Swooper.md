import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Swooper.png')} alt="Icon" align="left" style={{height: 60}} />

# Swooper

### _Turn Invisible Temporarily!_

#### **Alignment:** Impostor Concealing

The **Swooper** can temporarily turn invisible to avoid being seen.

### Abilities

|                                             Button                                             |   Ability   |                                     Description                                      |     Type      |
| :--------------------------------------------------------------------------------------------: | :---------: | :----------------------------------------------------------------------------------: | :-----------: |
|  <img src={useBaseUrl('/img/ImpButtons/SwoopButton.png')} alt="Button" style={{width: 50}} />  |  **Swoop**  |                   Turn invisible to all players except Impostors.                    | Basic Ability |
| <img src={useBaseUrl('/img/ImpButtons/UnswoopButton.png')} alt="Button" style={{width: 50}} /> | **Unswoop** | Cancel your swoop early, or let it finish fully to make yourself visible once again. | Basic Ability |

### Options

| Option         |                    Description                     |  Type   | Default |   Range   |
| -------------- | :------------------------------------------------: | :-----: | :-----: | :-------: |
| Max Swoops     | Maximum times that Swooping is possible per round. |  Uses   |    ∞    |  ∞ - 15   |
| Swoop Cooldown |               Cooldown for swooping.               | Seconds |   10s   | 10s - 60s |
| Swoop Duration |               Duration for swooping.               | Seconds |   25s   | 10s - 60s |
| Can Vent       |        Determines if the Swooper can vent.         | Toggle  |  True   |    N/A    |
