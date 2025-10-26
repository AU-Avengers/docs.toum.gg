import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Prosecutor.png')} alt="Icon" align="left" style={{height: 60}} />

# Prosecutor

### _Exile players of your choosing!_

#### **Alignment:** Crewmate Power

The **Prosecutor** can exile a player during a meeting, casting their vote to overpower all others. They can also see who voted for who, even if voting is anonymous.

**Note:** An **Imitator** Prosecutor cannot use the Prosecute ability, but can see votes.

|    Ability    |                                         Description                                          |           Type           |
| :-----------: | :------------------------------------------------------------------------------------------: | :----------------------: |
| **Prosecute** | Exile any player of your choosing, throwing five votes on them and ignoring all other votes. | Targeted Meeting Ability |

### Options

| Option                                     |                                       Description                                        |  Type  | Default |    Range     |
| ------------------------------------------ | :--------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Prosecutor Dies When They Exile a Crewmate | If a Crewmate is prosecuted, the Prosecutor will die after the meeting as a consequence. | Toggle |  True   | True / False |
| Max Prosecutions                           |      The maximum number of times the Prosecutor can successfully Prosecute someone.      | Count  |    2    |    1 - 5     |
