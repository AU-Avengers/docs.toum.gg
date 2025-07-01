
# Steam
###### Guide Written by [Chloe](https://totallychloe.carrd.co/)

#### Most Compatible Release: Among Us v16.1.0 (**LATEST**) + TOU Mira v1.0.1

This method will work on Linux by using the Steam version of Among Us.

### What you'll need

- Among Us on [Steam](https://store.steampowered.com/app/945360) running on the most compatible version of Among Us
- Protontricks from your preferred Flatpak manager

### Setup + Downgrading (If Required)

If downgrading is required, you can do so by clicking "Properties", then "Betas", then selecting "public-beta" or "public-previous".
If the mod runs on latest, then make sure that the Beta is set to "None".

Once you've installed the game, navigate to its install folder - "Manage", then "Browse local files".
Duplicate the folder that Among Us is installed to, rename it to something like "Among Us (TOU Mira)", and proceed to the next step.

### Mod Installation

1. Download the latest version of TOU: Mira that supports Steam from [here](https://github.com/AU-Avengers/TOU-Mira/releases/latest).
2. Extract the contents of the archive into your "Among Us (TOU Mira)" folder.
    - "Among Us.exe" and the "BepInEx" folder should both be visible in the same place.
3. In Steam, navigate to the bottom left "Add a Game" button and select "Add a non-Steam game". From here, select your "Among Us.exe" from the "Among Us (TOU Mira)" folder.
4. Right click on Among Us (in Steam), then click "Properties", then "Compatibility", then "Enable the use of a specific Steam Play compatibility tool". 
5. Select your preferred Proton version from the drop-down menu. In testing, 9.0-4 has worked just fine, but most versions should work.
6. Launch this shortcut once, which won't load the mod correctly, but it's needed for the next step.

### DLL Override

1. Open Protontricks, then scroll down to the entry for your "Non-steam shortcut: [name of shortcut]" and select it.
2. Then, select "Edit the default wine prefix", then "Run winecfg".
3. In winecfg, click "Libraries". Enter "winhttp" into the text box, click "Add" and then "OK". You can now exit Protontricks.

### You're Done!

If everything was set up correctly, launching the Steam shortcut for Town of Us should open Among Us with the Town of Us logo on the home screen, replacing the original Among Us logo. Happy tasking!

If your game crashes, doesn't load mods, or another issue occurs, join our [Discord](https://discord.gg/ugyc4EVUYZ) and make a ticket in the [#tour-support](https://discord.com/channels/890249154402586734/900986905154453504) channel for assistance.

**Note**: This guide works as-is on Steam Deck, but TOU: Mira's controller support is imperfect. You'll want to use a mouse and keyboard to play, or do a lot of controller configuration.