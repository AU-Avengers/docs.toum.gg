import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Aurial.png')} alt="Icon" align="left" style={{height: 60}} />

# Aurial

### _Sense disturbances in your aura!_

#### **Alignment:** Crewmate Investigative

The **Aurial** can sense when someone nearby uses an ability of any kind, and will see an arrow pointing towards the location where the ability was used. If the ability is used within the Aurial's aura (range), the arrow will match the colour of the player, revealing their identity. If the ability is used further away, the Aurial will see a white arrow.

### Options

| Option               |                  Description                  |    Type    | Default |  Range   |
| -------------------- | :-------------------------------------------: | :--------: | :-----: | :------: |
| Radiate Colour Range |      Range where arrows will be colored.      | Multiplier |  0.5x   | 0x - 1x  |
| Max Radiate Range    |         Range where arrows will show.         | Multiplier |  1.5x   | 1x - 5x  |
| Sense Duration       | How long the sense arrow stays on screen for. |  Seconds   |   10s   | 1s - 15s |
