import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Engineer.png')} alt="Icon" align="left" style={{height: 60}} />

# Engineer

### _Maintain Important Systems on the Ship!_

#### **Alignment:** Crewmate Support

The **Engineer** can use the **vent** systems and **fix** active sabotages remotely.

### Abilities

|                                              Button                                              | Ability  |              Description              |     Type      |
| :----------------------------------------------------------------------------------------------: | :------: | :-----------------------------------: | :-----------: |
|   <img src={useBaseUrl('/img/CrewButtons/FixButton.png')} alt="Button" style={{width: 50}} />    | **Fix**  |   Remotely fix an active Sabotage.    | Basic Ability |
| <img src={useBaseUrl('/img/CrewButtons/EngiVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent** | Use the vents to move around the map. | Basic Ability |

### Options

| Option                                       |                          Description                          |  Type   | Default |    Range     |
| -------------------------------------------- | :-----------------------------------------------------------: | :-----: | :-----: | :----------: |
| Vent Uses Per Game                           |    Determines how many times the Engineer is able to vent.    |  Count  |    ∞    |    5 - 30    |
| ┗ Earn More Vent Uses From Completing Tasks |        Determines if doing tasks earns more Vent uses.        | Toggle  |  True   | True / False |
| Vent Cooldown                                |           Cooldown for being able to use the vents.           | Seconds |   15s   |   0 - 25s    |
| Vent Duration                                |   Determines how long the Engineer can stay inside a vent.    | Seconds |   10s   | 5 - 25s / ∞  |
| Fixes Per Game                               | How many times the Engineer can use the Fix ability per game. |  Count  |    5    |    1 - 15    |
| Fix Delay                                    |  How long it takes for the Fix to stop the active sabotage.   | Seconds |  0.5s   |    0 - 5s    |
