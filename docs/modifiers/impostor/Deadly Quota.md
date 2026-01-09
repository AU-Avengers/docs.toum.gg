import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/DeadlyQuota.png')} alt="Icon" align="left" style={{height: 60}} />

# Deadly Quota

#### Impostor Passive

You must meet your quota or lose the game, even if Impostors win.

### Options

| Option                              |                       Description                       |  Type  | Default |    Range     |
| ----------------------------------- | :-----------------------------------------------------: | :----: | :-----: | :----------: |
| Minimum Kill Quota                  | The minimum number of kills required to meet the quota. | Count  |    2    |    1 - 5     |
| Maximum Kill Quota                  |          The maximum number of kills required.          | Count  |    4    |    1 - 5     |
| Temporary Shield Until Quota Is Met | Determines if the player will have a temporary shield.  | Toggle |  False  | True / False |
| Remove Quota Upon Death             |     Removes the required quota if the player dies.      | Toggle |  True   | True / False |
