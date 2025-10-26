import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Veteran.png')} alt="Icon" align="left" style={{height: 60}} />

# Veteran

### _Alert to Kill Anyone Who Interacts With You!_

#### **Alignment:** Crewmate Killing

The **Veteran** can go on **alert** and will kill anyone who interacts with them, except for Pestilence and shielded players, who will ignore the attack.

### Abilities

|                                            Button                                             |  Ability  |                                 Description                                 |     Type      |
| :-------------------------------------------------------------------------------------------: | :-------: | :-------------------------------------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/CrewButtons/AlertButton.png')} alt="Button" style={{width: 50}} /> | **Alert** | While Alerted, you will kill anybody that interacts with you (good or bad). | Basic Ability |

### Options

| Option                              | Description                                  |  Type   | Default |    Range     |
| ----------------------------------- | -------------------------------------------- | :-----: | :-----: | :----------: |
| Alert Cooldown                      | Cooldown for using the Alert ability.            | Seconds |   25s   |  10s - 60s   |
| Alert Duration                      | How long the Alert will last when active.    | Seconds |   25s   |  10s - 60s   |
| Max Number of Alerts                | Maximum Alerts that can be used each game.   |  Uses   |    5    |    1 - 15    |
| Can Be Killed On Alert              | Determines if the Veteran can die on Alert.  | Toggle  |  False  | True / False |
| Get More Uses From Completing Tasks | Determines if doing tasks earns more Alerts. | Toggle  |  True   | True / False |
