import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Amnesiac.png')} alt="Icon" align="left" style={{height: 60}} />

# Amnesiac

### _Remember a Role of a Deceased Player!_

#### **Alignment:** Neutral Benign

The **Amnesiac** must **remember** who they are by finding a dead body and taking the role of the dead player. If the dead body's role is a unique role, they will remember the base faction's role instead.

### Abilities

| Button                                                                                           | Ability      |             Description              |        Type        |
| ------------------------------------------------------------------------------------------------ | ------------ | :----------------------------------: | :----------------: |
| <img src={useBaseUrl('/img/NeutButtons/RememberButton.png')} alt="Button" style={{width: 50}} /> | **Remember** | Remember of the role of a dead body. | Player Interaction |

### Options

| Option                             | Description                                                                |  Type   | Default |    Range     |
| ---------------------------------- | -------------------------------------------------------------------------- | :-----: | :-----: | :----------: |
| Show Arrow Pointing to Dead Bodies | Determines whether the Amnesiac will see arrows pointing to dead bodies.   | Toggle  |  True   | True / False |
| Time After Death Arrow Appears     | Determines how long after a player dies before the Amnesiac arrow appears. | Seconds |   5s    |   0 - 15s    |
