import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Fairy.png')} alt="Icon" align="left" style={{height: 60}} />

# Fairy
##### Aliases: Guardian Angel (TOUR)
### _Protect your target with your life!_

#### **Alignment:** Neutral Benign

The **Fairy** must **protect** their target (signified by a light blue **★**) from getting killed or ejected. They can give their target a temporary shield to protect them from being killed during rounds. The Guardian Angel wins if their target does.

### Abilities

| Button                                                                                          | Ability     |              Description               |     Type      |
| ----------------------------------------------------------------------------------------------- | ----------- | :------------------------------------: | :-----------: |
| <img src={useBaseUrl('/img/NeutButtons/ProtectButton.png')} alt="Button" style={{width: 50}} /> | **Protect** | Protect your target from being killed. | Basic Ability |

### Options

| Option                      | Description                                                                                        |  Type   |   Default   |                        Range                        |
| --------------------------- | -------------------------------------------------------------------------------------------------- | :-----: | :---------: | :-------------------------------------------------: |
| Protect Cooldown            | Cooldown for using the Protect ability.                                                            | Seconds |     25s     |                      10 - 60s                       |
| Protect Duration            | How long the Protect shield will last.                                                             | Seconds |     10s     |                       5 - 15s                       |
| Max Number of Protect       | Max number of times the Fairy can Protect their target.                                   |  Count  |      5      |                       1 - 15                        |
| Show Protected Player       | Determines who can see the Protect shield.                                                         | String  | Target + GA |           Target / Target + GA / Everyone           |
| On Target Death, GA Becomes | Determines what role the GA will become if their target dies.                                      | String  |  Amnesiac   | Amnesiac / Survivor / Mercenary / Jester / Crewmate |
| Target Knows GA Exists      | Determines if the target knows they have a GA (signified by a light blue **★** by their own name). | Toggle  |    True     |                    True / False                     |
| GA Knows Target Roles       | Determines if the GA knows the role of their target.                                               | Toggle  |    True     |                    True / False                     |
| Odds of Target Being Evil   | The chance of the target being an Evil role.                                                       | Percent |     20%     |                      0 - 100%                       |
