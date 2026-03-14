---
sidebar_position: 12
---

# Lösung: Zusatzaufgabe Parcour

```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()
drone.hover(1)

drone.go("forward", 45, 1.5)
drone.turn_right()
drone.go("forward", 45, 1.0)
drone.turn_left()
drone.go("left", 40, 0.8)

drone.land()
drone.disconnect()
```
