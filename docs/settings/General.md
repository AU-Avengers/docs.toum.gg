import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Marshal.png')} alt="Icon" align="left" style={{height: 60}} />

# General Settings

Overall settings for the mod.

| Option                                |                                         Description                                         |  Type  | Default |    Range     |
| ------------------------------------- | :-----------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Impostors Don't Know Each Other       |             Determines if the Impostors will know who their partner is or not.              | Toggle |  False  | True / False |
| Impostors Know Each Other's Roles     |                   Determines if the Impostors can see each other's roles.                    | Toggle |  True   | True / False |
| Impostors Get a Private Meeting Chat  |             Determines if the Impostors can use a private chat during meetings.             | Toggle |  True   | True / False |
| Vampires Get a Private Meeting Chat   |               Determines if Vampires can use a private chat during meetings.                | Toggle |  True   | True / False |
| Voting Time Added After Meeting Death | Determines how much time is added to the meeting timer if a player dies during the meeting. | Count  |   5s    |   0 - 15s    |
