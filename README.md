# Simulateur_Drone_FPV
Ce répertoire comprend les fichiers utiles à la création de mon simulateur de drone FPV en LUA.



Analyse HID QX7

Les Switchs ainsi que les Joysticks ont chacun 2 valeurs, le pas sur lequel il se trouve ainsi que ça position à l'intérieur du pas.

Ainsi on retrouve obtient une Array contenant ses positions :
| Action | Pas | Position |
|------|------|------|
| Throtle | 8 | 7 |
| Yaw | 10 | 9 |
| Pitch | 6 | 5 |
| Roll | 4 | 3 |
| Switch G2 | 12 | 11 |
| Switch G3 | 14 | 13 |
| Switch D3 | 16 | 15 |

Données manquantes : 0, 1, 2, 17, 18

