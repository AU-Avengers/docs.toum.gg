import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Install/steamlogo.png')} alt="Icon" align="left" style={{ height: '40px', margin: '10px 10px 10px 10px'}} />
# Steam
Guide to install Town of Us: Mira via Steam on Linux / Steam Deck.

This guide requires that you own *Among Us* on [Steam](https://store.steampowered.com/app/945360). You will also need Protontricks from your preferred Flatpak manager.

**Required base game version:** v17.0.0 (latest version)

***

### Mod Installation

**1.** Download the [latest](https://github.com/AU-Avengers/TOU-Mira/releases/latest) Town of Us: Mira version (look for the **.steam-itch.zip** folder).

**2.** Go to your Steam library, right-click *Among Us* and click  **Manage**  >  **Browse Local Files**

**3.** In the File Explorer, navigate to the  common  folder and duplicate your *Among Us* folder. Rename it to something like **Among Us - TOU Mira**.

**4.** Extract the contents of the .zip folder you downloaded and open it. Copy all the contents (two folders and five files) and paste them into the new TOU Mira folder. It should look like this example:

<img src={useBaseUrl('/img/Install/steammira.png')} />

**5.** On Steam, click **Add a Game** in the bottom left corner, select **Add a non-Steam game...**. In the pop-up, locate the AmongUs.exe from your new folder.

**6.** Select your preferred Proton version from the drop-down options (e.g. 90-4). After this, launch the shortcut (it will not launch the mod yet, but this step is required).

### DLL Override

* Open Protontricks, then scroll down to the entry for your **Non-steam shortcut: [name of shortcut]** and select it.
* Select **Edit the default wine prefix**, then **Run winecfg**.
* In **winecfg**, click **Libraries**. Enter `winhttp` into the text box, click **Add > OK**. 

If installed correctly, launching via the Steam shortcut will open the game with the **Town of Us: Mira** logo displayed in the top left corner.

*** 
**Note**: This guide works as-is on Steam Deck, but TOU: Mira's controller support is imperfect. You will need to use a mouse and keyboard to play, or do a lot of controller configuration.

***
If you encounter any issues with installing, please join the Town of Us [Discord](https://discord.gg/ugyc4EVUYZ) server and make a **Mira Support** ticket in the [TOU Support](https://discord.com/channels/890249154402586734/900986905154453504) channel for assistance.

<sub>Original guide written by [Chloe](https://totallychloe.carrd.co/).</sub>
