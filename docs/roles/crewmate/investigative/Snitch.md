import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Snitch.png')} alt="Icon" align="left" style={{height: '60px', margin: '00px 10px 00px -10px'}} />

# Snitch

### _Complete your tasks to find the Impostors!_

#### Alignment: Crewmate Investigative

The **Snitch** must race to complete their tasks in order to reveal the Impostors.

Upon completing all tasks, the Impostors will be revealed to the Snitch with arrows and red names. However, the Snitch will also be revealed to the Impostors. The Snitch must survive to the next meeting and cannot be shot by the Impostors once revealed.

### Options

| Option                              |                                                  Description                                                   |  Type  | Default |    Range     |
| ----------------------------------- | :------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Snitch Reveals Neutral Killers      |                      Toggles whether Neutral Killers are revealed to the Snitch as well.                       | Toggle |  True   | True / False |
| Snitch Sees Traitor                 |                          Toggles whether a turned Traitor is revealed to the Snitch.                           | Toggle |  True   | True / False |
| Snitch Sees Impostors In Meetings   |                        Toggles whether or not they see reveal players during meetings.                         | Toggle |  True   | True / False |
| Snitch Sees Revealed Players' Roles |                Toggles whether or not the Snitch can see the roles of the players they reveal.                 | Toggle |  False  | True / False |
| Tasks Remaining When Revealed       | How many tasks does the Snitch need to have left before Impostors are alerted to their existence and location. | Count  |    1    |    1 - 3     |
