import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Egotist.png')} alt="Icon" align="left" style={{height: 60}} />

# Egotist

#### Crewmate Alliance

The Egotist is a Crewmate Alliance modifier (signified by a dark green **#**). As the Egotist, you can **only** win if Crewmates lose, but you can still win even in death. If no crewmates remain after a meeting ends, you will leave in victory, but the game will continue.

Egotist [Snitch](/docs/roles/crewmate/investigative/Snitch) and [Mayor](/docs/roles/crewmate/power/Mayor) also reveal themselves as evil to neutrals and impostors alike, and they do not get punished when killing crewmates.

### Options

| Option                                       |                                                 Description                                                 |    Type    | Default |     Range      |
| -------------------------------------------- | :---------------------------------------------------------------------------------------------------------: | :--------: | :-----: | :------------: |
| Egotist Must Stay Alive To Win               |                        Determines whether the Egotist must be alive to win.                        |   Toggle   |  False  |  True / False  |
| Egotist Speeds Up the Game                   | Determines whether a living Egotist will increase speed and cooldowns. They will reset if the Egotist dies. |   Toggle   |  True   |  True / False  |
| ┣ Rounds Required for Speed/Cooldown Changes |                  Determines how many rounds it takes for the speed changes to take place.                   |   Count    |    1    |      1 -5      |
| ┣ Speed Addition                             |                   How much player speed will increase by each round the Egotist is alive.                   | Multiplier | 0.100x  | 0.000 - 1.500x |
| ┗ Cooldown Reduction                        |                   How much cooldowns will be reduced by each round the Egotist is alive.                    |  Seconds   |  1.50s  |  0.00 - 5.00s  |
