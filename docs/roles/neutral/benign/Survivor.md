import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Survivor.png')} alt="Icon" align="left" style={{height: 60}} />

# Survivor

### _Do Whatever It Takes To Live!_

#### **Alignment:** Neutral Benign

The **Survivor** must survive for the entire game in order to win alongside whichever team wins the game. They are able to protect themselves with a temporary **safeguard** vest, preventing them from being killed.

### Abilities

| Button                                                                                       | Ability       |                  Description                   |     Type      |
| -------------------------------------------------------------------------------------------- | ------------- | :--------------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/NeutButtons/VestButton.png')} alt="Button" style={{width: 50}} /> | **Safeguard** | Temporarily shield yourself from being killed. | Basic Ability |

### Options

| Option                            | Description                                                                                                                                                               |  Type   | Default |    Range     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Vest Cooldown                     | Cooldown for using the Safeguard ability.                                                                                                                                 | Seconds |   25s   |   10 - 60s   |
| Vest Duration                     | How long the Safeguard vest will last.                                                                                                                                    | Seconds |   10s   |   10 - 15s   |
| Max Number of Vests               | Maximum number of vests that can be used per game.                                                                                                                        |  Count  |   10    |    1 - 15    |
| Survivor Scatter Mechanic Enabled | Determines whether the Scatter mechanic is enabled, which forces the Survivor to move a certain distance within a set time. If they don't move far enough, they will die. | Toggle  |  False  | True / False |
| Survivor Scatter Timer            | Scatter timer duration.                                                                                                                                                   | Seconds |   25s   |   10 - 60s   |
