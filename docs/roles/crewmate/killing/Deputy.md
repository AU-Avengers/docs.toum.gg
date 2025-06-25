import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Icons/Deputy.png')} alt="Icon" align="left" style={{height: 60}} />
# Deputy

The Deputy is a Crewmate Killing role that can camp other players. Once a camped player dies the Deputy is alerted to their death. The following meeting the Deputy may then attempt to shoot the killer of the camped player. If successful the killer dies and if not, nothing happens.

### Abilities

| Button | Ability | Description | Type |
|:----------:|:----------:|:-----------------:|:------:|
| <img src={useBaseUrl('/img/CrewButtons/CampButton.png')} alt="Button" style={{width: 50}} /> | Camp | Camp a player to be alerted once they die. After their death, you may attempt to shoot the killer in the next meeting. | Player Interaction |
| <img src={useBaseUrl('/img/OtherButtons/Shoot.png')} alt="Button" style={{width: 50}} /> | Shoot | If your shot is successful, in which the player selected is the killer and isn't invincible, the killer dies. Otherwise, nothing will happen. | Targetted Meeting Ability |
