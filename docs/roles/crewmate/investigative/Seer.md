import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Seer.png')} alt="Icon" align="left" style={{height: '60px', margin: '00px 10px 00px -10px'}} />

# Seer

### _Reveal alliances to find evildoers!_

#### Alignment: Crewmate Investigative

The **Seer** can compare the alignments of other players, learning if players are friendly or enemies by using their **Intuit** and **Gaze** abilities, or **Reveal** if comparing alignments only.

### Abilities

| Button                                                                                       |  Ability   |                                             Description                                              |        Type        |
| -------------------------------------------------------------------------------------------- | :--------: | :--------------------------------------------------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/SeerButton.png')} alt="Button" style={{width: 50}} /> | **Intuit** | Chooses a player to compare alliances of others to. The target can be changed within the same round. | Player Interaction |
| <img src={useBaseUrl('/img/CrewButtons/SeerButton.png')} alt="Button" style={{width: 50}} /> |  **Gaze**  |              Reveals the alliance between the target players when comparing alignments.              | Player Interaction |
| <img src={useBaseUrl('/img/CrewButtons/SeerButton.png')} alt="Button" style={{width: 50}} /> | **Reveal** |                Reveals the alliance of target players when revealing alignments only.                | Player Interaction |

### Role Settings

| Option                                         | Description                                                       |  Type   | Default  |    Range     |
| ---------------------------------------------- | ----------------------------------------------------------------- | :-----: | :------: | :----------: |
| Compare Players Instead of Checking Alignments | Determines whether the Seer will compare or reveal alignments.    | Toggle  |   True   | True / False |
| Reveal / Compare Cooldown                      | Cooldown for using the Reveal ability                             | Seconds | 10 - 60s |     20s      |
| Max Uses of Reveal / Compare                   | Maximum number of times the Reveal / Compare ability can be used. |  Count  |    5     |  1 - 15 / ∞  |

### If Set to Compare Alignments

| Option                                | Description                                   |  Type  |   Default    | Range |
| ------------------------------------- | --------------------------------------------- | :----: | :----------: | :---: |
| ┣ Neutral Benigns Shows Friends to All  | Determines if Neutral Benign roles will show as friendly. | Toggle | True / False | False |
| ┣ Neutral Evils Shows Friends to All    | Determines if Neutral Evil roles will show as friendly. | Toggle | True / False | False |
| ┗ Neutral Outliers Shows Friends to All | Determines if Neutral Outlier roles will show as friendly. | Toggle | True / False | False |

### If Set to Check (Reveal) Alignments

| Option                           | Description                                                               |  Type  |   Default    | Range |
| -------------------------------- | ------------------------------------------------------------------------- | :----: | :----------: | :---: |
| ┣ Crewmate Killing Roles are Red | Determines if the names of CK roles will show as red when revealed.       | Toggle | True / False | False |
| ┣ Neutral Benign Roles Are Red   | Determines if the names of NB roles will show as red when revealed.       | Toggle | True / False | False |
| ┣ Neutral Evil Roles Are Red     | Determines if the names of NE roles will show as red when revealed.       | Toggle | True / False | False |
| ┣ Neutral Killing Roles Are Red  | Determines if the names of NK roles will show as red when revealed.       | Toggle | True / False | True  |
| ┣ Neutral Outlier Roles Are Red  | Determines if the names of NO roles will show as red when revealed.       | Toggle | True / False | False |
| ┗ Traitor Swaps Colors           | Determines if the Traitor's name will turn red if they have been revealed. | Toggle | True / False | True  |
