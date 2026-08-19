---
title: "Epic Games (Heroic Launcher)"
description: "Guide to install Town of Us: Mira via Epic Games on macOS."
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Install/HGLlogo.png')} alt="Icon" align="left" style={{ height: '40px', margin: '15px 10px 10px 00px'}} />

# Heroic (Epic Games)

Guide to install Town of Us: Mira via Heroic Games Launcher.

This guide requires that you own _Among Us_ on [Epic Games.](https://store.epicgames.com/en-US/p/among-us)

---

:::danger[incompatiblity update]
<big><b>Town of Us is incompatible with the latest update of Among Us (v18).</b></big>

Please be patient while we work on downgrade and compatibility updates.

:::

### Installation

> **1.** If you don't already have it, download [**Heroic Games Launcher**](https://heroicgameslauncher.com/). Once installed, log into your Epic Games account.
>
> **2.** On the left-hand menu, click **Wine Manager**. At the top, go to the `Wine-Stable-MacOS` tab and download the **Wine-11.7** version.
>
> **3.** Go to **Library** and install Among Us.
>
> - Once installed, right-click the game and go to Details.
> - On the right side, it will show you the installation path.
> - Click the path to open the game directory.
>
> **4.** Download the latest [**epic-msstore.zip**](https://github.com/AU-Avengers/TOU-Mira/releases/latest) for Town of Us: Mira.
>
> **5.** Extract the .zip folder. Copy all contents and paste them into the Among Us folder opened in Step 3. It should look like the example below.
> <img src={useBaseUrl('/img/Install/HGLinstall.png')} />
> **6.** Go back to Heroic. Right-click Among Us again and click Settings. In the Wine Version tab, select the `Wine-11.7` option downloaded in Step 2.
>
> **7.** Scroll to the bottom of **Settings** and click **winecfg**.
>
> - In the new window, go to **Libraries**.
> - Type `winhttp` then click **Add**.
> - Click **Apply**, then **OK**.
>
> **8.** Launch the game via Heroic Games Launcher. (It may take a few minutes the first time you install; this is normal.)

---

If you encounter any issues installing, please join the [Town of Us Discord](https://discord.com/invite/town-of-us) server and open a **Town of Us Support** ticket in the [TOU Support](https://discord.com/channels/890249154402586734/900986905154453504) channel.
