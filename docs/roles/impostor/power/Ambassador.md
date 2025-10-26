import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Ambassador.png')} alt="Icon" align="left" style={{height: 60}} />

# Ambassador

### _Lead the Impostors to Victory!_

#### **Alignment:** Impostor Power

The **Ambassador** can **retrain** Impostors into other Impostor roles of the same caliber.

Impostor Concealing/Support Roles can become other Concealing and Support roles, while Impostor Killing and Power roles can be any Non-Power roles.

<img src={useBaseUrl('/img/RoleScreenshots/AmbassadorRetrain.png')} alt="Ambassador Retrain UI" style={{height: '300px'}} />

### Abilities

|                                             Button                                              |   Ability   | Description                                                             |           Type           |
| :---------------------------------------------------------------------------------------------: | :---------: | ----------------------------------------------------------------------- | :----------------------: |
| <img src={useBaseUrl('/img/OtherButtons/RetrainClean.png')} alt="Button" style={{width: 50}} /> | **Retrain** | Retrain yourself or other Impostors into a role within their alignment. | Targeted Meeting Ability |

### Options

| Option                                            | Description                                                                                               |  Type  | Default |    Range     |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | :----: | :-----: | :----------: |
| Max Retrains Available                            | Maximum number of times the Ambassador can Retrain an Impostor.                                           | Count  |    2    |    1 - 3     |
| Retrain Requires Confirmation                     | Determines whether the chosen player must accept or deny the Retrained role.                              | Toggle |  True   | True / False |
| Kills Needed by Ambassador or Teammate to Retrain | Determines whether Ambassador or Impostor partner must have set amount of kills to unlock the Retrain ability. | Count  |    2    |    1 - 4     |
| Round in Which Retraining is Possible             | Determines which round the Ambassador can Retrain from.                                                   |   2    |  1 - 5  |
| Rounds Needed to Retrain Again                    | Determines how many rounds the Ambassador must wait to Retrain again.                                     |   2    |  1 - 5  |
