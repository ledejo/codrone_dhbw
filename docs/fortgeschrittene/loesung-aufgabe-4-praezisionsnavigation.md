---
sidebar_position: 14
---

# Lösung: Praezisionsnavigation

```python
from codrone_edu.drone import *
import time

TARGET_X = 80
TARGET_Y = -40
TOL = 15

drone = Drone()
drone.pair()

drone.takeoff()
time.sleep(1)

x0 = drone.get_pos_x("cm")
y0 = drone.get_pos_y("cm")

start = time.time()
while time.time() - start < 20:
    x = drone.get_pos_x("cm") - x0
    y = drone.get_pos_y("cm") - y0

    dx = TARGET_X - x
    dy = TARGET_Y - y

    if abs(dx) <= TOL and abs(dy) <= TOL:
        drone.hover(1)
        break

    if abs(dx) >= abs(dy):
        if dx > TOL:
            drone.go("forward", 20, 0.2)
        elif dx < -TOL:
            drone.go("backward", 20, 0.2)
    else:
        if dy > TOL:
            drone.go("left", 20, 0.2)
        elif dy < -TOL:
            drone.go("right", 20, 0.2)

drone.land()
drone.close()
```
