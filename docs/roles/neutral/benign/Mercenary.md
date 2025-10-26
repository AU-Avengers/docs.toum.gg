import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Mercenary.png')} alt="Icon" align="left" style={{height: 60}} />

# Mercenary

### _Bribe the Crewmates!_

#### **Alignment:** Neutral Benign

The **Mercenary** is can only win by bribing players, allowing them to gain multiple win conditions.

The Mercenary must **guard** a player and wait for them to be interacted with, which will give the Mercenary gold to **bribe** players with. If a bribed player wins, the Mercenary will win with them.

### Abilities

| Button                                                                                        | Ability   |                         Description                          |        Type        |
| --------------------------------------------------------------------------------------------- | --------- | :----------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/GuardButton.png')} alt="Button" style={{width: 50}} /> | **Guard** |  Guard a player, earning gold if they are interacted with.   | Player Interaction |
| <img src={useBaseUrl('/img/NeutButtons/BribeButton.png')} alt="Button" style={{width: 50}} /> | **Bribe** | Bribe a player, winning alongside them if they win the game. | Player Interaction |

### Options

| Option               | Description                           |  Type   | Default |  Range   |
| -------------------- | ------------------------------------- | :-----: | :-----: | :------: |
| Guard Cooldown       | Cooldown for using the Guard ability. | Seconds |   25s   | 10 - 60s |
| Max Number of Guards | The maximum number of Guard uses.     |  Count  |    6    |  1 -15   |
| Bribe Cost           | How many Golds required per Bribe.    |  Count  |    2    |  1 -15   |
