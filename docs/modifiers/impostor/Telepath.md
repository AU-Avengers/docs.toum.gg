import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Telepath.png')} alt="Icon" align="left" style={{height: 60}} />
# Telepath

#### Impostor Postmortem

Know when your teammate kills (maybe where depending on settings), and depending on other settings, know when and/or where they die.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Know Kill Location | Determines if you know **where** your teammate **kills**. | Toggle | True | N/A |
| Know Death Time | Determines if you know **when** your teammate **dies**. | Toggle | True | N/A |
| Know Death Location | Determines if you know **where** your teammate **dies**. | Toggle | True | N/A |
| Arrow Duration | How long Telepath arrows are visible. | Seconds | 2.5s | 0s - 5s |
| Know About Correct Guess | Determines if you know **when** your teammate **guesses** successfully. | Toggle | True | N/A |
| Know About Failed Guess | Determines if you know **when** your teammate fails to **guess**. | Toggle | True | N/A |
