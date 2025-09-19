import useBaseUrl from '@docusaurus/useBaseUrl';

# Epic Games
Guide to install Town of Us: Mira via Epic Games on Windows.

<img src={useBaseUrl('/img/Install/epiclogo.png')}   style={{ float: 'right', width: '100px', margin: '-100px 50px 00px 20px' }}
/>

This guide requires that you own <i>Among Us</i> on [Epic Games](https://store.epicgames.com/en-US/p/among-us).

**Required base game version:** v.16.1.0 — **DOWNGRADE REQUIRED.**
***
### Downgrading

**1.** In the Windows search bar, search for PowerShell and open it.

**2.** Copy the following command, paste  it into PowerShell and hit Enter:
```md
iwr https://github.com/whichtwix/EpicGamesDowngrader/releases/latest/download/DowngradeEpic.ps1 -UseBasicParsing | iex 
```
<b>Note:</b> If you see the prompt <b>Do you want to install Among Us [Y/N]?</b>, type <b>Y</b> and hit Enter.

**3.** If successful, a new folder will open with the downgraded game version at `C:\YourName\Games\AmongUs`. If you see the **.egstore** folder, it has not downgraded correctly.

**4.** Download the [latest](https://github.com/AU-Avengers/TOU-Mira/releases/latest) mod version (look for the **.epic.msstore.zip** file) and extract the contents of the folder. Copy all of the contents and paste them into the downgraded folder. It should look like this example:

<img src={useBaseUrl('/img/Install/miraepicDG.png')} style={{  width: '600px' }}/>

**5.** Launch using the **EpicGamesStarter.exe**. If the exe is missing, download it [here](https://github.com/whichtwix/EpicGamesStarter/releases/latest) and add it to the folder.

<b>Note:</b> After launching, if the console window shows `waiting...` over and over, check that you are logged into the Epic Games Launcher, as the downgrade process may log you out.

***

### Mod Installation

<b>1.</b> Download the [latest](https://github.com/AU-Avengers/TOU-Mira/releases/latest) mod version (look for the **.epic.msstore.zip** file).

<b>2.</b> Navigate to the Epic Games installation location (e.g. `C:\Program Files\Epic Games`). Duplicate the *Among Us* folder and rename it to something like <b>'Among Us - TOU Mira'.</b>

<b>3.</b> Extract the contents of the .zip folder you downloaded and open it. Copy all of the contents and paste them into the new TOU Mira folder. It should look like this example:

<img src="https://media.discordapp.net/attachments/1362163503779155968/1397851420002091038/image.png?ex=68cd0e15&is=68cbbc95&hm=059138f802911d1a30c12b6264431517c2974fcc72fef9439a798c55d4902daf&format=webp&quality=lossless&"/>

<b>4.</b> Download the <b>EpicGamesStarter.exe</b> [here](https://github.com/whichtwix/EpicGamesStarter/releases/latest). Extract the file and place it into the TOU Mira folder.

<b>5.</b> Launch the game using the <b>EpicGamesStarter.exe.</b>

If installed correctly, the <b>Town of Us: Mira</b> logo will be displayed in the top left corner.

***
* If you encounter any errors or other issues during the downgrade process, please join the [TOU Discord](https://discord.com/invite/town-of-us-reactivated) server and open a **Mira Support** ticket in the [TOU Support](https://discord.com/channels/890249154402586734/900986905154453504) channel, and provide a screenshot of the full terminal window displaying the errors.

<sub>Original guide written by [Chloe](https://totallychloe.carrd.co/).</sub>
