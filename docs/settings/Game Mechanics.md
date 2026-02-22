import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Engineer.png')} alt="Icon" align="left" style={{height: 60}} />

# Game Mechanics

| Option                                                       |                                 Description                                 |  Type  |    Default     |                   Range                   |
| ------------------------------------------------------------ | :-------------------------------------------------------------------------: | :----: | :------------: | :---------------------------------------: |
| Ghostwalkers Can Fix Sabotages                               |   Determines whether the Haunter and/or Phantom is able to fix sabotages.   | Toggle |     False      |               True / False                |
| Pet Visibility                                               |                    Determines if/when pets are visible.                     | String | Always Visible | Always Visible / Client Side / When Alive |
| ┗ If **Always Visible**: Remove Pets Upon Janitor/Chef Clean | Determines if the player's pet will be removed after their body is cleaned. | Toggle |      True      |               True / False                |
| Temp Save Cooldown Reset                                     |      How much a cooldown is reset by if attacking a protected player.       | Count  |       5s       |                  0 - 15s                  |
