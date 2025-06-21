import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Spy.png')} alt="Icon" align="left" style={{height: 60}} />
# Spy

The Spy is a Crewmate Investigative role that gains extra information on the admin table. Not only does the Spy see how many people are in a room, but they will also see who is in every room. The Spy also has a toggle for a portable Admin Table with a limited battery charge.

### Options

| Option | Description | Type | Default | Range |
|----------|:-----------------:|:------:|:------:|:------:|
| Who Sees Bodies On Admin | Changes who sees bodies on admin. | Nobody / Spy / Everyone But Spy / Everyone | Both | N/A |
| Portable Admin | Changes if the Spy Role and/or/nor the Modifier has access to the portable Admin. | Role / Modifier / Both / Neither | Both | N/A |
| Move With Portable Admin | Determines if you can move around with portable admin open. | Toggle | True | N/A |
| Starting Charge | Amount of charge given right off the bat. | Seconds | 20s | 0s - 30s |
| Round Charge | Amount of charge given after every meeting. | Seconds | 15s | 0s - 30s |
| Task Charge | Amount of charge given after a task is completed. | Seconds | 10s | 0s - 30s |
| Display Cooldown | Cooldown for the portable Admin Button. | Seconds | 15s | 0s - 30s |
| Display Duration | Maximum duration for the portable Admin Button, given that there's enough charge. | Seconds | 15s | ∞ - 30s |
