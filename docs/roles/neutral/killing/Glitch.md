import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Glitch.png')} alt="Icon" align="left" style={{height: 60}} />

# Glitch

### _Murder, Mimic, Hack... Data Lost!_

#### **Alignment:** Neutral Killing

The **Glitch** wins by being the last killer alive. They can **Mimic** into another player, temporarily taking on their appearance, or they can **Hack** a player, temporarily preventing them from using any abilities.

### Abilities

|                                               Button                                               |  Ability  |                             Description                              |           Type            |
| :------------------------------------------------------------------------------------------------: | :-------: | :------------------------------------------------------------------: | :-----------------------: |
|   <img src={useBaseUrl('/img/NeutButtons/MimicButton.png')} alt="Button" style={{width: 50}} />    | **Mimic** |         Mimic the appearance of another player temporarily.          |    Player Interaction     |
|    <img src={useBaseUrl('/img/NeutButtons/HackButton.png')} alt="Button" style={{width: 50}} />    | **Hack**  | Hack a player, temporarily preventing them from using any abilities. |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/GlitchVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent**  |                If enabled, the Glitch can use vents.                 | Basic Ability, if enabled |

### Options

| Option                                | Description                                                        |  Type   | Default |    Range     |
| ------------------------------------- | ------------------------------------------------------------------ | :-----: | :-----: | :----------: |
| Kill Cooldown                         | Cooldown for killing.                                              | Seconds |   25s   |   10 - 60s   |
| Mimic Cooldown                        | Cooldown for using the Mimic ability.                              | Seconds |   25s   |   10 - 60s   |
| Mimic Duration                        | How long the Mimic ability lasts.                              | Seconds |   10s   |   5 - 15s    |
| Move While Using Mimic Menu (KB ONLY) | Determines whether the Glitch can use the Mimic Menu while moving. | Toggle  |  True   | True / False |
| Hack Cooldown                         | Cooldown for using the Hack ability.                               | Seconds |   25s   |   10 - 60s   |
| Hack Duration                         | How long the Hack will last, stopping players from using any abilities. | Seconds |   25s   |   10 - 60s   |
| Glitch Can Vent                       | Determines whether the Glitch can use vents.                       | Toggle  |  True   | True / False |
