import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/SoulCollector.png')} alt="Icon" align="left" style={{height: 60}} />

# Soul Collector

### _Reap the Souls of Others!_

#### **Alignment:** Neutral Killing

The **Soul Collector** can **reap** the soul of players, leaving behind a lifeless decoy that looks identical to the reaped player standing still wherever they were reaped. Because of this, the Soul Collector cannot trigger the Bait or Noisemaker modifiers.

### Abilities

|                                               Button                                               | Ability  |               Description                |           Type            |
| :------------------------------------------------------------------------------------------------: | :------: | :--------------------------------------: | :-----------------------: |
|    <img src={useBaseUrl('/img/NeutButtons/ReapButton.png')} alt="Button" style={{width: 50}} />    | **Reap** |        Reap the soul of a player.        |    Player Interaction     |
| <img src={useBaseUrl('/img/NeutButtons/ReaperVentButton.png')} alt="Button" style={{width: 50}} /> | **Vent** | If enabled, the Soul Collector can vent. | Basic Ability, if enabled |

### Options

| Option                  | Description                                     |  Type   | Default |    Range     |
| ----------------------- | ----------------------------------------------- | :-----: | :-----: | :----------: |
| Reap Cooldown           | Cooldown for using the Infect ability.          | Seconds |   25s   |   10 - 60s   |
| Soul Collector Can Vent | Determines whether the Soul Collector can vent. | Toggle  |  False  | True / False |
