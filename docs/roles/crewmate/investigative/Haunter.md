import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Haunter.png')} alt="Icon" align="left" style={{height: 60}} />
# Haunter

The Haunter is a Crewmate Ghost role who appears as a translucent player. Once their tasks are finished, all alive players will see who the Impostors are. However, if an Impostor clicks them first, they will become a normal ghost. Impostors get a warning shortly before and when the Haunter finishes their tasks.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Tasks Left Before Clickable | How many tasks does the Haunter need to have left before they can be caught by other players | Count | 3 | 0 - 5 |
| Tasks Left Before Alerted | How many tasks does the Haunter need to have left before Impostors are alerted to the existence and location of the Haunter | Count | 1 | 0 - 15 |
| Reveal Neutral Roles | Toggles whether or not Neutrals are also revealed alongside Impostors | Toggle | False | True/False |
| Can Be Clicked By | Controls who can click the Haunter to catch them | String | Non-Crew | Everyone / Non-Crew / Imps Only |