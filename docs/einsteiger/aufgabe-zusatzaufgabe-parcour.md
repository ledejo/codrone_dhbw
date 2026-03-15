---
sidebar_position: 11
---

# Zusatzaufgabe: Parcour
Es gibt noch zahlreiche Funktionen und Möglichkeiten die Drohne zu steuern. In dieser Zusatzaufgabe könnt ihr die Drohne durch einen Parcour manövrieren.

### Mögliche Funktionen
`drone.turn_left()`

`drone.turn_right()`

`drone.go("right", power, dauer)` oder `drone.go("left", power, dauer)`

Beispiel:

```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()
drone.hover(2)

drone.go("forward", 50, 2)
drone.hover(1)
drone.turn_right()
drone.hover(1)
drone.go("forward", 50, 1)

drone.land()
drone.disconnect()
```
