---
title: "Steam"
description: "Guide to install Town of Us: Mira via Steam on macOS."
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Install/steamlogo.png')} alt="Icon" align="left" style={{ height: '40px', margin: '10px 10px 10px 00px'}} />

# Steam

This guide requires that you own _Among Us_ on [**Steam**](https://store.steampowered.com/app/945360) and have **[PortingKit](https://www.portingkit.com/)** installed.

<sub>**Note:** It is also possible to install via Crossover, but that software must be purchased.</sub>

---

### Downgrading

Town of Us: Mira is currently incompatible with the latest version of Among Us (v18). If you are installing Town of Us for the first time, or did not have your mod installed in a separate folder before the latest update, you must downgrade Among Us before installing the mod. Please follow the steps below to downgrade.

> **1.** Right-click Among Us on Steam, then click Properties.
>
> **2.** Click **Betas** and select `public previous` on the drop-down.
>
> Steam should automatically update your game version to **v17.4**, and you can then follow the guide below.

---

### Mod Installation

> **1.** In PortkingKit, go to **Sources > Steam** and search for/install Among Us.
>
> **2.** Once it’s installed, launch it once and make sure you’re able to sign into your account successfully, then you can close it again. (If needed, you can go back to PortingKit and click Force Close.).
>
> **3.** Go to the Settings for the Among Us instance and select **Wine Configuration**. Select “Libraries” and add `winhttp` in the new override section, then click Apply.
>
> **4.** Download the latest [macOS-linux.zip](https://github.com/AU-Avengers/TOU-Mira/releases/latest) folder for Town of Us: Mira.
>
> **5.** In the **Settings** for the Among Us instance, click **Open C: Drive** and follow this path:
>
> ```md
> Program Files ( x86 ) > Steam > steamapps > common > Among Us
> ```
>
> **6.** Extract the contents of the .zip folder you downloaded and open it. Copy all the contents and paste them into the main Among Us game folder. It should look like the image below.
>
> <img src={useBaseUrl('/img/Install/macfolder.png')} />
>
> **7.** Launch Among Us—if successful, it will display the Town of Us: Mira logo in the top left corner.

---

If you encounter any issues installing, please join the [Town of Us Discord](https://discord.com/invite/town-of-us) server and open a **Town of Us Support** ticket in the [TOU Support](https://discord.com/channels/890249154402586734/900986905154453504) channel.
