---
sidebar_position: 10
---

# Lösung: Final Challenge - Präzisionsflug

```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()
drone.hover(1)

drone.go("forward", 30, 1.5)
drone.go("right", 25, 0.8)

drone.land()
drone.disconnect()
```
