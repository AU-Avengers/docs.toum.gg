import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Scavenger.png')} alt="Icon" align="left" style={{height: 60}} />

# Scavenger

### _Hunt Down Your Prey!_

#### **Alignment:** Impostor Killing

The **Scavenger** must kill their targets (this will be the closest player to the Scavenger when their target resets). If they kill their target, they get a reduced kill cooldown, but if they don't, their cooldown is increased significantly.

### Options

| Option                    |                           Description                            |    Type    | Default |   Range    |
| ------------------------- | :--------------------------------------------------------------: | :--------: | :-----: | :--------: |
| Scavenge Duration         |                  How long Scavenging lasts for.                  |  Seconds   |   25s   | 10s - 60s  |
| Increased Duration        |              Increased Scavenge duration per kill.               |  Seconds   |   10s   |  5s - 15s  |
| Correct Kill Cooldown     |            Kill Cooldown given after a corrent kill.             |  Seconds   |   10s   |  5s - 15s  |
| Incorrect Kill Multiplier | Multiplier applied to the kill cooldown after an incorrect kill. | Multiplier |   3x    | 1.25x - 5x |
