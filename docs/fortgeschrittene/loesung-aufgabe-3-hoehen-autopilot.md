---
sidebar_position: 13
---

# Lösung: Hoehen-Autopilot

```python
from codrone_edu.drone import *
import time

LOW_CM = 70
HIGH_CM = 90

drone = Drone()
drone.pair()

drone.takeoff()
start = time.time()

while time.time() - start < 15:
    h = drone.get_height("cm")

    if h < LOW_CM:
        drone.set_throttle(20)
        drone.move(0.25)
        drone.reset_move_values()
    elif h > HIGH_CM:
        drone.set_throttle(-20)
        drone.move(0.25)
        drone.reset_move_values()
    else:
        drone.hover(0.2)

drone.land()
drone.close()
```
