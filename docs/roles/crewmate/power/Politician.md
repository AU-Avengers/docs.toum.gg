import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Politician.png')} alt="Icon" align="left" style={{height: 60}} />

# Politician

### _Campaign to become The Mayor!_

#### **Alignment:** Crewmate Power

The **Politician** must successfully **campaign** at least half of the Crewmates in order to reveal themselves as **The Mayor**. 

Campaigned players will be visible to the Politician with cyan coloured names.

|                                              Button                                              |   Ability    |                  Description                   |           Type           |
| :----------------------------------------------------------------------------------------------: | :----------: | :--------------------------------------------: | :----------------------: |
| <img src={useBaseUrl('/img/CrewButtons/CampaignButton.png')} alt="Button" style={{width: 50}} /> | **Campaign** |               Campaign a player.               |    Player Interaction    |
|  <img src={useBaseUrl('/img/OtherButtons/RevealClean.png')} alt="Button" style={{width: 50}} />  |  **Reveal**  | Reveal yourself as the Mayor during a meeting. | Targeted Meeting Ability |

### Options

| Option                               |                                                        Description                                                        |  Type   | Default |    Range     |
| ------------------------------------ | :-----------------------------------------------------------------------------------------------------------------------: | :-----: | :-----: | :----------: |
| Campaign Cooldown                    |                                         Cooldown for being able to campaign someone.                                      | Seconds |   25s   |   10 - 60s   |
| Prevent Campaigning on Failed Reveal | If the Politician attempts to reveal without enough crew campaigned, they will not be able to Campaign in the next round. | Toggle  |  True   | True / False |
