import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Pestilence.png')} alt="Icon" align="left" style={{height: 60}} />

# Pestilence

### _Horseman of the Apocalypse!_

#### **Alignment:** Neutral Killing

The **Pestillence** wins by being the last killer alive. They are invincible to all interactions and attacks, instantly killing anybody who interacts with them. They can only be defeated by being exiled or guessing incorrectly during meetings.

If enabled, there is a chance that Pestilence will spawn without first being the Plaguebearer.

|                                              Button                                              | Ability  |           Description            |           Type            |
| :----------------------------------------------------------------------------------------------: | :------: | :------------------------------: | :-----------------------: |
| <img src={useBaseUrl('/img/NeutButtons/PestKillButton.png')} alt="Button" style={{width: 50}} /> | **Kill** |          Kill players.           |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/PestVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent** | If enabled, Pestilence can vent. | Basic Ability, if enabled |

### Options

| Option                             | Description                                                                                         |  Type   | Default |    Range     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Pestilence Kill Cooldown           | Cooldown for actively killing players.                                                              | Seconds |   25s   |   10 - 60s   |
| Pestilence Can Vent                | Determines whether the Pestilence can use vents.                                                    | Toggle  |  True   | True / False |
| Instant Pestilence Chance          | Determines whether the Pestilence will spawn at the beginning of the game.                          | Percent |   0%    |   0 - 100%   |
| Announce Pestilence Transformation | Determines whether everyone will be notified that the Plaguebearer has transformed into Pestilence. | Toggle  |  True   | True / False |
