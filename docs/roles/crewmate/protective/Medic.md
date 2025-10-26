import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Medic.png')} alt="Icon" align="left" style={{height: 60}} />

# Medic

### _Create a Shield to Protect a Crewmate!_

#### **Alignment:** Crewmate Protective

The **Medic** can give a Shield to a player of their choice, protecting the player from being killed.

### Abilities

|                                            Button                                             |  Ability   |                          Description                          |        Type        |
| :-------------------------------------------------------------------------------------------: | :--------: | :-----------------------------------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/CrewButtons/MedicButton.png')} alt="Button" style={{width: 50}} /> | **Shield** | Give a Shield to a player, protecting them from being killed. | Player Interaction |

### Options

| Option                                  |                                                          Description                                                           |  Type   |     Default      |                          Range                          |
| --------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: | :-----: | :--------------: | :-----------------------------------------------------: |
| Show Shielded Player                    |                                            Determines who can see the Medic Shield.                                            | String  | Shielded + Medic | Shielded + Medic / Medic / Shielded / Everyone / No One |
| Who Gets Murder Attempt Indicator       |                       Determines who will get a green flash alert when the Shielded player is attacked.                        | String  |      Medic       | Shielded + Medic / Medic / Shielded / Everyone / No One |
| Can Give Shield Away Next Round         |                       Determines whether the Medic can give the Shield to a different player each round.                       | Toggle  |       True       |                      True / False                       |
| ┗ Max Amount of Shield Uses             |                         Determines how many times the Medic can give the Shield to different players.                          |  Count  |        3         |                       1 - 15 / ∞                        |
| Shield Breaks on Murder Attempt         |                         Determines whether the Shield is broken when the Shielded Player is attacked.                          | Toggle  |      False       |                      True / False                       |
| Show Reports in Chat                    |                 Determines whether the Medic will get reports in chat during meetings, if they report a body.                  | Toggle  |       True       |                      True / False                       |
| ┣ Time Where Medic Will Have Name       |         If the Medic reports a body in the set time, they will see the name of the killer in chat during the meeting.          | Seconds |       0.0s       |                         0 - 60s                         |
| ┗ Time Where Medic Will Have Color Type | If the Medic reports a body in the set time, they will see information on the colour type of the killer (e.g., darker/lighter). | Seconds |       15s        |                         0 - 60s                         |
