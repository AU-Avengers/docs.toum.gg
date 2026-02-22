import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Engineer.png')} alt="Icon" align="left" style={{height: 60}} />

# Vanilla Tweaks

Settings for altering the vanilla experience.

| Option                                |                                                             Description                                                              |  Type  | Default |           Range            |
| ------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :------------------------: |
| Max Players Alive When Vents Disable  |              Determines how many players must be alive when vents become disabled. 2 is the default for 1v1 situations.              | Count  |    2    |           1 - 15           |
| Continue Cooldown in Tasks and Panels |               Allows ability/kill cooldowns to continue to reduce when in a task or panels (e.g. when fixing lights).                | Toggle |  True   |        True / False        |
| Parallel Medbay Scans                 |                                       Allows multiple players to Medbay scan at the same time.                                       | Toggle |  True   |        True / False        |
| Walk to Medscan                       | Allows players to complete Medscan without being forced to walk onto the task itself. This removes clears based on doing "the walk". | Toggle |  True   |        True / False        |
| Disable Meeting Skip Button           |                                                Determines if/when the Skip button is                                                 | String |  Never  | Never / Always / Emergency |
| Hide Vent Animations Not in Vision    |                         Determines if players will see vent animations if they are outside of their vision.                          | Toggle |  True   |        True / False        |
