---
sidebar_position: 6
---

# Lösung: Das Jo-Jo

```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()

drone.go("down", 50, 1)
drone.hover(1)
drone.go("up", 70, 1.5)
drone.hover(1)

drone.land()
drone.disconnect()
```
