import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Executioner.png')} alt="Icon" align="left" style={{height: 60}} />

# Executioner

### _Get Your Target Voted Out to Win!_

#### **Alignment:** Neutral Evil

The **Executioner** wins by getting their target (signified by a brown **X**) ejected in a meeting.

If enabled, when the Executioner wins, they may leave the game in victory and **taunt** another player, choosing to kill someone from the players who voted for the Executioner's target.

### Options

| Option                               | Description                                                        |  Type  |      Default      |                      Range                      |
| ------------------------------------ | ------------------------------------------------------------------ | :----: | :---------------: | :---------------------------------------------: |
| On Target Death, Executioner Becomes | Determines what role the Executioner becomes if their target dies. | String |      Jester       | Jester / Crew / Amnesiac / Survivor / Mercenary |
| Executioner Can Button               | Determines whether the Executioner can use the Emergency Button.   | Toggle |       True        |                  True / False                   |
| Executioner Win                      | Determines what happens if the Executioner wins.                   | String | Leaves & Torments |     Leaves & Torments / Ends Game / Nothing     |
