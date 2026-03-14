---
sidebar_position: 12
---

# Lösung: Sicherheits-Landung bei Hindernis

```python
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

drone.takeoff()
drone.hover(1)

start = time.time()
while time.time() - start < 15:
    if drone.detect_wall(35):
        drone.hover(1)
        break

    drone.go("forward", 25, 0.2)

drone.land()
drone.close()
```
