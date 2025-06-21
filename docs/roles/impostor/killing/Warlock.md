import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Warlock.png')} alt="Icon" align="left" style={{height: 60}} />
# Warlock

The Warlock is an Impostor Killing role that can charge up attacks to wipe out the crew quickly.

The Warlock's kill button has three stages: Cooldown, Uncharged, and Charged. You cannot kill while on cooldown but can while it is charging up, however it will reset your charge. When it is charged, you can kill in a small burst to kill multiple players in a short time.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Charge Time | Time it takes to fully charge a Burst Kill. | Seconds | 25s | 10s - 60s |
| Added Charge Time | Multiplier applied to next charge per kill. | Multiplier | 0.05x | 0x - 0.5x |
| Discharge Time | Time it takes to use the full Burst Charge. | Seconds | 1s | 0.05s - 5s |
