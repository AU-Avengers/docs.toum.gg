import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Engineer.png')} alt="Icon" align="left" style={{height: 60}} />

# Postmodtem Options

| Option                           |                                                                  Description                                                                   |  Type  |                                 Default                                  |                         Range                         |
| -------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------: | :----: | :----------------------------------------------------------------------: | :---------------------------------------------------: |
| The Dead Know Players            | Determines whether dead players can see the roles, modifiers and status effects of living players (e.g., can see Shields, interaction symbols). | Toggle |                                   True                                   |                     True / False                      |
| The Dead See Votes               |                                  Dead players can see who votes for who, even if anonymous voting is enabled.                                  | Toggle |                                   True                                   |                     True / False                      |
| The Dead See Private Chat        |                                          Dead players can see private chats, e.g., Lovers/Team chats.                                           | String | Disabled Upon Death (cannot see chats in the same round the player dies) | Disabled Upon Death / In Meetings / Always / Disabled |
| Haunt (Follow) Mode              |                                      Determines if/when dead players can use the Haunt (follow) function.                                      | String |                           Disabled Upon Death                            |        Disabled Upon Death / Always / Disabled        |
| Temporarily Hide Chat Upon Death |                                                Hides chat for a short time after a player dies.                                                | Toggle |                                   True                                   |                     True / False                      |
