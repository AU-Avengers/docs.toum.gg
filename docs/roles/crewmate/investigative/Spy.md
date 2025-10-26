import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Spy.png')} alt="Icon" align="left" style={{height: '60px', margin: '00px 10px 00px -10px'}} />

# Spy

### _Snoop around and find stuff out!_

#### Alignment: Crewmate Investigative

<img src={useBaseUrl('/img/RoleScreenshots/Spy.gif')} align="right" style={{margin: '00px 10px 00px 10px'}} />
The **Spy** gains extra information by using the Admin table.

When viewing **Admin**, the Spy sees the locations of all living players across the map, identified by their colours, making it easier to track and verify locations when giving alibis. The map will update whenever a player moves from one area to another, including through vent systems, as long as they are in a named location (they will not be visible outside or in hallways).

Depending on settings, the Spy may also have access to a **Portable Admin** table, which they can activate remotely and recharge by completing tasks.

### Abilities

| Button                                                                                         | Ability |                          Description                           | Type |
| ---------------------------------------------------------------------------------------------- | :-------: | :------------------------------------------------------------: | :--: |
| <img src={useBaseUrl('/img/OtherButtons/AdminButton.png')} alt="Button" style={{width: 50}} /> | **Admin** | Opens up the admin table for a set total duration between uses. | Menu |

### Options

| Option                     |                                      Description                                       |  Type   | Default |                   Range                    |
| -------------------------- | :------------------------------------------------------------------------------------: | :-----: | :-----: | :----------------------------------------: |
| Who Sees Bodies On Admin   |                           Changes who sees bodies on admin.                            | String  | Nobody  | Nobody / Spy / Everyone But Spy / Everyone |
| Portable Admin             | Determines if the Spy (Role and/or/nor the Modifier) has access to the portable Admin. | String  |  Both   |      Role / Modifier / Both / Neither      |
| ┣ Move With Portable Admin |              Determines if you can move around with Portable Admin open.               | Toggle  |  True   |                True / False                |
| ┣ Starting Charge          |                       Amount of charge given right off the bat.                        | Seconds |   20s   |                  0s - 30s                  |
| ┣ Round Charge             |                      Amount of charge given after every meeting.                       | Seconds |   15s   |                  0s - 30s                  |
| ┣ Task Charge              |                   Amount of charge given after a task is completed.                    | Seconds |   10s   |                  0s - 30s                  |
| ┣ Display Cooldown         |                        Cooldown for the Portable Admin Button.                         | Seconds |   15s   |                  0s - 30s                  |
| ┗ Display Duration         |   Maximum duration for the Portable Admin Button, given that there's enough charge.    | Seconds |   15s   |                  ∞ - 30s                   |
