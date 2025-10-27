import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Doomsayer.png')} alt="Icon" align="left" style={{height: 60}} />

# Doomsayer

### _Guess Roles to Win!_

#### **Alignment:** Neutral Evil

The **Doomsayer** wins by guessing a set number of players' roles. If enabled, they may **observe** players and will receive a list of potential roles of the observed player in the next meeting.

The Doomsayer will not die if they **guess** incorrectly. They will receive a notification of an incorrect guess(es), though it will not confirm which was wrong specifically.

### Abilities

|                                             Button                                              |   Ability   |                                  Description                                   |           Type           |
| :---------------------------------------------------------------------------------------------: | :---------: | :----------------------------------------------------------------------------: | :----------------------: |
| <img src={useBaseUrl('/img/NeutButtons/ObserveButton.png')} alt="Button" style={{width: 50}} /> | **Observe** | Observe a player, gaining a hint in the next meeting what their role could be. |    Player Interaction    |
|    <img src={useBaseUrl('/img/OtherButtons/Guess.png')} alt="Button" style={{width: 50}} />     |  **Guess**  |                          Guess the role of a player.                           | Targeted Meeting Ability |

### Options

| Option                                       | Description                                                            |  Type   |      Default      |                  Range                  |
| -------------------------------------------- | ---------------------------------------------------------------------- | :-----: | :---------------: | :-------------------------------------: |
| Observe Cooldown                             | Cooldown for using the Observe ability.                                | Seconds |        20s        |                 1 - 30s                 |
| Number of Guesses Needed to Win                | How many correct guesses are required to win.                              |  Count  |         3         |                  2 - 5                  |
| Doomsayer Can Guess Crew Investigative Roles | Determines whether the Doomsayer can guess CI roles.                   | Toggle  |       False       |              True / False               |
| Doomsayer Guesses All Roles at Once          | Determines if the Doomsayer must make all guesses in one round to win. | Toggle  |       False       |              True / False               |
| Doomsayer Can't Observe                      | Determines whether the Doomsayer cannot use the Observe ability.       | Toggle  |       False       |              True / False               |
| Doomsayer Win                                | Determines what happens when the Doomsayer meets their win condition.  | String  | Leaves in Victory | Leaves in Victory / Ends Game / Nothing |

### Doomsayer Hints

| Hint                                                                    | Role List                                                                                                                         |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| You observe that (player) has an altered perception of reality.         | Aurial, Eclipsal, Glitch, Imitator, Morphling, Mystic, Spy.                                                                       |
| You observe that (player) is capable of performing relentless attacks.  | Bomber, Deputy, Jailor, Juggernaut, Sheriff, Vigilante, Warlock.                                                                  |
| You observe that (player) has an unusual obsession with dead bodies. | Altruist, Amnesiac, Chef, Janitor, Medium, Soul Collector, Undertaker, Vampire.                                                   |
| You observe that (player) hides to guard themself or others.            | Cleric, Engineer, Escapist, Grenadier, Guardian Angel, Medic, Mirrorcaster, Survivor, Warden.                                     |
| You observe that (player) has an insight for private information.          | Ambassador, Blackmailer, Detective, Doomsayer, Mercenary, Oracle, Snitch, Trapper.                                              |
| You observe that (player) is well trained in hunting down prey.         | Hunter, Inquisitor, Investigator, Lookout, Scavenger, Swooper, Tracker, Werewolf.                                                 |
| You observe that (player) spreads fear amongst the group.               | Ambusher, Arsonist, Hypnotist, Miner, Plaguebearer, Prosecutor, Seer, Spellslinger, Transporter.                                  |
| You observe that (player) has a trick up their sleeve.                  | Executioner, Jester, Mayor, Plumber, Politician, Swapper, Traitor, Venerer, Veteran.                                                       |
| You observe that (player) is not from this town.                        | Vanilla roles (Detective, Engineer, Tracker, Scientist, Viper, Phantom, Crewmate, Impostor), roles from other mods (addons, etc). |
