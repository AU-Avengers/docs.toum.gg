---
title: "Steam"
description: "Guide to install Town of Us: Mira via Steam on MacOS."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Install/steamlogo.png')} alt="Icon" align="left" style={{ height: '40px', margin: '10px 10px 10px 10px'}} />

# Steam

This guide requires that you own _Among Us_ on [**Steam**](https://store.steampowered.com/app/945360) and have **[PortingKit](https://www.portingkit.com/)** installed.

<sub>**Note:** It is also possible to install via Crossover, but that software must be purchased.</sub>

---

### Mod Installation

> **1.** In PortkingKit, go to **Sources > Steam** and search for/install Among Us.
>
> **2.** Once it’s installed, launch it once and make sure you’re able to sign into your account successfully, then you can close it again. (If needed, you can go back to PortingKit and click Force Close.).
>
> **3.** Go to the Settings for the Among Us instance and select **Wine Configuration**. Select “Libraries” and add `winhttp` in the new override section, then click Apply.
>
> **4.** Download the [latest](https://github.com/AU-Avengers/TOU-Mira/releases/latest) version of Town of Us: Mira and extract the `steam-itch.zip` folder.
>
> **5.** In the **Settings** for the Among Us instance, click **Open C: Drive** and follow this path:
>
> ```md
> Program Files ( x86 ) > Steam > steamapps > common > Among Us
> ```
>
> **6.** Copy the contents of the extracted Mira folder and paste them into the Among Us directory. It should look like the example below.
>
> <img src={useBaseUrl('/img/Install/macfolder.png')} />
>
> **7.** Launch Among Us—if successful, it will display the Town of Us: Mira logo in the top left corner.

---

If you encounter any issues installing, please join the [Town of Us Discord](https://discord.com/invite/town-of-us) server and open a **Town of Us Support** ticket in the [TOU Support](https://discord.com/channels/890249154402586734/900986905154453504) channel.
