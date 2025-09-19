import useBaseUrl from '@docusaurus/useBaseUrl';

# Steam
Guide to install Town of Us: Mira via Steam on MacOS.

This guide requires that you own *Among Us* on Steam and have **[Crossover](https://www.codeweavers.com/crossover/download)** installed (does not require a purchase).

**Required base game version:** v16.1.0 — **DOWNGRADE REQUIRED.**

***

### Mod Installation

**1.** Install Crossover and start the 14-day trial, then download Steam from the **Install a Windows Application menu**. Install *Among Us* on Steam and check that it launches successfully. If downgrading is required, do so at this point (steps below).

**2.** Download the [latest](https://github.com/AU-Avengers/TOU-Mira/releases/latest) Town of Us: Mira version (look for the **-steam-itch.zip** folder). Drag the downloaded .zip folder to your desktop. 

* **Note:** Some Mac users report that it is necessary to first install [v1.0.0](https://github.com/AU-Avengers/TOU-Mira/releases/tag/v1.0.0) in order to set-up BepInEx successfully, then update to the latest mod version.

**3.** Click the **Open C: Drive** button to open the **Finder** folder, then follow this path: 
```md
Program Files (x86) > Steam > steamapps > common > Among Us 
```

**4.** Open the downloaded TOU  .zip folder on your desktop and copy all of the contents.

**5.** Paste the mod files into the *Among Us* folder. It should look like this example:

<img src={useBaseUrl('/img/Install/macfolder.png')} style={{  width: '500px' }}/>

### Wine Configuration
* On Crossover, select the *Among Us* bottle and to go **Wine Configuration**.
* Click the **Libraries** tab and then add a new override for the `winhttp` library and click **Apply**.
* Restart Steam and launch the game.

If installed correctly, the game will launch with the **Town of Us: Mira** logo displayed in the top left corner.

***

### Downgrading
* Right-click *Among Us* on Steam, then click **Properties**.
* Click **Betas** and select `public previous` on the drop-down.

Steam should automatically update the game to the compatible version, then you can follow the installation steps above.

***

### Crossover Reset
Run the following command in Terminal to reset the expired Crossover trial period:
```md
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Nygosaki/crossover-trial-renew/refs/heads/main/resetCrossoverTrial.sh)"
```

***
If your game crashes, doesn't load mods, or another issue occurs, please join the Town of Us [Discord](https://discord.gg/ugyc4EVUYZ) server and make a **Mira Support** ticket in the [TOU Support](https://discord.com/channels/890249154402586734/900986905154453504) channel for assistance.
