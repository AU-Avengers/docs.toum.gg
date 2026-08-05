---
title: Doomsayer
description: Guess roles to win!
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Doomsayer.png')} align="left" style={{ height: 65, marginRight: '12px' }} />

# Doomsayer

<div className="role-header">
  <img
    className="role-banner"
    src="https://raw.githubusercontent.com/AU-Avengers/TownOfUs-Mira-Unity/master/Assets/TOU-Mira/Sprites/RoleBanners/NeutralBanner.png" />

  <div className="role-info">
    <div className="role-tagline">
      Guess Roles to Win!
    </div>

  <div className="role-alignment">
      <b>&#8226; Alignment:</b> Neutral Evil<br />
    </div>

<p>
      The **Doomsayer** wins by guessing a set number of players' roles. If enabled, they may **observe** players and will receive a list of potential roles of the observed player in the next meeting.
</p>
<p>
      The Doomsayer will not die if they **guess** incorrectly. If all guesses are required in one meeting to win, they will receive a notification of an incorrect guess(es), though it will not confirm which guess was wrong specifically.
</p>

  </div>
</div>

:::note[Tip]

Pay attention to information shared during meetings as well as your own Doomsayer hints.

:::

---

## Doomsayer Hints

<details className="customdetails">
  <summary>**Doomsayer Hints**</summary>
| Hint                                                                   | Role List                                                                                                                                             |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| You observe that (player) has an altered perception of reality.        | Aurial, Eclipsal, Glitch, Imitator, Morphling, Mystic, Parasite, Spy, Time Lord.                                                                      |
| You observe that (player) is capable of performing relentless attacks. | Bomber, Deputy, Jailor, Juggernaut, Sheriff, Vigilante, Warlock.                                                                                      |
| You observe that (player) has an unusual obsession with dead bodies.   | Altruist, Amnesiac, Chef, Janitor, Medium, Medusa, Undertaker, Vampire.                                                                               |
| You observe that (player) hides to guard themself or others.           | Cleric, Engineer, Escapist, Fairy, Grenadier, Medic, Mirrorcaster, Survivor, Warden.                                                                  |
| You observe that (player) has an insight for private information.      | Ambassador, Blackmailer, Doomsayer, Forensic, Herbalist, Mercenary, Oracle, Sentry, Snitch, Trapper.                                                  |
| You observe that (player) is well trained in hunting down prey.        | Hunter, Inquisitor, Investigator, Lookout, Scavenger, Sonar, Swooper, Werewolf.                                                                       |
| You observe that (player) spreads fear amongst the group.              | Ambusher, Arsonist, Barkeeper, Bootlegger, Hypnotist, Miner, Monarch, Officer, Pestilence, Plaguebearer, Prosecutor, Seer, Spellslinger, Transporter. |
| You observe that (player) has a trick up their sleeve.                 | Executioner, Jester, Plumber, Politician, Puppeteer, Swapper, Traitor, Venerer, Veteran.                                                              |
| You observe that (player) is not from this town.                       | Vanilla roles (Detective, Engineer, Tracker, Scientist, Viper, Phantom, Crewmate, Impostor), roles from other mods (addons, etc).                     |
</details>
---

## Abilities

|                                             Button                                              |   Ability   |                                  Description                                   |           Type           |
| :---------------------------------------------------------------------------------------------: | :---------: | :----------------------------------------------------------------------------: | :----------------------: |
| <img src={useBaseUrl('/img/NeutButtons/ObserveButton.png')} alt="Button" style={{width: 50}} /> | **Observe** | Observe a player, gaining a hint in the next meeting what their role could be. |    Player Interaction    |
|    <img src={useBaseUrl('/img/OtherButtons/Guess.png')} alt="Button" style={{width: 50}} />     |  **Guess**  |                          Guess the role of a player.                           | Targeted Meeting Ability |

## Options

| Option                                                            | Description                                                                       |  Type   |      Default      |                  Range                  |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------- | :-----: | :---------------: | :-------------------------------------: |
| Observe Cooldown                                                  | Cooldown for using the Observe ability.                                           | Seconds |        20s        |                 1 - 30s                 |
| Number of Guesses Needed to Win                                   | How many correct guesses are required to win.                                     |  Count  |         3         |                  2 - 5                  |
| Doomsayer Can Guess Crew Investigative Roles                      | Determines whether the Doomsayer can guess CI roles.                              | Toggle  |       False       |              True / False               |
| Doomsayer Guesses All Roles at Once                               | Determines if the Doomsayer must make all guesses in one round to win.            | Toggle  |       False       |              True / False               |
| Doomsayer Can't Observe                                           | Determines whether the Doomsayer cannot use the Observe ability.                  | Toggle  |       False       |              True / False               |
| Doomsayer Win                                                     | Determines what happens when the Doomsayer meets their win condition.             | String  | Leaves in Victory | Leaves in Victory / Ends Game / Nothing |
| ┗ Hide Role On Win Notification (if Leaves in Victory or Nothing) | Determines whether the Doomsayer win notification is hidden upon victory.         | Toggle  |       False        |              True / False               |
| Doomsayer Continues The Game                                      | Determines whether the game will continue if the Doomsayer is the last evil left. | Toggle  |       True        |              True / False               |
