import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Engineer.png')} alt="Icon" align="left" style={{height: 60}} />

# Round Start Options

Settings for the first round of a game.

| Option                               |                                           Description                                           |  Type  |      Default       |                     Range                     |
| ------------------------------------ | :---------------------------------------------------------------------------------------------: | :----: | :----------------: | :-------------------------------------------: |
| Modifier Type to Show in Role Intro  |       Determines which of your modifiers (if any) is shown during the role intro screen.        | String |     Universal      |        Universal / Alliance / Neither         |
| Show Faction Modifier on Role Reveal |           Determines if your Faction modifier is shown during the role intro screen.            | Toggle |        True        |                 True / False                  |
| Initial Button Cooldowns             |                The cooldown for using buttons in the first round of a new game.                 | Count  |        10s         |                   10 - 30s                    |
| Initial Cooldowns Apply For          |                         Determines who the initial cooldown applies to.                         | String | Specific Cooldowns | Specific Cooldowns / No Buttons / All Buttons |
| ┣ Minimum Cooldown to be Applicable  |                                If set to **Specific Cooldowns**.                                | Count  |         5s         |                    0 - 60s                    |
| ┗ Maximum Cooldown to be Applicable  |                                If set to **Specific Cooldowns**.                                | Count  |        60s         |                    0 - 60s                    |
| First Death Shield Next Game         | Determines if the person who dies first will have a shield in the first round of the next game. | Toggle |        True        |                 True / False                  |
| Indicate Round One Victims           |          Shows the players who died in Round One of the previous game during meetings.          | Toggle |        True        |                 True / False                  |
