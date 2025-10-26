import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Warlock.png')} alt="Icon" align="left" style={{height: 60}} />

# Warlock

### _Charge Up Your Power to Multi-Kill!_

#### **Alignment:** Impostor Killing

The **Warlock** can charge up attacks to wipe out the crew quickly with a multi-kill attack.

The Warlock's kill button has three stages: **_Cooldown, Uncharged, and Charged_**. The Warlock cannot kill while on **_Cooldown_**, but they can kill while their power is charging (although this will reset the charge to 0). The higher the charge, the more power the Warlock has to unleash. At 100%, the Warlock can multi-kill for a set duration by repeatedly clicking the Kill button on nearby players.

### Options

| Option                                         |                 Description                 |    Type    | Default |   Range    |
| ---------------------------------------------- | :-----------------------------------------: | :--------: | :-----: | :--------: |
| Times it Takes to Fully Charge                 | Time it takes to fully charge a Burst Kill. |  Seconds   |   25s   | 10s - 60s  |
| time Multiplier Added Per Kill for Next Charge | Multiplier applied to next charge per kill. | Multiplier |  0.05x  | 0x - 0.5x  |
| Times it Takes to Use a Full Charge            | Time it takes to use the full Burst Charge. |  Seconds   |   1s    | 0.05s - 5s |
