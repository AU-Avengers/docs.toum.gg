import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Install/HGLlogo.png')} alt="Icon" align="left" style={{ height: '40px', margin: '10px 10px 10px 10px'}} />

# Epic / Heroic Games (MacOS)

Guide to install Town of Us: Mira via Heroic Games Launcher on MacOS.

This guide requires that you own _Among Us_ on [Epic Games]([https://store.steampowered.com/app/945360](https://store.epicgames.com/en-US/p/among-us)).


**1.** [Download](https://heroicgameslauncher.com/) the Heroic Game Launcher. Once installed, log into your Epic Games account.

**2.** On the left-hand menu, click **Wine Manager**. At the top, go to the `Wine-Stable-MacOS` tab and download the first available version.

**3.** Go to **Library** and install Among Us. 
 * Once installed, right-click the game and go to **Details**. 
 * On the right side, it will show you the installation path. 
 * Click the path to open the game directory.

**4.** [Download](https://github.com/AU-Avengers/TOU-Mira/releases/latest) the latest version of Town of Us: Mira.
(Make sure to download the `epic-msstore.zip`).

**5.** Extract the Mira .zip folder. Copy all contents (two folders and five files) and paste them into the Among Us folder opened in Step 3. 

**6.** Go back to Heroic. Right-click Among Us again and click **Settings**. In the **Wine Version** tab, select the Wine-MacOS option downloaded in Step 2.

**7.** Scroll to the bottom of **Settings** and click **winecfg**. 
* In the new window, go to **Libraries**.
* Type `winhttp` then click **Add**.
 * Click **Apply**, then **OK**.

**8.** Launch the game via Heroic Games Launcher. (It may be take a few minutes the first time you install, this is normal).
