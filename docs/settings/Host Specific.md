import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Monarch.png')} alt="Icon" align="left" style={{height: 60}} />

# Host Specific Options

Settings for the Host to adjust limits to what the players have access to.

| Option                        |                                                   Description                                                    |  Type  | Default |    Range     |
| ----------------------------- | :--------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :----------: |
| Enable Anti Cheat Warnings    |              This will enable messages for the host to see which mods/add-ons players join the lobby with.               | Toggle |  True   | True / False |
| Kick Players Using Cheat Mods |                       This will automatically kick players who join with known cheat mods.                       | Toggle |  True   | True / False |
| Freeplay Mode                 |                                                       idk                                                        | Toggle |  False  | True / False |
| Allow Lobby-Only No-Clip      |                    This allows players to use the no-clip feature when in lobby (using Ctrl).                    | Toggle |  True   | True / False |
| Allow April Fools Visuals     |             This allows players to use any of the April Fools mode visuals (horse mode, long neck).              | Toggle |  True   | True / False |
| Allow Spectators              | This allows players to use Spectator mode, allowing them to Spectate the game without having to leave the lobby. | Toggle |  True   | True / False |
