import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Traitor.png')} alt="Icon" align="left" style={{height: 60}} />

# Role Settings

Settings for game modes as well as role spawns.

| Option                  |                          Description                          |    Type    |  Default  |               Range                |
| ----------------------- | :-----------------------------------------------------------: | :--------: | :-------: | :--------------------------------: |
| Current Game Mode       |               Determines the active game mode.                |   String   |  Normal   |  Normal / Hide and Seek / Cultist  |
| Role Assignment Type    |              Determines how roles are assigned.               |   String   | Role List | Role List / Min/Max List / Vanilla |
| ┣ Reduce Impostor Steak | Reduces the chance of being Impostor multiple times in a row. | Percentage |    15%    |              0 - 100%              |
| ┗ Reduction Chance      |          The percentage your chances are reduced by.          | Percentage |    15%    |              0 - 100%              |
