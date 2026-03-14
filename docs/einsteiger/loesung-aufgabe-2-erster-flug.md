---
sidebar_position: 4
---

# Lösung: Der erste Flug

```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()
drone.hover(3)
drone.land()

drone.disconnect()
```
