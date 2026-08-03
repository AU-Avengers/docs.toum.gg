---
title: "Steam"
description: "Guide to install Town of Us: Mira via Steam on Linux / Steam Deck."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Install/steamlogo.png')} alt="Icon" align="left" style={{ height: '40px', margin: '10px 10px 10px 10px'}} />

# Steam

This guide requires that you own _Among Us_ on [Steam](https://store.steampowered.com/app/945360).

**Note**: This guide works as-is on Steam Deck, but controller support is imperfect. You will need to use a mouse and keyboard to play, or do a lot of controller configuration.

---

### Mod Installation

> **1.** Download the latest [**steam-itch.zip**](https://github.com/AU-Avengers/TOU-Mira/releases/latest) folder for Town of Us: Mira.
>
> **2.** Go to your Steam library, right-click _Among Us_ and click **Manage** > **Browse Local Files**
>
> **3.** In the File Explorer, navigate to the common folder and duplicate your _Among Us_ folder. Rename it to something like **Among Us - TOU Mira**.
>
> **4.** Extract the contents of the .zip folder you downloaded and open it. Copy all the contents and paste them into the new TOU Mira folder. It should look like this example:
>
> <img src={useBaseUrl('/img/Install/steammira.png')} />
>
> **5.** Right-click Among Us on Steam and click `Properties`. In the Launch Options, enter the following:
>
> ```md
> WINEDLLOVERRIDES="winhttp=n,b" %command%
> ```
>
> **6.** Launch from the game exe in your TOU Mira folder. If successful, it will display the **Town of Us: Mira** logo in the top left corner.

---

If you encounter any issues installing, please join the [Town of Us Discord](https://discord.com/invite/town-of-us) server and open a **Town of Us Support** ticket in the [TOU Support](https://discord.com/channels/890249154402586734/900986905154453504) channel.
