import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/install/steamlogo.png')} alt="Icon" align="left" style={{ height: '40px', margin: '10px 10px 10px 00px'}} />

# Steam

Guide to install Town of Us: Mira via Steam on MacOS.

This guide requires that you own _Among Us_ on Steam and have **[Crossover](https://www.codeweavers.com/crossover/download)** installed (does not require a purchase).

**Required base game version:** v.17.0.1 (latest version)

---

### Mod Installation

**1.** Install Crossover and start the 14-day trial, then download Steam from the **Install a Windows Application menu**. Install _Among Us_ on Steam and check that it launches successfully. If downgrading is required, do so at this point (steps below).

**2.** Download the [latest](https://github.com/AU-Avengers/TOU-Mira/releases/latest) Town of Us: Mira version (look for the **-steam-itch.zip** folder). Drag the downloaded .zip folder to your desktop.

- **Note:** Some Mac users report that it is necessary to first install [v1.0.0](https://github.com/AU-Avengers/TOU-Mira/releases/tag/v1.0.0) in order to set-up BepInEx successfully, then update to the latest mod version.

**3.** Click the **Open C: Drive** button to open the **Finder** folder, then follow this path:

```md
Program Files (x86) > Steam > steamapps > common > Among Us
```

**4.** Open the downloaded TOU .zip folder on your desktop and copy all of the contents.

**5.** Paste the mod files into the _Among Us_ folder. It should look like this example:

<img src={useBaseUrl('/img/Install/macfolder.png')} style={{  width: '500px' }}/>

### Wine Configuration

- On Crossover, select the _Among Us_ bottle and to go **Wine Configuration**.
- Click the **Libraries** tab and then add a new override for the `winhttp` library and click **Apply**.
- Restart Steam and launch the game.

If installed correctly, the game will launch with the **Town of Us: Mira** logo displayed in the top left corner.

---

### Crossover Reset

Run the following command in Terminal to reset the expired Crossover trial period:

```md
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Nygosaki/crossover-trial-renew/refs/heads/main/resetCrossoverTrial.sh)"
```

---

### Downgrading

- Right-click _Among Us_ on Steam, then click **Properties**.
- Click **Betas** and select `public previous` on the drop-down.

Steam should automatically update the game to the compatible version, then you can follow the installation steps below.

---

If your game crashes, doesn't load mods, or another issue occurs, please join the Town of Us [Discord](https://discord.gg/ugyc4EVUYZ) server and make a **Mira Support** ticket in the [TOU Support](https://discord.com/channels/890249154402586734/900986905154453504) channel for assistance.
