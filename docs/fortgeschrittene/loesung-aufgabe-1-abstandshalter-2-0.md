---
sidebar_position: 11
---

# Lösung: Abstandshalter

```python
from codrone_edu.drone import *
import time

TARGET_CM = 60
TOLERANCE_CM = 10

drone = Drone()
drone.pair()

drone.takeoff()
start = time.time()

while time.time() - start < 12:
    d = drone.get_front_range("cm")

    if d > TARGET_CM + TOLERANCE_CM:
        drone.go("forward", 25, 0.25)
    elif d < TARGET_CM - TOLERANCE_CM:
        drone.go("backward", 25, 0.25)
    else:
        drone.hover(0.2)

drone.land()
drone.close()
```
